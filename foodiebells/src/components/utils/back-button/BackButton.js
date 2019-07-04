import React from 'react';
import {Link} from 'react-router-dom';

const BackButton = () => {
    return (
        <Link to="/recipes"><i style={backButtonStyle} className="fa fa-chevron-circle-left" aria-hidden="true"> Recipes</i></Link>
    )
}
const backButtonStyle = {
    color:"#ff2a6b",
    fontSize:"40px",
    padding: "20px"
}

export default BackButton
