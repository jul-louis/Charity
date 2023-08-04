import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-white shadow dark:bg-slate-950 p-4">
      <div className="w-full max-w-screen-xl mx-auto md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://krakenlouis.com/"
            className="flex items-center mb-4 sm:mb-0"
          >
            <div className="flex items-center flex-shrink-0 text-slate-950 dark:text-white mr-6">
              <svg
                className="fill-current h-8 w-8 mr-2"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="0" cy="0" r="40" />
                <circle cx="100" cy="100" r="80" />
              </svg>
              <span className="font-light text-xl tracking-tight">
                kraken charity
              </span>
            </div>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link to="/About" className="mr-4 hover:underline md:mr-6 ">
                About
              </Link>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a
            href="https://charity.krakenlouis.com/"
            className="hover:underline"
          >
            kraken charity
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
