import data from './data.json'

const findUserSessions = (key, userId) => {
    let session = []
    data[key].forEach((item) => {
        if (item.userId === userId) {
            session = item.sessions
        }
    })
    return session
}

export const getUserActivity = (userId) => {
    const key = 'USER_ACTIVITY'
    return findUserSessions(key, userId)
}

export const getUserAverageSession = (userId) => {
    const key = 'USER_AVERAGE_SESSIONS'
    return findUserSessions(key, userId)
}

export const getUserPerformance = (userId) => {
    const key = 'USER_PERFORMANCE'
    let datas = []
    data[key].forEach((item) => {
        if (item.userId === userId) {
            datas = item // datas = item.data
        }
    })
    return datas
}

// Get Statistcs of main user (calories, lipids...)
const findUserStats = (key, userId) => {
    let result = null
    data[key].forEach((item) => {
        if (item.id === userId) {
            result = item
        }
    })
    return result
}

// System api's switch class
export class SwitchAPI {
    constructor(useExternalAPI = true, userId = 18) {
        this.useExternalAPI = useExternalAPI
        this.externalAPIBaseUrl = 'http://localhost:3000/user/'
        this.data = []
        this.userId = userId
    }
    findUserSessions(key, userId) {
        let session = []
        this.data[key].forEach((item) => {
            if (item.userId === userId) {
                session = item.sessions
            }
        })
        return session
    }

    getUserActivity(userId) {
        const key = 'USER_ACTIVITY'
        return this.findUserSessions(key, userId)
    }

    getUserMainData = (userId) => {
        const key = 'USER_MAIN_DATA'
        const userData = findUserStats(key, userId)

        if (!userData || !userData.keyData) {
            return null
        }
        const { score, todayScore } = userData
        // console.log('score :', score)
        // console.log('todayScore :', todayScore)
        const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
            userData.keyData

        return {
            calorieCount,
            proteinCount,
            carbohydrateCount,
            lipidCount,
            score,
            todayScore,
        }
    }
    getUserAverageSession(userId) {
        const key = 'USER_AVERAGE_SESSIONS'
        return this.findUserSessions(key, userId)
    }

    getUserPerformance(userId) {
        return this.userData.getPerformance(userId)
    }

    getUserName = async (userId, data) => {
        const key = 'USER_MAIN_DATA'
        const userData = findUserStats(key, userId, data)

        if (!userData || !userData.userInfos) {
            return null
        }

        const userName = userData.userInfos

        return userName
    }

    // fetch between external and local data
    async fetchData() {
        if (this.useExternalAPI) {
            console.log("Utilisation de l'API externe")
            this.data = await this.fetchFromExternalAPI()
        } else {
            console.log('Utilisation des données locales')
            this.data = await this.fetchFromLocalFile()
        }
        this.userData = new UserModel(this.data, this.userId)
    }

    async fetchFromExternalAPI() {
        try {
            //appel aux endpoints de l'api
            const response = await fetch(
                this.externalAPIBaseUrl + this.userId + '/activity'
            )
            if (!response.ok) {
                throw new Error(
                    "Erreur lors de la récupération des données depuis l'API externe"
                )
            }
            let activityData = await response.json()
            let data = {
                USER_ACTIVITY: [activityData.data],
            }

            const responsePerf = await fetch(
                this.externalAPIBaseUrl + this.userId + '/performance'
            )
            if (!responsePerf.ok) {
                throw new Error(
                    "Erreur lors de la récupération des données depuis l'API externe"
                )
            }
            let perfData = await responsePerf.json()
            data['USER_PERFORMANCE'] = [perfData.data]
            const averageSession = await fetch(
                this.externalAPIBaseUrl + this.userId + '/average-sessions'
            )
            if (!averageSession.ok) {
                throw new Error(
                    "Erreur lors de la récupération des données depuis l'API externe"
                )
            }
            let averageData = await averageSession.json()
            data['USER_AVERAGE_SESSIONS'] = [averageData.data]

            const responseMainData = await fetch(
                this.externalAPIBaseUrl + this.userId
            )
            if (!responseMainData.ok) {
                throw new Error(
                    "Erreur lors de la récupération des données USER_MAIN_DATA depuis l'API externe"
                )
            }
            let mainData = await responseMainData.json()
            data['USER_MAIN_DATA'] = [mainData.data]

            this.data = data

            return data
        } catch (error) {
            console.error("Erreur de récupération depuis l'API externe:", error)
            throw error
        }
    }

    async fetchFromLocalFile() {
        try {
            this.data = data
            return data
        } catch (error) {
            console.error(
                'Erreur de récupération depuis le fichier local:',
                error
            )
            throw error
        }
    }
}

// modelisation's class
export class UserModel {
    constructor(data, userId) {
        this.data = data
        this.performance = this.loadPerformance(userId)
        this.userInfos = this.loadUserInfos(userId)
        this.keyData = this.loadKeyData(userId)
        this.sessions = this.loadSessions(userId)
        this.performance = this.loadPerformance(userId)
    }

    loadUserInfos(userId) {
        const key = 'USER_MAIN_DATA'
        let userInfo = null
        this.data[key].forEach((item) => {
            if (item.id === userId) {
                userInfo = item.userInfos
            }
        })
        return userInfo
    }

    loadKeyData(userId) {
        const key = 'USER_MAIN_DATA'
        let keyData = null
        this.data[key].forEach((item) => {
            if (item.id === userId) {
                keyData = item.keyData
            }
        })
        return keyData
    }

    loadSessions(userId) {
        const key = 'USER_AVERAGE_SESSIONS'
        let sessions = null
        this.data[key].forEach((item) => {
            if (item.userId === userId) {
                sessions = item.sessions
            }
        })
        return sessions
    }

    loadPerformance(userId) {
        const key = 'USER_PERFORMANCE'
        let performance = null
        this.data[key].forEach((item) => {
            if (item.userId === userId) {
                performance = item.data
            }
        })
        return performance
    }

    getMainData() {
        if (!this.keyData) {
            return null
        }

        const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
            this.keyData

        return {
            calorieCount,
            proteinCount,
            carbohydrateCount,
            lipidCount,
        }
    }

    getSessions() {
        return this.sessions
    }

    getPerformance() {
        return this.performance
    }

    getUserName() {
        return this.userInfos?.firstName || null
    }
}
