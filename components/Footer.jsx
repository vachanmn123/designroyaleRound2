export default function Footer() {
  return (
    <footer className="w-full py-12 bg-purple-900 text-white">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center">
          <img src="/logo.png" alt="Vachanmn.tech" className="w-48 mx-auto" />
          <h3 className="text-2xl font-bold">VACHANMN.TECH 2024</h3>
          <p className="text-sm mt-2">
            A conference for the real developers of the world.
          </p>
        </div>
        <div className="mt-6 md:mt-0">
          <ul className="flex flex-col items-start gap-5 text-2xl">
            <li className="mr-4">
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li className="mr-4">
              <a href="/#speakers" className="hover:underline">
                Speakers
              </a>
            </li>
            <li className="mr-4">
              <a href="/#schedule" className="hover:underline">
                Schedule
              </a>
            </li>
            <li>
              <a href="/#buy-tickets" className="hover:underline">
                Buy Tickets
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <ul className="flex flex-col items-start gap-5 text-2xl">
            <li className="mr-4">
              <a href="/tos" className="hover:underline">
                Terms of Service
              </a>
            </li>
            <li className="mr-4">
              <a href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li className="mr-4">
              <a href="/refunds" className="hover:underline">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p className="text-center mt-8">
        &copy; {new Date().getFullYear()} Vachanmn.tech. All rights reserved.
      </p>
    </footer>
  );
}
