import {
    RadialBar,
    RadialBarChart,
    Tooltip,
    ResponsiveContainer
} from 'recharts'


let data = [{ name: 'Score', value: '5' }]

const ScoreGraph = () => {
    return (
        <ResponsiveContainer width="30%" height={220}>
            <div className='scoreGraphText'>
                <span className='score-pourcentage'>65%</span><br/>
                <span className='score-text' >de votre objectif</span>
                
            </div>
            <div className='score-title'>
            <span >Score</span>
            </div>
            <RadialBarChart
                width={220}
                height={220}
                innerRadius="80%"
                outerRadius="100%"
                cx={135}
                cy={135}
                data={data}
                startAngle={230}
                endAngle={55}
                fill="red"
                radius={[5, 5, 0, 0]}
            >
                <RadialBar
                    minAngle={15}
                    label={{ fill: '#d31100', position: 'insideStart' }}
                    background
                    clockWise={true}
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
