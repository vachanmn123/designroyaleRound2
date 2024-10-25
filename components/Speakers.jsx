import Card from "./Card";
import { FaGithub, FaGlobe } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Speakers() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="speakers"
      className="bg-gradient-to-r from-purple-500 to-purple-900 text-white py-12 w-full"
    >
      <div>
        <h2 className="col-span-1 lg:col-span-3 text-5xl font-bold text-center mb-3">
          Our Speakers
        </h2>
        <p className="text-center text-gray-200 mb-12">
          Meet our esteemed speakers
        </p>
      </div>
      <div className="flex gap-12 mx-12 items-center">
        <Card
          title="Vachan MN"
          description="Freelance Full Stack Developer with over 4 years of hands-on experience"
          imageUrl={"https://vachanmn.tech/vachan.webp"}
          socials={[
            {
              link: "https://vachanmn.tech",
              icon: <FaGlobe />,
            },
            {
              link: "https://github.com/vachanmn123",
              icon: <FaGithub />,
            },
          ]}
        />
        <Card
          title="Vachan MN"
          description="Freelance Full Stack Developer with over 4 years of hands-on experience"
          imageUrl={"https://vachanmn.tech/vachan.webp"}
          socials={[
            {
              link: "https://vachanmn.tech",
              icon: <FaGlobe />,
            },
            {
              link: "https://github.com/vachanmn123",
              icon: <FaGithub />,
            },
          ]}
        />
        <Card
          title="Vachan MN"
          description="Freelance Full Stack Developer with over 4 years of hands-on experience"
          imageUrl={"https://vachanmn.tech/vachan.webp"}
          socials={[
            {
              link: "https://vachanmn.tech",
              icon: <FaGlobe />,
            },
            {
              link: "https://github.com/vachanmn123",
              icon: <FaGithub />,
            },
          ]}
        />
        <Card
          title="Vachan MN"
          description="Freelance Full Stack Developer with over 4 years of hands-on experience"
          imageUrl={"https://vachanmn.tech/vachan.webp"}
          socials={[
            {
              link: "https://vachanmn.tech",
              icon: <FaGlobe />,
            },
            {
              link: "https://github.com/vachanmn123",
              icon: <FaGithub />,
            },
          ]}
        />
      </div>
    </motion.section>
  );
}
