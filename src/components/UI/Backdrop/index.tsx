import React from "react";

import { motion } from "framer-motion";

import classes from "./Backdrop.module.css";
import { Portal } from "../Portal";

const Backdrop = ({ onClose }: { onClose: () => void }) => {
  return (
    <Portal>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
        className={classes.backdrop}
        onClick={onClose}
      />
    </Portal>
  );
};

export default Backdrop;
