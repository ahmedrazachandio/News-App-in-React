
// import moment from "moment";


const NavBar = () => {

    return (
        <nav className="navbar" style={{ backgroundColor: "#0b5fae" }}>
            <div className="container-fluid">
                <a className="navbar-heading" href="/">News App</a>
                    <span className=""></span>
                <div className="" id="navbarSupportedContent">
                </div>
            </div>
            {/* <div className="dateDiv">
                <div id="date">{moment().format("D MMM YYYY")}</div>
                <div id="time">{moment().format("h:mm:s a")}</div>
            </div> */}
        </nav>
    )
}

export default NavBar;