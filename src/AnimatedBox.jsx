// import React, { useEffect, useRef, useState } from "react";

// const AnimatedBox = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const boxRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setIsVisible(true);
//           } else {
//             setIsVisible(false);
//           }
//         });
//       },
//       { threshold: 0.5 }
//     );

//     if (boxRef.current) {
//       observer.observe(boxRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <div
//       ref={boxRef}
//       className={`w-40 h-40 bg-blue-500 mx-auto my-20 transition-all duration-500 ${
//         isVisible ? "opacity-100 translate-y-0 translate-x-0" : "opacity-0 translate-y-20 translate-x-20"
//       }`}
//     ></div>
//   );
// };

// export default AnimatedBox;






// import { motion } from "framer-motion";

// const AnimatedBox = () => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 50 , x:50 ,background:"black" }}
//       whileInView={{ opacity: 1, y: 0, x:0,background:"black" }}
//       transition={{ duration: 0.5 }}
//       className="w-40 h-40 bg-green-500 mx-auto my-20"
//     ></motion.div>
//   );
// };

// export default AnimatedBox;