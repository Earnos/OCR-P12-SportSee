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
import {getUserMainData, getUserName} from "../getdata"

const HomePage = () => {
    const userMainData = getUserMainData(18)
    const userFirstName = getUserName(18)
    
    return (
        <>
            <Header />
            <main className="page-container">
                <SideBar />
                <div className="main-section">
                    <div className="name-title-container">
                        <Title name={userFirstName.firstName} />
                    </div>
                    <div className="recharts-container">
                        <section className="left-graph-section">
                            <BarGraph id={18} />
                            <div className="bottom-graph">
                                <div className="linegraph-container">
                                    <LineGraph id={12} />
                                </div>
                                <div className="radar-container">
                                    <RadarGraph  id={18} />
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
