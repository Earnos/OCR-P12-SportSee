import { getUserActivity } from '../getdata'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const BarGraph = () => {
    let userActivity = getUserActivity(12)
    return (
        <ResponsiveContainer width="90%" height={300} >
        <BarChart  data={userActivity} barGap={10} margin={{
            top: 5,
            right: 30,
            left: 100,
            bottom: 5,
          }}>
            <Legend name='Activité quotidienne' verticalAlign="top" align='right' iconType='circle' iconSize={8} height={64} margin={{ top: 5, left: 5, right: 5, bottom: 10 }} /> //margin problem
            <XAxis dataKey={userActivity.day} />
            <YAxis dataKey="kilogram" orientation="right" tickCount={4} type="number" domain={['dataMin', 'dataMax']} />
            <Tooltip />
            <Legend />
            <Bar  name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={10} />
            <Bar  name="Calories (Kcal)"  dataKey="calories" fill="#E60000" barSize={10} />
        </BarChart>
        </ResponsiveContainer>
    )
}

export default BarGraph
