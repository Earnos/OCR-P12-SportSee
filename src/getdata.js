import data from './data.json'

export const getUserInfos = () => {
    //console.log(data.USER_MAIN_DATA.userInfos)
    return data.USER_MAIN_DATA.userInfos
}

export const getTodayScore = () => {
    console.log(data.USER_MAIN_DATA.todayScore)
    return data.USER_MAIN_DATA.todayScore
}

export const getScore = () => {
    console.log(data.USER_MAIN_DATA.score)
    return data.USER_MAIN_DATA.score
}

export const getkeyData = () => {
    console.log(data.USER_MAIN_DATA.keyData)
    return data.USER_MAIN_DATA.keyData
}

//export default getkeyData

// const getUserInfos = () => {
//     console.log(data.USER_MAIN_DATA.userInfos)
//     return data.USER_MAIN_DATA.userInfos
// }

//export default getUserInfos
