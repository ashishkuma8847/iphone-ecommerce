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
      const distance = Math.min(50, Math.sqrt(deltaX ** 2 + deltaY ** 2) / 10);

      const eyeX = Math.cos(angle) * distance;
      const eyeY = Math.sin(angle) * distance;

      setEyePosition({
        x: eyeX,
        y: eyeY,
      });
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
      <div style={styles.ball}>
        <div
          style={{
            ...styles.eye,
            height: isBlinking ? "0px" : "40px",
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`, 
            left: "35px", 
            top: "35px", 
            transition: "height 0.2s ease-in-out",
            overflow: "hidden",
          }}
        ></div>

        <div
          style={{
            ...styles.eye,
            height: isBlinking ? "0px" : "40px", 
            transform: `translate(${eyePosition.x}px, ${eyePosition.y}px)`,
            right: "35px", 
            top: "35px",
            transition: "height 0.2s ease-in-out", 
            overflow: "hidden",
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
    backgroundColor: "#222",
  },
  ball: {
    width: "200px",
    height: "200px",
    borderRadius: "50%",
    background: "linear-gradient(to bottom right, #ff00ff, #220066)", 
    boxShadow: "0 0 60px rgba(255, 0, 255, 0.8), 0 0 120px rgba(0, 0, 255, 0.5)",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  eye: {
    width: "40px",
    background: "#fff", 
    borderRadius: "50%",
    position: "absolute",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)", 
  },
};

export default App;
