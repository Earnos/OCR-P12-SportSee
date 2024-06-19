import PropTypes from 'prop-types'

const Title = (props) => {
    return (
        <>
            <div className="main-title-container">
                <h1 className="main-title">Bonjour <span className="title-name">{props.name}</span></h1>
                <p className="main-title-text">
                    Félicitation ! Vous avez explosé vos objectifs hier 👏
                </p>
            </div>
        </>
    )
}

export default Title

Title.propTypes = {
    name: PropTypes.string
}
