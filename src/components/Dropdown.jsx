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
                <option value="">{defaultValue}</option>
                {listItems.map((item) => (
                    <option key={item.value} value={item.value}>
                        {item.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default Dropdown;
