import React, { } from 'react'
import PropTypes from 'prop-types'

function Navbar(props) {
    return(
      <div className = "col-md-8 mb-4">
        <h3>{props.title}</h3>
      </div>
    )
}
//Navbar.PropTypes = {
//    title : PropTypes.string.isRequired
//}
Navbar.defaultProps = {
    title : "Default App"
}
export default Navbar;
