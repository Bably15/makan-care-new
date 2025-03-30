import React from "react";
// import "./Section1.css";
import product_img from "../../assets/small.png";
import menu_img from "../../assets/clean.png";
import menu_img2 from "../../assets/menu_img2.png";

import menu_img3 from "../../assets/menu_img3.png";

import bannerimg from "../../assets/pic4.png";
import CategoryTabs from "../Categorytabs/Categorytabs";
import WallMakeover from "../WallMakeovers/WallMakeovers.jsx";

const Section1 = () => {
    return (
        <>
            <div className="w-full py-5">
                <div className="max-w-7xl mx-auto p-4">
                    <div className="flex flex-wrap -mx-2">
                        <div className="w-full sm:w-4/12">
                            <img src={menu_img} alt="" />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <img src={menu_img2} alt="" />
                        </div>
                        <div className="w-full sm:w-4/12">
                            <img src={menu_img3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <CategoryTabs />
            <WallMakeover />
        </>
    );
};

export default Section1;

// const Section1 = () => {
//   return (
//     <>
//     <div className="w-full py-5">
//       <div className="max-w-7xl mx-auto p-4 h-full">
//         <div className="flex flex-wrap -mx-2 h-full gap-4">
//           <div className="w-full sm:w-8/12">

//          </div>
//          </div>
//          </div>
//          </div>
//          </>

//   )
// }
