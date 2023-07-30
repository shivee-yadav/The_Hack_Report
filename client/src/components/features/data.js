import { GiReceiveMoney } from "react-icons/gi";
import { MdEngineering } from "react-icons/md";
import { GiStorkDelivery } from "react-icons/gi";

export const featureList = [
  {
    id: 1,
    icon:  <GiReceiveMoney color="#0a1930" size={22}/>,
    heading: "40% REDUCED QA COSTS" ,
    text: "We provide quality verification of software products and services with the help of our manual QA testing approach to significantly reduce QA costs"
  },
  {
    id: 2,
    icon: <MdEngineering color="#0a1930" size={22}/> ,
    heading: "QUALITY ENGINEERING" ,
    text: "Our quality engineering services makes sure testing shifts left with a purpose of maintaining maximum test coverage and software quality"
  },
  {
    id: 3,
    icon: <GiStorkDelivery color="#0a1930" size={22}/>,
    heading: "GLOBAL DELIVERY MODEL" ,
    text: "We accommodate a global delivery model via several onshore test centers spread across different countries"
  }
]


