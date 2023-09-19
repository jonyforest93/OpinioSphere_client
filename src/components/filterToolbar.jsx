import React ,{useState} from "react";
import CateroryButton from "./cateroryButton";
import FilterSelect from "./filterSelect";

const FilterToolbar = ({onCategoryClick, onSortSelect}) => {
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
        <div className="mx-8 mt-8 flex justify-between items-center">
            <div>
                {category.map(elem => <CateroryButton
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