import HandBurgerMenu from "./HandBurgerMenu";

function NavBar() {
    return (
        <nav className="nav-container">
            <div className="nav-container__child">
                <ul>
                <li className="site-title">get
                <span className="site-title__purple">linked</span></li>
            </ul>
            
            <HandBurgerMenu />
            </div>
        </nav>
    );
}

export default NavBar;