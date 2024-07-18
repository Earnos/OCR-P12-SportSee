import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Header from '../components/header'
import SideBar from '../components/sideBar'
import Title from '../components/title'
import BarGraph from '../components/BarGraph'
import LineGraph from '../components/lineGraph'
import RadarGraph from '../components/radarChart'
import Stats from '../components/stats'
import calIcone from '../assets/calories-icon.png'
import carbsIcone from '../assets/protein-icon.png'
import fatIcon from '../assets/fat-icon.png'
import glucideIcon from '../assets/carbs-icon.png'
import ScoreGraph from '../components/scoreGraph'
import { SwitchAPI } from '../getdata'

const HomePage = () => {
    let { id } = useParams()
    const idUser = parseInt(id)
    const useExternalApi = true
    const api = new SwitchAPI(useExternalApi, idUser)

    const [userMainData, setUserMainData] = useState({})
    const [userActivity, setUserActivity] = useState([])
    const [userPerformance, setUserPerformance] = useState([])
    const [userAverageSessions, setAverageSessions] = useState([])
    const [userFirstName, setUserFirstName] = useState('')

    useEffect(() => {
        const fetchDataAndSetState = async () => {
            try {
                await api.fetchData()

                setUserMainData(api.getUserMainData(idUser))
                setUserActivity(api.getUserActivity(idUser))
                setUserPerformance(api.getUserPerformance(idUser))
                setAverageSessions(api.getUserAverageSession(idUser))
                const userInfo = await api.getUserName(idUser)
                setUserFirstName(userInfo.firstName)

                console.log(api.data)
            } catch (error) {
                console.error('Erreur lors du chargement des données :', error)
            }
        }

        fetchDataAndSetState()
    }, [idUser])

    return (
        // faire un contidionnal rendering pour la gestion derreur si fetching error (ternaire)
        <>
            <Header />
            <main className="page-container">
                <SideBar />
                <div className="main-section">
                    <div className="name-title-container">
                        <Title name={userFirstName} />
                    </div>
                    <div className="recharts-container">
                        <section className="left-graph-section">
                            <BarGraph id={idUser} activity={userActivity} />
                            <div className="bottom-graph">
                                <div className="linegraph-container">
                                    <LineGraph id={idUser}  averageSession ={userAverageSessions} />
                                </div>
                                <div className="radar-container">
                                    <RadarGraph id={idUser}  performance={userPerformance} />
                                </div>
                                <ScoreGraph />
                            </div>
                        </section>
                        <section className="right-graph-section">
                            <Stats
                                icone={calIcone}
                                stat={userMainData.calorieCount}
                                title={'calories'}
                            />
                            <Stats
                                icone={carbsIcone}
                                stat={userMainData.proteinCount}
                                title={'Proteines'}
                            />
                            <Stats
                                icone={glucideIcon}
                                stat={userMainData.carbohydrateCount}
                                title={'Glucides'}
                            />
                            <Stats
                                icone={fatIcon}
                                stat={userMainData.lipidCount}
                                title={'Lipides'}
                            />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage
