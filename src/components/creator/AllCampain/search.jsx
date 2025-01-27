// import React from 'react'
// import "../../../styles/creator/AllCampain/search.css"
// import searchIcon from "../../../assets/creator/searchIcon.png"


// function Searchcampain() {
//   return (
//     <div>
//         <div className='crator_search_bar_parent' >
//             <div>
//                 <img src={searchIcon} alt="" />
//             </div>
//             <div>
//             <input type="text" style={{border: "none"}} className='creator_search_box_input'  placeholder='Search anything here... ' /> 
//             </div>

//         </div>
//     </div>
//   )
// }

// export default Searchcampain

import React, { useState } from 'react';
import "../../../styles/creator/AllCampain/search.css";
import searchIcon from "../../../assets/creator/searchIcon.png";

function Searchcampain({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <div>
      <div className='crator_search_bar_parent'>
        <div>
          <img src={searchIcon} alt="" />
        </div>
        <div>
          <input
            type="text"
            style={{ border: "none" }}
            className='creator_search_box_input'
            placeholder='Search anything here... '
            value={query}
            onChange={handleInputChange}
          />
        </div>
      </div>
    </div>
  );
}

export default Searchcampain;
