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

const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
        const { kilogram, calories } = payload[0].payload
        return (
            <div style={{
                backgroundColor: '#E60000',
                padding: '25px 15px 25px 10px',
                color: '#FFF',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-between',
                fontFamily: 'Arial, sans-serif',
                fontSize: '14px',
                verticalAlign: 'top',
                lineHeight: '1.2'
            }}>
                <p style={{ margin: 0, fontWeight: 'bold' }}>{`${kilogram}kg`}</p>
                <p style={{ margin: 0 }}>{`${calories}Kcal`}</p>
            </div>
        )
    }

    return null
}



const BarGraph = (props) => {
    const userActivity = props.activity

    // max & min
    const minWeight = Math.min(...userActivity.map(item => item.kilogram))
    const maxWeight = Math.max(...userActivity.map(item => item.kilogram))

    // +- 3kg
    const lowerBound = Math.max(minWeight - 3, 0)
    const upperBound = maxWeight + 4

    return (
        <ResponsiveContainer width="80%" height={300} >
            <span className='barGraphTitle'>Activité quotidienne</span>
        <BarChart  data={userActivity}  barGap={10} margin={{
            top: 5,
            right: 30,
            left: 100,
            bottom: 5,
          }}>
            <Legend name='Activité quotidienne' verticalAlign="top" align='right' iconType='circle' iconSize={8} height={64} margin={{ top: 5, left: 5, right: 5, bottom: 10 }} />
            <XAxis dataKey={userActivity.day} tickFormatter={(tick) => tick + 1}/>
            <YAxis dataKey="kilogram" orientation="right"  type="number" yAxisId="right"  domain={[lowerBound, upperBound]} />
            <YAxis yAxisId="left" dataKey="calories" orientation="left" type="number" hide={true} />
            <Tooltip content={<CustomTooltip />} />
            <Legend />
            <Bar  name="Poids (kg)" dataKey="kilogram" fill="#282D30" barSize={10} radius={[5, 5, 0, 0]} yAxisId="right" />
            <Bar  name="Calories (Kcal)"  dataKey="calories" fill="#E60000" barSize={10} radius={[5, 5, 0, 0]} yAxisId="left"/>
        </BarChart>
        </ResponsiveContainer>
    )
}

export default BarGraph


BarGraph.propTypes = {
    activity: PropTypes.array
}