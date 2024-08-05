import data from '../data.json'
import PropTypes from 'prop-types'
import {
    PolarGrid,
    PolarAngleAxis,
    Radar,
    RadarChart,
    ResponsiveContainer,
} from 'recharts'

const RadarGraph = (props) => {
    const userPerformance = props.performance 
    return (
        <ResponsiveContainer width="100%" height={250}>
            <RadarChart
                outerRadius={90}
                width={730}
                height={250}
                data={userPerformance}
                cy="60%"
            >
                <PolarGrid />
                <PolarAngleAxis dataKey="kind" />
                <Radar
                    name={props.id}
                    dataKey="value"
                    label="false"
                    fill="rgba(255, 1, 1, 0.70)"
                    fillOpacity={0.6}
                    data={data.USER_PERFORMANCE[1].data.map((entry) => ({
                        kind: data.USER_PERFORMANCE[1].kind[
                            entry.kind.toString()
                        ],
                        value: entry.value,
                    }))}
                />
            </RadarChart>
        </ResponsiveContainer>
    )
}

export default RadarGraph

RadarGraph.propTypes = {
    performance: PropTypes.arrayOf(Object)
}
