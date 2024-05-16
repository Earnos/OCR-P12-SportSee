import logo from '../assets/logo.png'
import logoTitle from '../assets/SportSee.png'
import HeaderNav from './header_nav'

const Header = () => {
    return (
        <>
            <div className="header-container">
                <div className="logo-container">
                    <img
                        src={logo}
                        alt="logo de l'entreprise"
                        className="logo"
                    />
                    <img
                        src={logoTitle}
                        alt="Nom de l'entreprise"
                        className="title"
                    />
                </div>
                <HeaderNav />
            </div>
        </>
    )
}

export default Header
