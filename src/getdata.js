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

export const getUserMainData = () => {
    const key = 'USER_MAIN_DATA'
    return findUserSessions(key, userId)
}

export const getUserPerformance = (userId) => {
    const key = 'USER_PERFORMANCE'
    let datas = []
    data[key].forEach((item) => {
        if (item.userId === userId) {
            datas = item.data
        }
    })
    return datas
}
// export const getUserActivity = (userId) => {
//     let key = 'USER_ACTIVITY'
//     let session = []
//     data[key].forEach((item) => {
//         console.log(item)
//         if (item.userId === userId) {
//             session = item.sessions
//         }
//     })
//     console.log(session)
//     return session
// }

// export const getUserAverageSession = (userId) => {
//     let key = 'USER_AVERAGE_SESSIONS'
//     let session = []
//     data[key].forEach((item) => {
//         if (item.userId === userId) {
//             session = item.sessions
//         }
//     })
//     return session
// }
