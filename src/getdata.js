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
