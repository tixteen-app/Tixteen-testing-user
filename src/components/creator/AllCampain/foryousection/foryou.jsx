// import React, { useState } from 'react';
// import "../../../styles/creator/AllCampain/forYou/mainforyou.css";
// import Foryoupaid from './foryoupaid';
// import ForyouCart from './foryouCart';

// function Foryou() {
//   const [selectedTab, setSelectedTab] = useState('Barter');

//   return (
//     <div>
//       {/* top bar */}
//       <div>
//         <Foryoupaid selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
//         <ForyouCart selectedTab={selectedTab} />
//       </div>
//     </div>
//   );
// }

// export default Foryou;

import React, { useState } from 'react';
import "../../../styles/creator/AllCampain/forYou/mainforyou.css";
import Foryoupaid from './foryoupaid';
import ForyouCart from './foryouCart';
import Searchcampain from '../search';
import BannerCampain from '../banner';

function Foryou() {
  const [selectedTab, setSelectedTab] = useState('Paid');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <Searchcampain onSearch={handleSearch} />
      <BannerCampain/>
      <Foryoupaid selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <ForyouCart selectedTab={selectedTab} searchQuery={searchQuery} />
    </div>
  );
}

export default Foryou;
