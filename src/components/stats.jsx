import PropTypes from 'prop-types'

const Stats = (props) => {
    return (
        <>
            <div className="scores-container">
                <div className="stat-icon">
                    <img src={props.icone} alt="" />
                </div>
                <div>
                    <div className="stat-value">{props.stat}</div>
                    <div>
                        <p className="stat-name" >{props.title}</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Stats


Stats.propTypes = {
    id: PropTypes.number,
    stat: PropTypes.number,
    title: PropTypes.string,
    icone: PropTypes.string
}