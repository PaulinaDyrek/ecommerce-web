// import React from "react";
// import { useState } from "react";
// import { data } from "../data.js";

// f
// export default function Lightbox({
//   products,
//   slideIndex,
//   nextSlide,
//   previousSlide,
// }) {
//   const [products] = useState(data);
//   return (
//     <>
//       <article className="bg-black bg-opacity-75 absolute top-0 left-0 bottom-0 right-0 z-50">
//         <div>
//           {products.map((item, index) => (
//             <div
//               key={index}
//               className={slideIndex === index + 1 ? "relative" : "hidden"}
//             >
//               <img src={mainImage} alt="" className="w-full lg:rounded-2xl" />
//               <ul>
//                 <li>
//                   <button
//                     onClick={previousSlide}
//                     className="bg-white rounded-full p-5 shadow absolute top left-4 top-1/2 -translate-y-1/2"
//                   >
//                     <FaChevronLeft />
//                   </button>
//                 </li>
//                 <li>
//                   <button
//                     onClick={nextSlide}
//                     className="bg-white rounded-full p-5 shadow absolute top right-4 top-1/2 -translate-y-1/2"
//                   >
//                     <FaChevronRight />
//                   </button>
//                 </li>
//               </ul>
//             </div>
//           ))}
//         </div>
//       </article>
//     </>
//   );
// }
