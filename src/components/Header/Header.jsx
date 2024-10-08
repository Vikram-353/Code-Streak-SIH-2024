// import React, { useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import logo from "../images/logo.png";
// import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons from Heroicons

// export default function Header() {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <header className="shadow sticky z-50 top-0">
//       <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//         <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//           <Link to="/" className="flex items-center">
//             <img src={logo} className="mr-3 h-12" alt="Logo" />
//           </Link>
//           <div className="flex items-center lg:order-2">
//             <Link
//               to={"signin"}
//               className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Sign In
//             </Link>
//             <Link
//               to="#"
//               className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//             >
//               Get Started
//             </Link>
//             <button
//               data-collapse-toggle="mobile-menu"
//               type="button"
//               className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
//               onClick={toggleMenu}
//             >
//               {isOpen ? (
//                 <XMarkIcon className="w-6 h-6" />
//               ) : (
//                 <Bars3Icon className="w-6 h-6" />
//               )}
//               <span className="sr-only">Open main menu</span>
//             </button>
//           </div>
//           <div
//             className={`lg:flex lg:items-center lg:w-auto lg:order-1 w-full lg:w-auto ${
//               isOpen ? "block" : "hidden"
//             }`}
//             id="mobile-menu"
//           >
//             <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//               <li>
//                 <NavLink
//                   to={"/"}
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-blue-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
//                   }
//                 >
//                   Home
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"about"}
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-blue-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
//                   }
//                 >
//                   About
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"employee"}
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-blue-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
//                   }
//                 >
//                   Employees
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to={"notice"}
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-blue-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
//                   }
//                 >
//                   Notice
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"safety"}
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-blue-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
//                   }
//                 >
//                   Safety Guidlines
//                 </NavLink>
//               </li>
//               <li>
//                 <NavLink
//                   to={"contact"}
//                   className={({ isActive }) =>
//                     `block py-2 pr-4 pl-3 duration-200 ${
//                       isActive ? "text-blue-700" : "text-gray-700"
//                     } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
//                   }
//                 >
//                   Contact Us
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// }

import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline"; // Import icons from Heroicons
import emailjs from "emailjs-com"; // Import EmailJS

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const sendSosEmail = () => {
    const templateParams = {
      to_name: "Vikram Ranjan",
      message: "Emergency! Immediate attention required.",
      to_email: "vikramranjan71122@gmail.com",
      from_name: "Mines Manager",
    };

    emailjs
      .send(
        "service_z0h52gj", // Replace with your EmailJS service ID
        "template_m2nta63", // Replace with your EmailJS template ID
        templateParams,
        "ESpK9mN0GEgaaDZmY" // Replace with your EmailJS user ID
      )
      .then(
        (response) => {
          console.log(
            "SOS email sent successfully!",
            response.status,
            response.text
          );
        },
        (err) => {
          console.error("Failed to send SOS email:", err);
        }
      );
  };

  return (
    <header className="shadow sticky z-50 top-0">
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>
          <div className="flex items-center lg:order-2">
            <button
              onClick={sendSosEmail}
              className="text-white bg-red-600 hover:bg-red-700 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              SOS
            </button>
            <Link
              to={"signin"}
              className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Sign In
            </Link>
            <Link
              to="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Get Started
            </Link>
            <button
              data-collapse-toggle="mobile-menu"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
            >
              {isOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div
            className={`lg:flex lg:items-center lg:w-auto lg:order-1 w-full lg:w-auto ${
              isOpen ? "block" : "hidden"
            }`}
            id="mobile-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to={"/"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"about"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"employee"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Employees
                </NavLink>
              </li>

              <li>
                <NavLink
                  to={"notice"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Notice
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"safety"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Safety Guidelines
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={"contact"}
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? "text-blue-700" : "text-gray-700"
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
