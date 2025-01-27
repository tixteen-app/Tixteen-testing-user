// import React, { useEffect, useState } from 'react';
// import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
// import NewHeader from '../../components/NewHome/Header/NewHeader';
// import Discove from '../../components/NewHome/Discove/Discove';
// import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
// import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
// import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
// import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
// import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
// import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
// import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
// import Stayupdate from '../../components/NewHome/influncer/Stayupdate';
// import SmoothScroll from "../../utils/scroll/smoothscroll";
// import ClienteleSecond from '../../components/Home/Clientele/secondimages';
// import AlertImg from "../../assets/alert.jpg";
// import {motion } from 'framer-motion';
// import '../../styles/pages/new.css'; 

// function New() {
//   const [showYellowBg, setShowYellowBg] = useState(true);
//   const [showAlert, setShowAlert] = useState(false);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       // setShowYellowBg(true);
//       setShowAlert(true);
//     }, 5000);
//     return () => clearTimeout(timer);
//   }, []);

//   const closeAlert = () => {
//     setShowAlert(false);
//   };

//   return (
//     <div>
//       {showAlert && (
//         <>
//           <motion.div
          
          
//           className="alert-modal">
//             <img src={AlertImg} alt="Alert" className="alert-image" />
//             <button className="close-button" onClick={closeAlert}>X</button>
//           </motion.div>
//         </>
//       )}
//       {showYellowBg ? (
//         <div>
//           <NewHeader />
//           <HomeVideo />
//           <CollaborationOptions />
//           <ClienteleSecond />
//           <ChroniclesHeading />
//           <IndustriesServe />
//           <InfluencerImage />
//           <Maininfluencerplatform />
//           <Stayupdate />
//         </div>
//       ) : (
//         <TopHeaderVideo />
//       )}
//     </div>
//   );
// }

// export default New;

import React, { useEffect, useState } from 'react';
import TopHeaderVideo from '../../components/NewHome/Header/TopHeaderVideo';
import NewHeader from '../../components/NewHome/Header/NewHeader';
import Discove from '../../components/NewHome/Discove/Discove';
import HomeVideo from '../../components/NewHome/HomeVideo/HomeVideo';
import WallOfWork from '../../components/NewHome/WallOfWork/WallOfWork';
import CollaborationOptions from '../../components/NewHome/Collaboration/CollaborationList';
import ChroniclesHeading from '../../components/NewHome/Chronicles/ChroniclesHeading';
import IndustriesServe from '../../components/NewHome/INDUSTRIES/INDUSTRIESserver';
import InfluencerImage from '../../components/NewHome/influncer/influncerImages';
import Maininfluencerplatform from '../../components/NewHome/influencerplatform/Maininfluencerplatform';
import Stayupdate from '../../components/NewHome/influncer/Stayupdate';
import SmoothScroll from "../../utils/scroll/smoothscroll";
import ClienteleSecond from '../../components/Home/Clientele/secondimages';
import AlertImg from "../../assets/alert.jpg";
import { motion } from 'framer-motion';
import Cookies from 'js-cookie'; // Import js-cookie
import '../../styles/pages/new.css'; 

function New() {
  const [showYellowBg, setShowYellowBg] = useState(true);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    const alertImageInCookie = Cookies.get('alertImage');
    if (alertImageInCookie) {
      setShowAlert(true); 
    } else {
      const timer = setTimeout(() => {
        setShowAlert(true); 
        Cookies.set('alertImage', AlertImg, { expires: 1 });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closeAlert = () => {
    setShowAlert(false);
    Cookies.remove('alertImage');  };

  return (
    <div>
      {showAlert && (
        <motion.div className="alert-modal">
          <img src={AlertImg} alt="Alert" className="alert-image" />
          <button className="close-button" onClick={closeAlert}>X</button>
        </motion.div>
      )}
      {showYellowBg ? (
        <div>
          <NewHeader />
          <HomeVideo />
          <CollaborationOptions />
          <ClienteleSecond />
          <ChroniclesHeading />
          <IndustriesServe />
          <InfluencerImage />
          <Maininfluencerplatform />
          <Stayupdate />
        </div>
      ) : (
        <TopHeaderVideo />
      )}
    </div>
  );
}

export default New;
