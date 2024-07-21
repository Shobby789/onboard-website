import { useRef, useState } from "react";
import { FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const Example = ({ btnText, bg_color, text_color }) => {
  return (
    <div className="grid place-content-center bg-transparent">
      <EncryptButton
        btnText={btnText}
        bg_color={bg_color}
        text_color={text_color}
      />
    </div>
  );
};

// const TARGET_TEXT = "Recruit Talent";
const CYCLES_PER_LETTER = 2;
const SHUFFLE_TIME = 50;

const CHARS = "";

const EncryptButton = ({ btnText, bg_color, text_color }) => {
  const intervalRef = useRef(null);

  const [text, setText] = useState(btnText);

  const scramble = () => {
    let pos = 0;

    intervalRef.current = setInterval(() => {
      const scrambled = btnText
        .split("")
        .map((char, index) => {
          if (pos / CYCLES_PER_LETTER > index) {
            return char;
          }

          const randomCharIndex = Math.floor(Math.random() * CHARS.length);
          const randomChar = CHARS[randomCharIndex];

          return randomChar;
        })
        .join("");

      setText(scrambled);
      pos++;

      if (pos >= btnText.length * CYCLES_PER_LETTER) {
        stopScramble();
      }
    }, SHUFFLE_TIME);
  };

  const stopScramble = () => {
    clearInterval(intervalRef.current || undefined);

    setText(btnText);
  };

  return (
    <motion.button
      whileHover={{
        scale: 1.025,
      }}
      whileTap={{
        scale: 0.975,
      }}
      onMouseEnter={scramble}
      onMouseLeave={stopScramble}
      className={`group relative overflow-hidden rounded-lg ${bg_color} px-6 py-4 font-mono font-semibold uppercase ${text_color} transition-colors hover:${text_color}`}
    >
      <div className="relative z-10 flex items-center gap-2">
        {/* <FiLock className="text-lg" /> */}
        <span>{text}</span>
      </div>
      <motion.span
        initial={{
          y: "100%",
        }}
        animate={{
          y: "-100%",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 1,
          ease: "linear",
        }}
        className="duration-300 absolute inset-0 z-0 scale-125 bg-gradient-to-t from-green-400/0 from-40% via-black black to-60% opacity-0 transition-opacity group-hover:opacity-50"
      />
    </motion.button>
  );
};

export default Example;
