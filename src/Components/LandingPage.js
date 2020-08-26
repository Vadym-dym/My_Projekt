import React from "react";
import { Link } from "react-router-dom";


const linkStyle = {
    width: "30%",
    marginLeft: "50%",
    transform: "translate(-50%)"
};

const LandingPage = () => {
    return (
        <div className="landing_body">
            <div className="right_section">
                <h2 style={{ color: "#0a702a" }}>
                “Tell me what you eat and I will tell you what your are”
                </h2>
                <p className="author">Jean Anthelme Brillat-Savarin</p>
                <Link to="/ingredients" style={linkStyle}>
                    <button className="click"> Click Me</button>
                </Link>
            </div>
        </div >
    );
}
export default LandingPage;
