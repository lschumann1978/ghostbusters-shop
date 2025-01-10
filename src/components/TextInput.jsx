import React from "react";
import PropTypes from "prop-types";

const TextInput = ({ name, className, onChange, onBlur }) => {
    let text = "";
    return (
        <>
            <input
                type="text"
                name={name}
                className={className}
                defaultValue={text}
                onChange={onChange}
                onBlur={onBlur}
            />
        </>
    );
};

TextInput.propTypes = {
    className: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    callback: PropTypes.func,
};

export default TextInput;
