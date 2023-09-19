import React, {useState, useEffect} from "react";

const FilterSelect = ({onSelect}) => {
    const options = ['Newest first', 'High rate', 'Most popular author'];
    const [selectedValue, setSelectedValue] = useState(options[0]);

    const handleSelectChange = (e) => {
        setSelectedValue(e.target.value);
    }

    useEffect(() => {
        onSelect(selectedValue);
    }, [selectedValue]);

    return (
        <>
            <select value={selectedValue} onChange={handleSelectChange} className="w-80 h-11 text-base text-gray-900 border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-customPurple">
                {options.map((elem) => (
                    <option key={elem} value={elem}>
                        {elem}
                    </option>
                ))}
            </select>
        </>
    )
}

export default FilterSelect;