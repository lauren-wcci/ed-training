import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/hero.png";
import thumbnailEvent from "../../static/images/feature-event.png"
import thumbnailBoard from "../../static/images/feature-board.png"
import thumbnailNews from "../../static/images/feature-news.png"
import thumbnailTeams from "../../static/images/feature-team.png"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="We Can Code IT Education Team Training"/>

        <div className={"page-header home"}>
            <h1>Welcome to the Education Team</h1>
            <p>Now that you've joined the team, let's get you trained up and ready to take on all <br/>the exciting challenges of being a We Can Code IT mission-driven educator!</p>
            <div className={"button"}>
                <a href="https://app.histaff.io" target={"_blank"}>Start Training</a>
            </div>
            {/* <img alt={"Dashboard"} src={featureImage}/> */}
        </div>
    </Layout>
)

export default IndexPage
