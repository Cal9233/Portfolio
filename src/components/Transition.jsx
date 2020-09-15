import React, { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";

const Transition = () => {
  const [show, set] = useState(false);
  const transitions = useTransition(show, null, {
    from: { position: "relative", opacity: 10 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  });
  useEffect(() => void setInterval(() => set((state) => state + 1), 2000), []);
  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <animated.div key={key} style={props}>
          "Javascript", "React", "MongoDB", "Bootstrap", "Material-UI",
          "Node.js", "Express", "CSS", "Passport", "HTML"
        </animated.div>
      )
  );
};

export default Transition;
