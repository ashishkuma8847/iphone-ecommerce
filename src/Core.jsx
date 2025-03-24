import { motion, useAnimationControls } from "framer-motion";
import { useEffect, useState } from "react";

function TypingText({
  words = [],
  typingSpeed = 150,
  deleteSpeed = 100,
  delayBetweenWords = 1000,
  className = "",
  cursorBlinkSpeed = 0.5,
}) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const controls = useAnimationControls();

  useEffect(() => {
    const word = words[currentWordIndex];

    let timer;

    if (isDeleting) {
      if (currentText === "") {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length - 1));
        }, deleteSpeed);
      }
    } else {
      if (currentText === word) {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      } else {
        timer = setTimeout(() => {
          setCurrentText(word.substring(0, currentText.length + 1));
        }, typingSpeed);
      }
    }

    return () => clearTimeout(timer);
  }, [
    currentText,
    currentWordIndex,
    isDeleting,
    words,
    typingSpeed,
    deleteSpeed,
    delayBetweenWords,
  ]);

  useEffect(() => {
    controls.start({
      opacity: [0.2, 1],
      transition: {
        duration: cursorBlinkSpeed,
        repeat: Infinity,
        repeatType: "reverse",
      },
    });
  }, [controls, cursorBlinkSpeed]);

  return (
    <div className="w-full h-full flex items-start font-customfont12 justify-start bg-black">
      <div className={`text-4xl font-mono text-white ${className}`}>
        I am {currentText}
        <motion.span
          animate={controls}
          className="inline-block text-CustomRed-0"
        >
          |
        </motion.span>
      </div>
    </div>
  );
}

 function core() {
  return (
    <TypingText
      words={["ashish"," web developer" ," web designer"]}
      typingSpeed={120}
      deleteSpeed={80}
      delayBetweenWords={1500}
      cursorBlinkSpeed={0.4}
      className="text-purple-400"
    />
  );
}
export default core