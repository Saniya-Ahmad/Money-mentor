import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { ReactTyped } from "react-typed";
import Particles from "react-tsparticles";

const IntroScreen = ({ onFinish }) => {
  const audioRef = useRef(null);
  const [started, setStarted] = useState(false);
  const [fadeOut, setFadeOut] = useState(false); // 🔥 NEW

  // 🔊 Sound on interaction
  useEffect(() => {
    const handleClick = () => {
      if (!started) {
        setStarted(true);
        if (audioRef.current) {
          audioRef.current.volume = 0.4;
          audioRef.current.play().catch(() => {});
        }
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [started]);

  // ⏱ Smooth transition timing
  useEffect(() => {
    const fadeTimer = setTimeout(() => {
      setFadeOut(true); // start fade
    }, 4000);

    const exitTimer = setTimeout(() => {
      if (typeof onFinish === "function") {
        onFinish();
      }
    }, 5000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(exitTimer);
    };
  }, [onFinish]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: fadeOut ? 0 : 1 }}
      transition={{ duration: 1 }}
      className="h-screen flex flex-col justify-center items-center text-white relative overflow-hidden bg-black"
    >

      {/* 🌌 PARTICLES */}
      <Particles
        options={{
          particles: {
            number: { value: 60 },
            size: { value: 2 },
            move: { enable: true, speed: 0.7 },
            opacity: { value: 0.3 },
          },
        }}
        className="absolute inset-0"
      />

      {/* 🔊 AUDIO */}
      <audio ref={audioRef} src="/intro.wav" />

      {/* 🔥 GLOW */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 2 }}
        transition={{ duration: 2 }}
        className="absolute w-[400px] h-[400px] bg-purple-500 rounded-full blur-3xl opacity-30"
      />

      {/* 💰 LOGO */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1 }}
        className="text-8xl z-10"
      >
        💰
      </motion.div>

      {/* 🔥 TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-7xl md:text-8xl font-extrabold mt-6 text-center z-10"
      >
        Money Mentor
      </motion.h1>

      {/* ✨ ONE IMPORTANT TYPING LINE */}
      <div className="mt-6 z-10 text-center px-4">
        <ReactTyped
          strings={[
            "AI powered financial intelligence for smarter decisions"
          ]}
          typeSpeed={60}
          showCursor={false}
          className="text-2xl md:text-3xl text-gray-200 font-semibold"
        />
      </div>

      {/* 🔥 STATIC SUBTEXT */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-4 text-lg text-gray-400 text-center max-w-xl z-10"
      >
        Plan your investments. Track your growth. Achieve your goals.
      </motion.p>

      {/* ⏭ SKIP BUTTON */}
      <button
        onClick={onFinish}
        className="absolute bottom-10 right-10 text-gray-400 hover:text-white text-sm"
      >
        Skip →
      </button>

    </motion.div>
  );
};

export default IntroScreen;