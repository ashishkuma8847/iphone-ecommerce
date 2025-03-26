import React, { useEffect, useState } from "react";

function App() {
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });
  const [isBlinking, setIsBlinking] = useState(false);

  const startBlinking = () => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);
    }, 200);
  };

  useEffect(() => {
    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX);
      const distance = Math.min(15, Math.sqrt(deltaX ** 2 + deltaY ** 2) / 15);

      const eyeX = Math.cos(angle) * distance;
      const eyeY = Math.sin(angle) * distance;

      setEyePosition({ x: eyeX, y: eyeY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    const blinkInterval = setInterval(() => {
      startBlinking();
    }, Math.random() * (6000 - 4000) + 4000);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      clearInterval(blinkInterval);
    };
  }, []);

  return (
    <div style={styles.container}>
      <div style={styles.crystalBall}>
        <div style={styles.glassOverlay}></div>

        {/* Reflection Overlay */}
        <div style={styles.reflection}></div>

        {/* Left Eye */}
        <div
          style={{
            ...styles.eye,
            height: isBlinking ? "0px" : "30px",
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            left: "50px",
            top: "70px",
            transition: "height 0.2s ease-in-out",
          }}
        ></div>

        {/* Right Eye */}
        <div
          style={{
            ...styles.eye,
            height: isBlinking ? "0px" : "30px",
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            right: "50px",
            top: "70px",
            transition: "height 0.2s ease-in-out",
          }}
        ></div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#0A0A1A",
  },
  crystalBall: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background:
      "radial-gradient(circle at 60% 40%, rgba(255, 0, 127, 0.9), rgba(34, 0, 102, 0.9), rgba(0, 255, 255, 0.9))",
    boxShadow:
      "0 0 80px rgba(255, 0, 127, 0.8), 0 0 100px rgba(0, 255, 255, 0.7), 0 0 120px rgba(34, 0, 102, 0.6)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  glassOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.4) 10%, rgba(255,255,255,0.1) 60%, rgba(0,0,0,0.2) 90%)",
    mixBlendMode: "overlay",
    opacity: 0.95,
  },
  reflection: {
    position: "absolute",
    width: "50%",
    height: "50%",
    borderRadius: "50%",
    top: "12%",
    left: "15%",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.9) 15%, rgba(255,255,255,0.3) 80%)",
    opacity: 0.8,
  },
  eye: {
    width: "18px",
    height: "30px",
    background: "#fff",
    borderRadius: "50%",
    position: "absolute",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
  },
};

export default App;
// import React, { useState, useEffect } from "react";

// function CustomCursor() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });
//   const [isClicked, setIsClicked] = useState(false);

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     const handleClick = () => {
//       setIsClicked(true);
//       setTimeout(() => setIsClicked(false), 300); // Reset effect after 300ms
//     };

//     window.addEventListener("mousemove", moveCursor);
//     window.addEventListener("click", handleClick);

//     return () => {
//       window.removeEventListener("mousemove", moveCursor);
//       window.removeEventListener("click", handleClick);
//     };
//   }, []);

//   return (
//     <>
//       {/* Main Cursor */}
//       <div
//         style={{
//           position: "fixed",
//           top: position.y - 15 + "px",
//           left: position.x - 15 + "px",
//           width: "30px",
//           height: "30px",
//           backgroundColor: "rgba(255, 255, 255, 0.8)",
//           borderRadius: "50%",
//           pointerEvents: "none",
//           boxShadow: "0 0 10px rgba(255, 255, 255, 0.5)",
//           transition: "transform 0.1s ease-out",
//           transform: isClicked ? "scale(1.5)" : "scale(1)",
//         }}
//       ></div>

//       {/* Click Ripple Effect */}
//       {isClicked && (
//         <div
//           style={{
//             position: "fixed",
//             top: position.y - 25 + "px",
//             left: position.x - 25 + "px",
//             width: "50px",
//             height: "50px",
//             backgroundColor: "rgba(255, 255, 255, 0.5)",
//             borderRadius: "50%",
//             pointerEvents: "none",
//             animation: "ripple 0.3s ease-out",
//           }}
//         ></div>
//       )}

//       <style>
//         {`
//           @keyframes ripple {
//             from {
//               transform: scale(0);
//               opacity: 1;
//             }
//             to {
//               transform: scale(2);
//               opacity: 0;
//             }
//           }
//         `}
//       </style>
//     </>
//   );
// }

// function App() {
//   return (
//     <div style={{ backgroundColor: "#0A0A1A", height: "100vh", color: "#fff" }}>
//       <CustomCursor />
//       <h1 style={{ textAlign: "center", marginTop: "200px" }}>
//         Click anywhere to see the effect!
//       </h1>
//     </div>
//   );
// }

// export default App;
