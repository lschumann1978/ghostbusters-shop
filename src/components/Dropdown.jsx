import React from "react";

const Dropdown = ({
    labelText,
    classNames,
    listItems,
    selectedValue,
    defaultValue,
    disabled,
    onChange,
}) => {
    return (
        <div className="dropdown mb-3">
            <label className="mr-3">{labelText}</label>
            <select
                className={classNames}
                value={selectedValue}
                defaultValue={defaultValue}
                disabled={disabled}
                onChange={onChange}
            >
                <option key="0" value="">
                    {defaultValue}
                </option>
                {listItems.map((item, index) => (
                    <option key={index} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
