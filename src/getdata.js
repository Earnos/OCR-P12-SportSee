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

export const getUserMainData = (userId) => {
    const key = 'USER_MAIN_DATA'
    const userData = findUserStats(key, userId)

    if (!userData || !userData.keyData) {
        return null
    }

    const { calorieCount, proteinCount, carbohydrateCount, lipidCount } =
        userData.keyData

    return {
        calorieCount,
        proteinCount,
        carbohydrateCount,
        lipidCount,
    }
}

export const getUserName = async (userId, data) => {
    const key = 'USER_MAIN_DATA'
    const userData = findUserStats(key, userId, data)

    if (!userData || !userData.userInfos) {
        return null
    }

    const userName = userData.userInfos

    return userName
}

//////////////////////////////////////////////////////////////////////
// System api's switch class
//////////////////////////////////////////////////////////////////////

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

    async fetchData() {
        if (this.useExternalAPI) {
            this.data = await this.fetchFromExternalAPI()
        } else {
            this.data = await this.fetchFromLocalFile()
        }
    }

    async fetchFromExternalAPI() {
        try {
            //appel aux endpoints de l'api ex : http://localhost:3000/user/${userId}/activity (4 fetchs) voir le readme de l'api
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
            console.log(data)
            return data
        } catch (error) {
            console.error("Erreur de récupération depuis l'API externe:", error)
            throw error
        }
    }

    async fetchFromLocalFile() {
        try {
            const response = await fetch('./getdata.js')
            if (!response.ok) {
                throw new Error(
                    'Erreur lors de la récupération des données depuis le fichier local'
                )
            }
            return await response.json()
        } catch (error) {
            console.error(
                'Erreur de récupération depuis le fichier local:',
                error
            )
            throw error
        }
    }
}
