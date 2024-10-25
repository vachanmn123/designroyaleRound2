import {
  FaAirbnb,
  FaAmazon,
  FaGithub,
  FaGoogle,
  FaMicrosoft,
  FaReact,
} from "react-icons/fa";
import { motion } from "framer-motion";

export default function Comapanies() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="companies"
      className="px-12 my-12 space-y-12"
    >
      <div>
        <h2 className="text-5xl font-bold text-center mb-3">Sponsors</h2>
        <p className="text-center text-gray-500">
          We are proud to be sponsored by the following companies
        </p>
      </div>
      <div className="flex items-center justify-center gap-12 text-5xl">
        <FaGoogle />
        <FaGithub />
        <FaAirbnb />
        <FaMicrosoft />
        <FaReact />
        <FaAmazon />
      </div>
    </motion.section>
  );
}
