import React from "react";
import Helmet from "react-helmet";
import { motion } from "framer-motion";
import { pageAnimation } from "../Animation";

const ContactUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <Helmet>
        <title>ContactUs</title>
      </Helmet>
      contact us
    </motion.div>
  );
};

export default ContactUs;
