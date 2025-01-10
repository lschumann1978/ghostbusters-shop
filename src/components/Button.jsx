import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ className, disabled, onClick, children }) => {
    return (
        <>
            <button className={className} disabled={disabled} onClick={onClick}>
                {children}
            </button>
        </>
    );
};

Button.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node.isRequired
};

export default Button;