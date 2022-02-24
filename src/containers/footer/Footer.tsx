import React from 'react';
import PropTypes from 'prop-types';

Footer.propTypes = {
    name : PropTypes.string
    
};

function Footer({name} : {name: string}) {
    return (
        <div>
            {name}
        </div>
    );
}

export default Footer;