const Stats = (props) => {
    return (
        <div className="scores-container">
            <div className="stat-icon">
                <img src={props.icone} alt="" />
            </div>
            <div className="stat-value">{props.stat}</div>
        </div>
    )
}

export default Stats
