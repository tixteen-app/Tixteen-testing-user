

import React from 'react';
import '../../styles/creator/Snewhome/INDUSTRIES/Parelax.css';

import Groupsixteen from '../../../assets/Newhome/industry/Group 16.png';
import Nooky from '../../../assets/Newhome/industry/nooky-logo_1080x.png';
import Naysha from '../../../assets/Newhome/industry/Naysha.png';
import MIDAS from '../../../assets/Newhome/industry/MIDAS AGRO CATELOGUE 4 1.png';
import Gang from '../../../assets/Newhome/industry/gang-logo.png';
import Tulsi from '../../../assets/Newhome/industry/Tulsi.png';
import Veeta from '../../../assets/Newhome/industry/Veeta Day.png';
import Logo from '../../../assets/Newhome/industry/Logo.png';
import Uttam from '../../../assets/Newhome/industry/uttam sugar 1.png';
import Saburi from '../../../assets/Newhome/industry/Saburi.png';
import Yumiraa from '../../../assets/Newhome/industry/Yumiraa.png';
import GoodEarth from '../../../assets/Newhome/industry/Good Earth.png';
import Tapi from '../../../assets/Newhome/industry/Tapi.png';
import UttamSugar from '../../../assets/Newhome/industry/Uttam.png';
import Huge from '../../../assets/Newhome/industry/Huge.png';
import GoodMorning from '../../../assets/Newhome/industry/Good Morning.png';
import Arjun from '../../../assets/Newhome/industry/Arjun.png';
import Americana from '../../../assets/Newhome/industry/Americana.png';
import Maalana from '../../../assets/Newhome/industry/Maalana-logo 1.png';
import Chukde from '../../../assets/Newhome/industry/chukde 1.png';
import Bonn from '../../../assets/Newhome/industry/Bonn-logo-1-e1677312197468.png';
import Amul from '../../../assets/Newhome/industry/Amul_dairy_logo.png';
import Meesho from '../../../assets/Newhome/industry/meesho_BIG.png';
import Myntra from '../../../assets/Newhome/industry/Myntra-Logo-Trendy-Fashion-PNG.png';
import Amazon from '../../../assets/Newhome/industry/AMZN_BIG.png';
import Netflix from '../../../assets/Newhome/industry/netflix (1).png';
import Prime from '../../../assets/Newhome/industry/663b7866fcf0846eb88a781e_Prime drink logo 1.png';



import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const firstRowImages = [
  {image : Groupsixteen, alt : "Groupsixteen"},
  {image : Nooky, alt : "Nooky"},
  {image : Naysha, alt : "Naysha"},
  {image : MIDAS, alt : "MIDAS"},
  {image : Gang, alt : "Gang"},
  {image : Tulsi, alt : "Tulsi"},
  {image : Veeta, alt : "Veeta"},
  {image : Logo, alt : "Logo"},
  {image : Uttam, alt : "Uttam"},
  {image : Saburi, alt : "Saburi"},
];

const secondRowImages = [
    {image : Tapi, alt : "Tapi"},
    {image : GoodEarth, alt : "GoodEarth"},
  {image : UttamSugar, alt : "UttamSugar"},
  {image : Huge, alt : "Huge"},
  {image : GoodMorning, alt : "GoodMorning"},
  {image : Arjun, alt : "Arjun"},
  {image : Americana, alt : "Americana"},
  {image : Maalana, alt : "Maalana"},
  {image : Chukde, alt : "Chukde"},
];
const thirdRowImages = [
    {image : Bonn, alt : "Bonn"},
    {image : Amul, alt : "Amul"},
{image : Yumiraa, alt : "Yumiraa"},
  {image : Meesho, alt : "Meesho"},
  {image : Myntra, alt : "Myntra"},
  {image : Amazon, alt : "Amazon"},
  {image : Netflix, alt : "Netflix"},
  {image : Prime, alt : "Prime"},
];

const Example = () => {
  return (
    <div className="main_container_for_horizitnal_Scroll_for_new_home">
      <HorizontalScrollCarousel />
    </div>
  );
};
const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const reverseX = useTransform(scrollYProgress, [0, 1], ["10%", "0%"]);

  return (
    <section ref={targetRef} className="carousel-container">
      <div className="carousel-content-for-new-home">
        <motion.div style={{ x }} className="carousel-row carousel-row-for-new-home">
          {firstRowImages.map((card, index) => (
            <motion.div
              key={index}
              className="carousel-item-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={card.image} alt={card.alt} className="carousel-image-list-new-home" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div style={{ x: reverseX }} className="carousel-row carousel-row-for-new-home">
          {secondRowImages.map((card, index) => (
            <motion.div
              key={index}
              className="carousel-item-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={card.image} alt={card.alt} className="carousel-image-list-new-home" />
            </motion.div>
          ))}
        </motion.div>
        <motion.div style={{ x }} className="carousel-row carousel-row-for-new-home">
          {thirdRowImages.map((card, index) => (
            <motion.div
              key={index}
              className="carousel-item-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={card.image} alt={card.alt} className="carousel-image-list-new-home" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Example;