import data from './data.json'

export const getUserActivity = (userId) => {
    let key = 'USER_ACTIVITY'
    let session = []
    data[key].forEach((item) => {
        console.log(item)
        if (item.userId === userId) {
            session = item.sessions
        }
    })
    console.log(session)
    return session
}

export const getUserAverageSession = (userId) => {
    let key = 'USER_AVERAGE_SESSIONS'
    let session = []
    data[key].forEach((item) => {
        if (item.userId === userId) {
            session = item.sessions
        }
    })
    return session
}
