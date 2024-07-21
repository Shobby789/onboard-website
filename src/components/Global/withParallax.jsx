import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

function useParallax(value, distance) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function withParallax(Component, background) {
  return function ParallaxComponent(props) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref });
    const y = useParallax(scrollYProgress, 300);

    return (
      <section style={{ background }}>
        <div ref={ref} className="content">
          <motion.div style={{ y }}>
            <Component {...props} />
          </motion.div>
        </div>
      </section>
    );
  };
}

export default withParallax;
