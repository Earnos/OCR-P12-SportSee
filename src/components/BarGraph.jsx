import PropTypes from 'prop-types'
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts'

const BarGraph = (props) => {
    const userActivity = props.activity
    return (
        <ResponsiveContainer width="80%" height={300} >
            <span className='barGraphTitle'>Activité quotidienne</span>
        <BarChart  data={userActivity} barGap={10} margin={{
            top: 5,
            right: 30,
            left: 100,
            bottom: 5,
          }}>
            <Legend name='Activité quotidienne' verticalAlign="top" align='right' iconType='circle' iconSize={8} height={64} margin={{ top: 5, left: 5, right: 5, bottom: 10 }} /> //margin problem
            <XAxis dataKey={userActivity.day} />
            <YAxis dataKey="calories" orientation="right"  type="number" />
            <Tooltip />
            <Legend />
            <Bar  name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} />
            <Bar  name="Calories (Kcal)"  dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} />
        </BarChart>
        </ResponsiveContainer>
    )
}

export default BarGraph


BarGraph.propTypes = {
    id: PropTypes.number
}