import React from "react";
import "./FloatingDiv.css";
import { motion } from "framer-motion";

const FloatingDiv = ({ img, txt1, txt2 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="floatingdiv"
    >
      <img src={img} alt="" />
      <span>
        {txt1}
        <br />
        {txt2}
      </span>
    </motion.div>
  );
};

export default FloatingDiv;
