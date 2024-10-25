import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col gap-5 justify-center items-center min-h-[90vh] pt-24 bg-gradient-to-r from-violet-500 to-purple-500 text-white bg-fixed bg-center text-center"
    >
      <div className="flex flex-col text-3xl lg:text-7xl font-bold gap-5 items-center justify-center">
        <h1>Welcome to VACHANMN.TECH</h1>
      </div>
      <p className="text-3xl">THE best conference you&apos;ve ever seen!</p>
      <TypeAnimation
        sequence={[
          "International Speakers",
          1000,
          "Tech Product Launches",
          1000,
          "Networking Events",
          1000,
          "Hands-on Events",
          1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ display: "inline-block" }}
        repeat={Infinity}
        className="text-4xl"
      />
      <div className="grid grid-cols-2 gap-5 items-center">
        <a href="/#buy-tickets">
          <button className="rounded-full p-3 bg-green-500">
            Buy Tickets Now!
          </button>
        </a>
        <a href="/#about">
          <button className="rounded-full p-3 bg-gray-500">Learn More</button>
        </a>
      </div>
    </motion.div>
  );
}
