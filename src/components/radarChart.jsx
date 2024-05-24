import { getUserPerformance } from '../getdata'
import {
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    RadarChart,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const RadarGraph = () => {
    let userPerformance = getUserPerformance(12)
    console.log(userPerformance);
    return (
        <ResponsiveContainer width="30%" height={250}>
            <RadarChart
                outerRadius={90}
                width={730}
                height={250}
                data={userPerformance}
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar
                    name="kind"
                    dataKey="A"
                    stroke="#8884d8"
                    fill="red"
                    fillOpacity={0.6}
                />
              
                <Legend />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarGraph
