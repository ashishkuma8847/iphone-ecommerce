import React, { useState, useEffect } from "react";

const GlowingBall = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (event) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = event.clientX - centerX;
      const deltaY = event.clientY - centerY;

      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (<>
    <div style={styles.container}>
      <div
        style={{
          ...styles.ball,
          transform: rotate(`${rotation}deg`),
        }}
      >
        <div style={styles.eyes}></div>
      </div>
    </div>
    </>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  },
  ball: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    background: "radial-gradient(circle at center, #ff00ff, #220066)",
    boxShadow: "0 0 50px rgba(255, 0, 255, 0.8), 0 0 100px rgba(0, 0, 255, 0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "transform 0.1s linear",
  },
  eyes: {
    width: "30px",
    height: "15px",
    background: "white",
    borderRadius: "50%",
    position: "absolute",
  },
};

export default GlowingBall;