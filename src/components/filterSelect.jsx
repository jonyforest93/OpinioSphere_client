import React, {useState, useEffect} from "react";
import { useTranslation } from "react-i18next";
import { useTheme } from "../ThemeContext";

const FilterSelect = ({onSelect}) => {
    const { isDarkTheme } = useTheme();
    const {t} = useTranslation();
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
            <select
                value={selectedValue}
                onChange={handleSelectChange}
                className={`${isDarkTheme ? 'text-textDark bg-backgroundDark border-borderDark' : 'text-gray-900 bg-white'}
                w-80 h-11 text-base border rounded-lg px-4 py-2 focus:outline-none focus:ring focus:border-customPurple`}>
                {options.map((elem) => (
                    <option key={elem} value={elem}>
                        {t(elem)}
                    </option>
                ))}
            </select>
        </>
    )
}

export default FilterSelect;