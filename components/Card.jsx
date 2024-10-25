/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

export default function Card({ imageUrl, title, description, socials }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col justify-between items-center bg-white/75 p-12 rounded-lg"
    >
      <img src={imageUrl} className="h-48 w-48 rounded-full bg-black" />
      <div className="flex flex-col gap-2">
        <h3 className="text-xl font-semibold text-black">{title}</h3>
        <p className="text-gray-500">{description}</p>
      </div>
      <div className="flex justify-center items-center gap-2 mt-12">
        {socials.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noreferrer"
            className="text-purple-500 text-3xl"
          >
            {social.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
