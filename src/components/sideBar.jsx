import logoMediation from '../assets/icon-meditation.png'
import logoNatation from '../assets/icon-natation.png'
import logoVelo from '../assets/icon-velo.png'
import logoHaltere from '../assets/icon-haltere.png'

const SideBar = () => {
    return (
        <div className="side-bar-container">
            <a href="" className="side-bar-icon-link"><img src={logoMediation} alt="meditation" className='side-bar-icon'/></a>
            <a href="" className="side-bar-icon-link"><img src={logoNatation} alt="meditation" className='side-bar-icon'/></a>
            <a href="" className="side-bar-icon-link"><img src={logoVelo} alt="meditation" className='side-bar-icon'/></a>
            <a href="" className="side-bar-icon-link"><img src={logoHaltere} alt="meditation" className='side-bar-icon'/></a>      
        </div>
    )
}

export default SideBar