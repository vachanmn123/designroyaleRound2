import { motion } from "framer-motion";

const events = [
  {
    date: "2024-10-31",
    title: "Conference Opening Ceremony",
    description:
      "A grand opening to kickstart the conference, welcoming attendees and setting the stage for an exciting two days.",
  },
  {
    date: "2024-10-31",
    title: "Keynote Address by Dr. Sarah Thompson",
    description:
      "Dr. Thompson shares insights on the future of tech innovation and the impact of AI on various industries.",
  },
  {
    date: "2024-10-31",
    title: "Product Launch: SyncPro 3.0",
    description:
      "Introducing SyncPro 3.0, a revolutionary solution designed to enhance team collaboration and productivity.",
  },
  {
    date: "2024-10-31",
    title: "Workshop: Building a Better User Experience",
    description:
      "An interactive session focused on modern UX practices and how to create meaningful experiences for users.",
  },
  {
    date: "2024-10-31",
    title: "Panel Discussion: Future Trends in Digital Transformation",
    description:
      "Industry leaders discuss the evolving landscape of digital transformation and what businesses can expect in the coming years.",
  },
  {
    date: "2024-10-31",
    title: "Networking Lunch",
    description:
      "A chance for attendees to connect, share ideas, and build professional relationships over a relaxed meal.",
  },
  {
    date: "2024-10-31",
    title: "Keynote Address by Dr. Michael Lee",
    description:
      "Dr. Lee explores emerging technologies and their potential to drive change across various sectors.",
  },
  {
    date: "2024-11-01",
    title: "Keynote Address by Emily Rivera",
    description:
      "Emily discusses strategies for sustainable growth and innovation in a rapidly changing business environment.",
  },
  {
    date: "2024-11-01",
    title: "Product Launch: VisionAI Suite",
    description:
      "Launching VisionAI Suite, a powerful AI toolset designed for businesses looking to harness machine learning for insights.",
  },
  {
    date: "2024-11-01",
    title: "Workshop: Leveraging Data for Business Growth",
    description:
      "A hands-on session on using data-driven strategies to unlock new growth opportunities.",
  },
  {
    date: "2024-11-01",
    title: "Keynote Address by Dr. Angela Williams",
    description:
      "Dr. Williams presents on the role of ethics in technology and how companies can prioritize responsible innovation.",
  },
  {
    date: "2024-11-01",
    title: "Closing Remarks and Awards Ceremony",
    description:
      "Wrapping up the conference with reflections on the sessions, key takeaways, and a celebration of innovation awards.",
  },
];

export const Schedule = () => {
  return (
    <section
      id="schedule"
      className="flex flex-col gap-12 justify-center py-12"
    >
      <h2 className="text-center text-5xl font-bold">Schedule</h2>
      <div className="container mx-auto px-4 py-8">
        <div className="relative wrap overflow-hidden p-10 h-full">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          {events.map((event, index) => (
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 * index }}
              key={index}
              className={`mb-8 flex justify-between items-center w-full ${
                index % 2 === 0 ? "flex-row-reverse" : ""
              }`}
            >
              <div className="order-1 w-5/12"></div>
              <div className="z-20 flex items-center order-1 bg-purple-600 shadow-xl w-8 h-8 rounded-full">
                <h1 className="mx-auto font-semibold text-lg text-white">
                  {index + 1}
                </h1>
              </div>
              <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
                <h3 className="mb-3 font-bold text-gray-800 text-xl">
                  {event.title}
                </h3>
                <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
                  {event.description}
                </p>
                <p className="mt-2 text-xs text-gray-600">{event.date}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
