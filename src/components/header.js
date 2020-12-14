import {Link} from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import logo from "../../static/images/wecancodeitnewlogo.png"

const Header = ({siteTitle}) => (
    <header>
        <div className={"container"}>
            <div className={"top-menu"}>
                <div className={"logo"}>
                    <Link to="/" title={"WeCanCodeIT-EdTraining"}>
                        <img alt={"Logo"} src={logo}/>
                    </Link>
                </div>

                <div className={"Start Training"}>
                    <a href={"https://app.histaff.io"}>Get Started</a>
                </div>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    siteTitle: PropTypes.string,
}

Header.defaultProps = {
    siteTitle: ``,
}

export default Header
