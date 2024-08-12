import React from "react";
import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <motion.div
      initial={{
        y: 30,
        opacity: 0,
      }}
      whileInView={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 1.5,
      }}
      className="w-[600px]  m-auto h-96 bg-slate-100 rounded-2xl shadow-xl mt-10 ml-[-30px]"
    >
      {props.children}
    </motion.div>
  );
};

export default Card;
