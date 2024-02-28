import React from "react";

function CategoryFilter({categories, handleCategoryChange, selectedCategory}) {

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category=>{
        const selected = category === selectedCategory? "selected": ""
        return <button key={category} className={selected} onClick={handleCategoryChange} value={category}>{category}</button>
      })
      /* render <button> elements for each category here */}
    </div>
  );
}

export default CategoryFilter;
