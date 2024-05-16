import { BarChart, CartesianGrid, LineChart, XAxis, YAxis, Tooltip, Legend, Line, Bar } from 'recharts'
import Header from '../components/header'
import SideBar from '../components/sideBar'
import Title from '../components/title'
import LineGraph from '../components/lineGraph'
import data from '../data.json'
import useMockedApi from '../useCall'
// import BarChart from '../components/graph'

const HomePage = () => {
    console.log(useMockedApi);
    return (
        <>
            <Header />
            <div className="page-container">
                <SideBar />
                <Title />
                <LineGraph />
                 <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart>
            </div>
        </>
    )
}

export default HomePage
