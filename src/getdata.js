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

export const getUserName = (userId) => {
    const key = 'USER_MAIN_DATA'
    const userData = findUserStats(key, userId)

    if (!userData || !userData.userInfos) {
        return null
    }

    const userName = userData.userInfos

    return userName
}

//////////////////////////////////////////////////////////////////////
// System api's switch class
//////////////////////////////////////////////////////////////////////

class SwitchAPI {
    constructor(useExternalAPI) {
        this.useExternalAPI = false
        this.externalAPIBaseUrl = './api'
    }

    async fetchData() {
        if (this.useExternalAPI) {
            return this.fetchFromExternalAPI()
        } else {
            return this.fetchFromLocalFile()
        }
    }

    async fetchFromExternalAPI() {
        try {
            const response = await fetch(this.externalAPIBaseUrl + '/endpoint')
            if (!response.ok) {
                throw new Error(
                    "Erreur lors de la récupération des données depuis l'API externe"
                )
            }
            return await response.json()
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
///////////////////////////////////////////////////////
// Recup les données ??

// switch.setSource(true)

// switch.fetchData()
//     .then(data => {
//         // get data ?
//     })
//     .catch(error => {error})
