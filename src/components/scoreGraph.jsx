import { RadialBar, RadialBarChart, Legend, Tooltip, ResponsiveContainer } from 'recharts'
// import data from '../data.json'

let data = [{name: 'a', value: 10}, {name: 'b', value: 24}]

const ScoreGraph = () => {
    return (
        <ResponsiveContainer  width="30%"height={220}>
            <RadialBarChart
                width={220}
                height={220}
                innerRadius="60%"
                outerRadius="90%"
                data={data}
                startAngle={180}
                endAngle={0}
            >
                <RadialBar
                    minAngle={15}
                    label={{ fill: 'red', position: 'insideStart' }}
                    background
                    clockWise={true}
                    dataKey="value"
                    barSize="30"
                />
                <Legend
                    iconSize={10}
                    width={120}
                    height={140}
                    layout="vertical"
                    verticalAlign="top"
                    align="right"
                />
                <Tooltip />
            </RadialBarChart>
        </ResponsiveContainer>
    )
}

export default ScoreGraph
