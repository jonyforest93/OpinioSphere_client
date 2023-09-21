import React ,{useState} from "react";
import CategoryButton from "./cateroryButton";
import FilterSelect from "./filterSelect";
import { useTheme } from "../ThemeContext";

const FilterToolbar = ({onCategoryClick, onSortSelect}) => {
    const { isDarkTheme } = useTheme();
    const category = ['All', 'Game', 'Film', 'Book'];
    const [activeCategory, setActiveCategory] = useState('All');

    const handleCategoryClick = (category) => {
        setActiveCategory(category)
        onCategoryClick(category);
    }

    const handleSelect = (value) => {
        switch (value) {
            case 'Newest first':
                onSortSelect('createdAt');
                break;
            case 'High rate':
                onSortSelect('rateAverage');
                break;
            case 'Most popular author':
                onSortSelect('authorLikeSum');
                break;
        }
    }

    return (
        <div className={`${isDarkTheme ? 'bg-backgroundDark' : 'bg-white'}mx-8 mt-8 flex justify-between items-center`}>
            <div>
                {category.map(elem => <CategoryButton
                text={elem}
                key={elem}
                isActive={elem === activeCategory}
                onClick={handleCategoryClick}
            />)}
            </div>
            <FilterSelect onSelect={handleSelect}/>
        </div>
    )
}

export default FilterToolbar;