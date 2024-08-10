import {
    RadialBar,
    RadialBarChart,
    Tooltip,
    ResponsiveContainer,
} from 'recharts'
import PropTypes from 'prop-types'

const ScoreGraph = (props) => {
    const rawScore = props.score !== undefined ? props.score : props.todayScore
    const score = (rawScore || 0) * 100 // S'assurer que score est bien multiplié par 100

    // Validation du score
    const validScore = Math.min(100, Math.max(0, score))
    let data = [{ name: 'Score', value: validScore }]

    if (isNaN(score)) {
        console.error('score est NaN:', score)
        return null
    }
    const startAngle = 90
    const endAngle = startAngle + (360 * (validScore / 100))

    
    return (
        <ResponsiveContainer width="30%" height={220}>
            <div className="scoreGraphText">
                <span className="score-pourcentage">{score}%</span>
                <br />
                <span className="score-text">de votre objectif</span>
            </div>
            <div className="score-title">
                <span>Score</span>
            </div>
            <RadialBarChart
                width={220}
                height={220}
                innerRadius="80%"
                outerRadius="100%"
                cx={135}
                cy={135}
                data={data}
                startAngle={startAngle}
                endAngle={endAngle}
                fill="red"
                
                >
                <RadialBar
                    minAngle={15}
                    label={{ fill: '#d31100', position: 'insideStart' }}
                    background
                    clockWise
                    dataKey="value"
                    barSize="12"
                    legendType="circle"
                    radius={[10, 0, 0, 10]}
                    cornerRadius={60}
                    />
                <Tooltip />
            </RadialBarChart>
        </ResponsiveContainer>
    )
    }
    
    export default ScoreGraph

ScoreGraph.propTypes = {
    score: PropTypes.number,
    todayScore: PropTypes.number,
}
