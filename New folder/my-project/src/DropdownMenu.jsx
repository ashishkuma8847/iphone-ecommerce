// import React, { useState } from "react";

// const DropdownMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);

//     const toggleMenu = () => {setIsOpen(!isOpen); };

//     return (
//         <div style={{ position: "relative", display: "inline-block" }}>
//             <button onClick={toggleMenu}className="bg-blue-600 text-white p-10 ">Menu</button>

//             {isOpen && (<div style={{
//                         position: "absolute",
//                         top: "100%",
//                         left: "0",
//                         marginTop: "5px",
//                         padding: "10px",
//                         backgroundColor: "#FFF",
//                         boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
//                         borderRadius: "5px",
//                         zIndex: "1000",
//                     }} >
//                     <ul style={{ listStyleType: "none", margin: 0, padding: 0 }}>
//                         <li
//                             style={{
//                                 padding: "8px 12px",
//                                 cursor: "pointer",
//                                 borderBottom: "1px solid #ddd",
//                             }}
//                             onClick={() => alert("Option 1 clicked")} >
//                             Option 1
//                         </li>
//                         <li
//                             style={{
//                                 padding: "8px 12px",
//                                 cursor: "pointer",
//                                 borderBottom: "1px solid #ddd",
//                             }}
//                             onClick={() => alert("Option 2 clicked")}
//                         >
//                             Option 2
//                         </li>
//                         <li
//                             style={{
//                                 padding: "8px 12px",
//                                 cursor: "pointer",
//                             }}
//                             onClick={() => alert("Option 3 clicked")}
//                         >
//                             Option 3
//                         </li>
//                     </ul>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default DropdownMenu;
// import React, { useState, useEffect, useRef } from "react";

// function ClickOutsideExample() {
//   const [isOpen, setIsOpen] = useState(false);
//   const boxRef = useRef(null);

//   const handleOutsideClick = (event) => {
//     // अगर क्लिक boxRef के अंदर नहीं है
//     if (boxRef.current && !boxRef.current.contains(event.target)) {
//       setIsOpen(false);
//     }
//   };

//   useEffect(() => {
//     // "mousedown" इवेंट को document पर add करें
//     document.addEventListener("mousedown", handleOutsideClick);

//     // Cleanup function
//     return () => {
//       document.removeEventListener("mousedown", handleOutsideClick);
//     };
//   }, []);

//   return (
//     <div>
//       <button onClick={() => setIsOpen(!isOpen)}>
//         {isOpen ? "Close Box" : "Open Box"}
//       </button>

//       {isOpen && (
//         <div
//           ref={boxRef}
//           style={{
//             width: "200px",
//             height: "200px",
//             backgroundColor: "lightblue",
//             marginTop: "20px",
//           }}
//         >
//           Click outside this box to close.
//         </div>
//       )}
//     </div>
//   );
// }

// export default ClickOutsideExample

// import React, { useRef } from "react";

// function FocusInput() {
//     const inputRef = useRef(null);

//     const handleFocus = () => {
//     inputRef.current.focus(); // Directly DOM element ko focus karta hai
//   };

//   return (
//     <div>
//       <input ref={inputRef} type="text" placeholder="Type something" />
//       <button onClick={handleFocus}>Focus Input</button>
//     </div>
//   );
// }
// export default FocusInput;

// import React, { useState, useEffect } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     console.log(`Count updated: ${count}`);
//     // Clean-up ka example:
//     return () => {
//       console.log("Cleaning up previous effect...");
//     };
//   }, [count]); // Jab count change hoga, yeh chalega

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter

// import { useState, useEffect } from "react";

// export default function BorderButton() {
//   const [border, setBorder] = useState(false);

//   const handleClick = () => {
//     setBorder(true);

//     setTimeout(() => {
//       setBorder(false);
//     }, 2000); // 2 second ke baad border remove
//   };

//   return (
//     <button
//       onClick={handleClick}
//       className={`px-4 py-2 text-white bg-blue-500 rounded ${
//         border ? "border-2 border-red-500" : "border-none"
//       } transition-all duration-300`}
//     >
//       Click Me
//     </button>
//   );
// }
