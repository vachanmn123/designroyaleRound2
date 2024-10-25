import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      className="fixed top-0 left-0 z-50 mx-[1%] my-[1%] rounded-full w-[98%] flex justify-between items-center h-24 p-4 bg-black/80 text-white"
    >
      <img src="/logo.png" alt="Logo" className="h-full w-auto aspect-square" />
      <ul className="hidden lg:flex justify-center items-center gap-5 text-xl">
        <li>
          <a
            href="/"
            className="hover:underline hover:text-purple-400 transition-all duration-200"
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/#speakers"
            className="hover:underline hover:text-purple-400 transition-all duration-200"
          >
            Speakers
          </a>
        </li>
        <li>
          <a
            href="/#schedule"
            className="hover:underline hover:text-purple-400 transition-all duration-200"
          >
            Schedule
          </a>
        </li>
        <li>
          <a href="/#buy-tickets">
            <button className="bg-purple-500 text-white p-3 rounded-full">
              Buy Tickets
            </button>
          </a>
        </li>
      </ul>
    </motion.div>
  );
}
