import PropTypes from 'prop-types'
import {
    LineChart,
    Line,
    Tooltip,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from 'recharts'

const LineGraph = (props) => {
    const averageSession = props.averageSession

    const CustomXAxisTick = ({ x, y, payload }) => {
        const weekDaysArray = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
        return (
                <g transform={`translate(${x},${y})`}>
                    <text x={0} y={0} dy={16} textAnchor="middle" fill="#fff">
                        {weekDaysArray[payload.value - 1]}
                    </text>
                </g>
        )
    }
     // Custom Tooltip Component
     const CustomTooltip = ({ payload }) => {
        if (payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="tooltip-content">{`${payload[0].payload.sessionLength} min`}</p>
                </div>
            )
        }
        return null
    }
    return (
        <ResponsiveContainer width="100%" height={300}>
            <span className="bar-line-title">Durée moyenne des sessions</span>
            <LineChart
                width="100%"
                height="100%"
                data={averageSession}
                margin={{ top: 5, right: 25, bottom: 5, left: 25}}
            >
                <CartesianGrid stroke="red" />
                <YAxis dataKey="sessionLength" hide={true} padding={{top: 45, bottom: 45}} />
                <XAxis dataKey="day" tick={<CustomXAxisTick />} axisLine={false} tickLine={false} />
                <Tooltip  content={<CustomTooltip />}/>
                
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
                    dot={false}
                />
            </LineChart>
        </ResponsiveContainer>
    )
}

export default LineGraph

LineGraph.propTypes = {
    averageSession: PropTypes.array,
}
