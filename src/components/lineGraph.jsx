import {
    LineChart,
    Line,
    Legend,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'
import { getUserAverageSession } from '../getdata'

const LineGraph = () => {
    let getAverageSession = getUserAverageSession(12)
    return (
        <ResponsiveContainer width="30%" height={300}>
            <LineChart
                width="100%"
                height="100%"
                data={getAverageSession}
                margin={{ top: 5, right: 30, bottom: 5 }}
            >
                <CartesianGrid stroke="red" fill="red" />
                <XAxis dataKey="day" hide={true} />
                <YAxis dataKey="sessionLength" hide={true} />
                <Tooltip />
                <Legend />
                <Line
                    type="monotone"
                    dataKey="day"
                    stroke="white"
                    hide={true}
                />
                <Line
                    type="monotone"
                    dataKey="sessionLength"
                    stroke="white"
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraph
