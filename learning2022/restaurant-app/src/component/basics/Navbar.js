import React from 'react'

const Navbar = ({filterItem, categories}) => {
  console.log(categories);
    return (
                
        <nav className="navbar">
        <div className="btn-group">
          {categories.map((curElem) => {
            return (
              <button
                className="btn-group__item"
                onClick={() => filterItem(curElem)}>
                {curElem}
              </button>
            );
          })}
        </div>
      </nav>

    )
}

export default Navbar
