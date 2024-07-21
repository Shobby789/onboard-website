// // // Photos from https://citizenofnowhe.re/lines-of-the-city
// // // import "./styles.css";
// // import { useRef } from "react";
// // import {
// //   motion,
// //   useScroll,
// //   useSpring,
// //   useTransform,
// //   MotionValue,
// // } from "framer-motion";

// // function useParallax(value, distance) {
// //   return useTransform(value, [0, 1], [-distance, distance]);
// // }

// // function Image({ id, src }) {
// //   const ref = useRef(null);
// //   const { scrollYProgress } = useScroll({ target: ref });
// //   const y = useParallax(scrollYProgress, 300);

// //   return (
// //     <section>
// //       <div ref={ref}>
// //         <img
// //           src={src}
// //           alt={`Image #${id}`}
// //           className="w-[400px] h-auto object-contain"
// //         />
// //       </div>
// //       <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
// //     </section>
// //   );
// // }

// // export default function HomeAnimation() {
// //   const { scrollYProgress } = useScroll();
// //   const scaleX = useSpring(scrollYProgress, {
// //     stiffness: 100,
// //     damping: 30,
// //     restDelta: 0.001,
// //   });

// //   const images = [
// //     {
// //       id: 1,
// //       src: "https://images.unsplash.com/photo-1720470331470-2d6d2fcbc5a7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     },
// //     {
// //       id: 2,
// //       src: "https://images.unsplash.com/photo-1721315427032-c7399b9fac6b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     },
// //     {
// //       id: 3,
// //       src: "https://images.unsplash.com/photo-1721297014353-538367ffa263?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     },
// //     {
// //       id: 4,
// //       src: "https://images.unsplash.com/photo-1569001108257-f3c1fbbd69de?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     },
// //     {
// //       id: 5,
// //       src: "https://images.unsplash.com/photo-1609858416617-bd530c08c83c?q=80&w=2131&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
// //     },
// //   ];

// //   return (
// //     <>
// //       {images.map((image) => (
// //         <Image key={image.id} id={image.id} src={image.src} />
// //       ))}
// //       <motion.div className="progress" style={{ scaleX }} />
// //     </>
// //   );
// // }

// // import "./styles.css";
// import { useRef } from "react";
// import { motion, useScroll, useSpring, useTransform } from "framer-motion";

// function useParallax(value, distance) {
//   return useTransform(value, [0, 1], [-distance, distance]);
// }

// function Image({ id, background, heading }) {
//   const ref = useRef(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const y = useParallax(scrollYProgress, 300);

//   return (
//     <section style={{ background }}>
//       <div ref={ref} className="content">
//         <motion.h2
//           style={{ y }}
//           className="section-heading"
//         >{`${heading}`}</motion.h2>
//       </div>
//     </section>
//   );
// }

// export default function HomeAnimation() {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 200,
//     damping: 60,
//     restDelta: 0.004,
//   });

//   const sections = [
//     { id: 1, background: "#00bf63", heading: "We transform companies" },
//     {
//       id: 2,
//       background: "rgb(37 99 235)",
//       heading: "we ended choice paralysis",
//     },
//     {
//       id: 3,
//       background:
//         "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%,rgba(253, 29, 29, 1) 50%,rgba(252, 176, 69, 1) 100%)",
//       heading: "we helped grow sales",
//     },
//     { id: 4, background: "#00a2e1", heading: "we focus on winning" },
//     {
//       id: 5,
//       background: "rgb(124 58 237)",
//       heading: "we fired check-in lines",
//     },
//   ];

//   return (
//     <>
//       {sections.map((section) => (
//         <Image
//           key={section.id}
//           id={section.id}
//           background={section.background}
//           heading={section.heading}
//         />
//       ))}
//       <motion.div className="progress bg-white" style={{ scaleX }} />
//     </>
//   );
// }

import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";
import SectionThree from "./SectionThree";
import SectionFive from "./SectionFive";
import withParallax from "../Global/withParallax";

const ParallaxSectionOne = withParallax(SectionOne, "#00bf63");
const ParallaxSectionTwo = withParallax(SectionTwo, "rgb(37 99 235)");
const ParallaxSectionThree = withParallax(
  SectionThree,
  "linear-gradient(90deg,rgba(131, 58, 180, 1) 0%,rgba(253, 29, 29, 1) 50%,rgba(252, 176, 69, 1) 100%)"
);
const ParallaxSectionFive = withParallax(SectionFive, "rgb(124 58 237)");

export default function HomeAnimation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 60,
    restDelta: 0.004,
  });

  return (
    <>
      <ParallaxSectionOne />
      <ParallaxSectionTwo />
      <ParallaxSectionThree />
      <ParallaxSectionFour />
      <ParallaxSectionFive />
      <motion.div className="progress bg-white" style={{ scaleX }} />
    </>
  );
}
