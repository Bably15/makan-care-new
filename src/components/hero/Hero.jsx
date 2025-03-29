import "./Hero.css";
import logo_site from "../../assets/logo.png";
import rocket from '../../assets/inter-logo.png';
import img_3 from "../../assets/small.png";
import Banner from "../Banner/Banner";
import Banner1 from "../Banner1/Banner1";
import cart_icon from "../../assets/cart.png";
import heart_icon from "../../assets/heart.png";
import slide2 from "../../assets/slide2.png"
import slide3 from "../../assets/slide3.png"
import slide4 from "../../assets/slide4.png"
import slide5 from "../../assets/slide5.png"
import slide6 from "../../assets/slide6.png"
import Banner2 from "../Banner2/Banner2";
import OnlyHead from "../OnlyHead/OnlyHead";


// const Hero = () => {
//   return (
//     <div>
//       <section className="hero">
//         <div className="hero-main">
//           <div className="fl-display">
//             <div className="hero-content">
//               {/* <p className="sale-text">Big Saving Days Sale</p>
//           <h1>Electrician Service at Makan Care</h1>
//           <p className="price">Starting at only <span>$59.00</span></p>
//           <button className="shop-btn">SHOP NOW</button> */}
//               <>
//                 <Banner />
//               </>
//             </div>
//             <div className="hero-image">
//               <a href="#">
//                 <>
//                   <Banner1 />
//                 </>
//               </a>
//               <a href="#">
//                 <>
//                   <Banner2 />
//                 </>
//               </a>
//             </div>
//           </div>
//           <div>
//             <div className="service-gallery">
//               <img src={img_3} alt="Service 1" />
//               <img src={slide2} alt="Service 2" />
//               <img src={slide3} alt="Service 3" />
//               <img src={slide4} alt="Service 4" />
//               <img src={slide5} alt="Service 5" />
//               <img src={slide6} alt="Service 6" />
//             </div>
//           </div>
//         </div>

//         {/* <div className="hero-side">
//           <div className="service-box">
//             <img src={img_2} alt="Bathroom Cleaning" />
//             <div className="service-info">
//               <h3>Bathroom Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//           <div className="service-box">
//             <img src={img_2} alt="Kitchen Cleaning" />
//             <div className="service-info">
//               <h3>Kitchen Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//           <div className="service-box">
//             <img src={img_2} alt="Bathroom Cleaning" />
//             <div className="service-info">
//               <h3>Bathroom Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//           <div className="service-box">
//             <img src={img_2} alt="Kitchen Cleaning" />
//             <div className="service-info">
//               <h3>Kitchen Cleaning</h3>
//               <p className="price">$129.00</p>
//               <button className="book-btn">BOOK NOW</button>
//             </div>
//           </div>
//         </div> */}
//       </section>
//     </div>
//   );
// };

const Hero = () => {
  return (
    <>
      <div className="w-full py-5">
        <div className="max-w-7xl mx-auto p-4 h-full">
          <div className="flex flex-wrap -mx-2 h-full gap-4">
            <div className="w-full sm:w-8/12">
              <Banner />
            </div>
            <div className="w-full sm:w-4/12 flex-1">
              <div className="flex flex-col h-full">
                <div className="flex-1 mb-4">
                  <Banner1 />
                </div>
                <div className="flex-1">
                  <Banner2 />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="max-w-7xl mx-auto p-4 h-full">
          <div className="flex flex-wrap -mx-2 h-full">
            <div className="w-6/12 sm:w-4/12 md:w-2/12 p-2">
              <img className="w-full h-26 object-cover rounded-lg" src={img_3} alt="Service 1" />
            </div>
            <div className="w-6/12 sm:w-4/12 md:w-2/12 p-2">
              <img className="w-full h-26 object-cover rounded-lg" src={slide2} alt="Service 2" />
            </div>
            <div className="w-6/12 sm:w-4/12 md:w-2/12 p-2">
              <img className="w-full h-26 object-cover rounded-lg" src={slide3} alt="Service 3" />
            </div>
            <div className="w-6/12 sm:w-4/12 md:w-2/12 p-2">
              <img className="w-full h-26 object-cover rounded-lg" src={slide4} alt="Service 4" />
            </div>
            <div className="w-6/12 sm:w-4/12 md:w-2/12 p-2">
              <img className="w-full h-26 object-cover rounded-lg" src={slide5} alt="Service 5" />
            </div>
            <div className="w-6/12 sm:w-4/12 md:w-2/12 p-2">
              <img className="w-full h-26 object-cover rounded-lg" src={slide6} alt="Service 6" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
