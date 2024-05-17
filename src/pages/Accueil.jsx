import Header from '../components/header'
import SideBar from '../components/sideBar'
import Title from '../components/title'
import BarGraph from '../components/BarGraph'
import useMockedApi from '../useCall'
import LineGraph from '../components/lineGraph'

const HomePage = () => {
    console.log(useMockedApi);
    return (
        <>
            <Header />
            <div className="page-container">
                <SideBar />
                <div className="main-section">
                <div className="name-title-container">
                <Title />
                </div>
                <div className="recharts-container">
                <BarGraph />
                <LineGraph />
                </div>


                </div>
            </div>
        </>
    )
}

export default HomePage
