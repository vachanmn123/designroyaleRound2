import Countdown from "./Countdown";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="about"
      className="grid grid-cols-1 lg:grid-cols-2"
    >
      <div className="flex flex-col items-center justify-center gap-12 py-10 z-20">
        <h2 className="text-5xl font-bold">
          About <span className="text-purple-600">VACHANMN.TECH</span>{" "}
          <span className="text-green-500">2024</span>
        </h2>
        <motion.p
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-3xl text-gray-600 font-light tracking-wide mx-24 text-justify"
        >
          Get ready for an inspiring journey of learning, innovation, and
          connection at this year&apos;s conference! Our event brings together
          passionate professionals, visionary thought leaders, and creative
          minds from across the globe to explore the latest breakthroughs, share
          valuable insights, and spark conversations that shape the future.
        </motion.p>
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Countdown />
        </motion.div>
      </div>
      <div className="relative">
        <motion.img
          initial={{ scale: 0.5, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          src="/about.png"
          alt="About"
          className="object-cover h-full w-full"
        />
      </div>
    </motion.section>
  );
}
