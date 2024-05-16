import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts'

const Title = () => {
    const data = [{ name: 'Page A', uv: 400, pv: 2400, amt: 2400 }]
    return (
        <>
            <div className="main-container">
                <div className="main-title-container">
                    <h1 className="main-title">Bonjour 'Cyril'</h1>
                    <p className="main-title-text">
                        Félicitation ! Vous avez explosé vos objectifs hier 👏
                    </p>
                </div>
                
                {/* <LineChart width={600} height={300} data={data}>
                    <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart> */}
                {/* <BarChart width={730} height={250} data={data}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="pv" fill="#8884d8" />
                    <Bar dataKey="uv" fill="#82ca9d" />
                </BarChart> */}
            </div>
        </>
    )
}

export default Title
