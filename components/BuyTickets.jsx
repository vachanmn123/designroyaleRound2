import { motion } from "framer-motion";

export default function BuyTickets() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
      id="buy-tickets"
      className="w-full py-12 bg-purple-50"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center text-purple-900 mb-4">
          Choose Your Pass
        </h2>
        <p className="text-xl text-center text-purple-700 mb-8">
          Select the ticket that best suits your needs
        </p>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                Event Pass
              </h3>
              <p className="text-purple-700 mb-4">Access to all main events</p>
              <ul className="space-y-2 text-purple-800 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Main conference sessions
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Expo hall access
                </li>
              </ul>
            </div>
            <div className="p-6 bg-purple-100 mt-auto">
              <p className="text-4xl font-bold text-purple-900 mb-4">
                ₹100.00
                <sub className="text-xs">(excl. GST)</sub>
              </p>
              <a href="https://book.stripe.com/test_4gw9EwdKmcdZ3ja9AA">
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Buy Event Pass
                </button>
              </a>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col border-purple-500 border-2">
            <div className="p-6">
              <h3 className="text-2xl font-bold text-purple-900 mb-2">
                All Access Pass
              </h3>
              <p className="text-purple-700 mb-4">Full conference experience</p>
              <ul className="space-y-2 text-purple-800 mb-6">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  All Event Pass features
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Exclusive workshops
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  Networking events
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-purple-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  VIP lounge access
                </li>
              </ul>
            </div>
            <div className="p-6 bg-purple-100 mt-auto">
              <p className="text-4xl font-bold text-purple-900 mb-4">
                ₹750.00<sub className="text-xs">(excl. GST)</sub>
              </p>
              <a href="https://book.stripe.com/test_cN24kcaya4Lxf1S289">
                <button className="w-full bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition duration-300">
                  Buy All Access Pass
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
