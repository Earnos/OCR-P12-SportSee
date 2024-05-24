import Header from '../components/header'
import SideBar from '../components/sideBar'
import Title from '../components/title'
import BarGraph from '../components/BarGraph'
import useMockedApi from '../useCall'
import LineGraph from '../components/lineGraph'
import RadarGraph from '../components/radarChart'
import Stats from '../components/stats'
import calIcone from '../assets/calories-icon.png'
import carbsIcone from '../assets/protein-icon.png'
import fatIcon from '../assets/fat-icon.png'
import glucideIcon from '../assets/carbs-icon.png'
import ScoreGraph from '../components/scoreGraph'

const HomePage = () => {
    return (
        <>
            <Header />
            <main className="page-container">
                <SideBar />
                <div className="main-section">
                    <div className="name-title-container">
                        <Title />
                    </div>
                    <div className="recharts-container">
                        <section className="left-graph-section">
                        <BarGraph />
                        <div className="bottom-graph">
                            <LineGraph />
                            <RadarGraph />
                            <ScoreGraph />
                          
                        </div>
                        </section>
                        <section className="right-graph-section">
                            <Stats icone={calIcone} stat={'1234kCal'} />
                            <Stats icone={carbsIcone} stat={'155g'} />
                            <Stats icone={glucideIcon} stat={'290g'} />
                            <Stats icone={fatIcon} stat={'50g'} />
                        </section>
                    </div>
                </div>
            </main>
        </>
    )
}

export default HomePage
