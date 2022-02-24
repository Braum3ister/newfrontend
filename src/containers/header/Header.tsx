import React from 'react';
import PropTypes from 'prop-types';
import Navbar from "../../components/navbar/Navbar";

Header.propTypes = {
    heading: PropTypes.string.isRequired,

};

function Header({heading} : {heading:string}) {
    return (
        <div>
            <Navbar/>
        </div>
    );
}

export default Header;