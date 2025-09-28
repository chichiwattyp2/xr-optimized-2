// 'use client';
// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     setHasMounted(true);
//     const token = localStorage.getItem("token");
//     setIsLoggedIn(!!token);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     setIsLoggedIn(false);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
// <div className="container mx-auto flex justify-between items-center">
//   {/* Logo */}
//   <div className="text-white text-xl font-bold">
//     <Link href="/">
//       <div className="hover:cursor-pointer">
//         <Image 
//           src="/logo.jpg" 
//           alt="ARvana Logo" 
//           width={50} 
//           height={20} 
//           priority
//         />
//       </div>
//     </Link>
//   </div>



//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               {/* Log in Button */}
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/login">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               {/* Sign up Button */}
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/signup">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               {/* Log in Mobile */}
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/login">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               {/* Sign up Mobile */}
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/signup">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }

// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const checkToken = () => {
//       const token = localStorage.getItem("token");
//       setIsLoggedIn(!!token);
//     };

//     setHasMounted(true);
//     checkToken();

//     window.addEventListener("storage", checkToken);
//     return () => {
//       window.removeEventListener("storage", checkToken);
//     };
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.dispatchEvent(new Event("storage")); // trigger update in same tab
//     setIsLoggedIn(false);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <div className="hover:cursor-pointer">
//               <Image 
//                 src="/logo.jpg" 
//                 alt="ARvana Logo" 
//                 width={50} 
//                 height={20} 
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`cursor-pointer transition-all ${
//                   hasMounted && isActive(href)
//                     ? "text-white font-semibold border-b-2 py-1 border-white"
//                     : "text-white hover:text-white"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/login">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/signup">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => (
//             <Link key={href} href={href}>
//               <span
//                 className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                   hasMounted && isActive(href)
//                     ? "bg-white text-[#0d4c3e] font-semibold"
//                     : "hover:bg-white hover:text-[#0d4c3e]"
//                 }`}
//               >
//                 {label}
//               </span>
//             </Link>
//           ))}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/login">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/signup">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
// 'use client';

// import { useEffect, useState } from "react";
// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { FaArrowRight } from "react-icons/fa";
// import { motion } from "framer-motion";
// import Image from 'next/image';

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);
//   const [hasMounted, setHasMounted] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   useEffect(() => {
//     const checkToken = () => {
//       const token = localStorage.getItem("token");
//       setIsLoggedIn(!!token);
//     };

//     setHasMounted(true);
//     checkToken();

//     // React to token changes from other tabs or programmatically
//     window.addEventListener("storage", checkToken);
//     return () => window.removeEventListener("storage", checkToken);
//   }, []);

//   const isActive = (path: string) => pathname === path;

//   const handleLogout = () => {
//     localStorage.removeItem("token");
//     window.dispatchEvent(new Event("storage"));
//     setIsLoggedIn(false);
//     router.push("/login");
//   };

//   const navItems = [
//     { href: "/", label: "Home" },
//     { href: "/blog", label: "Blog" },
//     { href: "/projects", label: "Projects" },
//     { href: "/uploadIMG", label: "Design" },
//   ];

//   // Avoid hydration mismatch
//   if (!hasMounted) return null;

//   return (
//     <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
//       <div className="container mx-auto flex justify-between items-center">
//         {/* Logo */}
//         <div className="text-white text-xl font-bold">
//           <Link href="/">
//             <div className="hover:cursor-pointer">
//               <Image 
//                 src="/logo.jpg" 
//                 alt="ARvana Logo" 
//                 width={50} 
//                 height={20} 
//                 priority
//               />
//             </div>
//           </Link>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center space-x-6">
//           {navItems.map(({ href, label }) => {
//             const redirectPath = 
//               !isLoggedIn && (href === "/projects" || href === "/uploadIMG")
//                 ? "/login"
//                 : href;

//             return (
//               <Link key={href} href={redirectPath}>
//                 <span
//                   className={`cursor-pointer transition-all ${
//                     isActive(href)
//                       ? "text-white font-semibold border-b-2 py-1 border-white"
//                       : "text-white hover:text-white"
//                   }`}
//                 >
//                   {label}
//                 </span>
//               </Link>
//             );
//           })}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/login">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/signup">
//                   <button className="bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-1 flex items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>

//         {/* Hamburger Icon (Mobile) */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex flex-col justify-between w-6 h-5 focus:outline-none"
//           >
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform rotate-45 translate-y-1.5" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-opacity duration-300 ${
//                 isOpen ? "opacity-0" : ""
//               }`}
//             ></span>
//             <span
//               className={`block h-0.5 bg-white transition-transform duration-300 ${
//                 isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
//               }`}
//             ></span>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isOpen && (
//         <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
//           {navItems.map(({ href, label }) => {
//             const redirectPath = 
//               !isLoggedIn && (href === "/projects" || href === "/uploadIMG")
//                 ? "/login"
//                 : href;

//             return (
//               <Link key={href} href={redirectPath}>
//                 <span
//                   className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 ${
//                     isActive(href)
//                       ? "bg-white text-[#0d4c3e] font-semibold"
//                       : "hover:bg-white hover:text-[#0d4c3e]"
//                   }`}
//                 >
//                   {label}
//                 </span>
//               </Link>
//             );
//           })}

//           {isLoggedIn ? (
//             <button
//               onClick={handleLogout}
//               className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:bg-gray-100 transition"
//             >
//               Logout
//             </button>
//           ) : (
//             <>
//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/login">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Log in</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>

//               <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//                 <Link href="/signup">
//                   <button className="w-full bg-white text-[#0d4c3e] font-medium rounded-full px-4 py-2 flex justify-center items-center space-x-1 hover:pl-2 transition-all">
//                     <span className="uppercase">Sign up</span>
//                     <motion.span
//                       className="ml-1"
//                       animate={{ scale: [1, 1.2, 1] }}
//                       transition={{ repeat: Infinity, duration: 1.2 }}
//                     >
//                       <FaArrowRight size={12} />
//                     </motion.span>
//                   </button>
//                 </Link>
//               </motion.div>
//             </>
//           )}
//         </div>
//       )}
//     </nav>
//   );
// }
'use client';

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from 'next/image';
import { CiLogin, CiLogout } from "react-icons/ci";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token");
      setIsLoggedIn(!!token);
    };

    setHasMounted(true);
    checkToken();
    window.addEventListener("storage", checkToken);
    return () => window.removeEventListener("storage", checkToken);
  }, []);


  const isActive = (path: string) => pathname === path;

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.dispatchEvent(new Event("storage"));
    setIsLoggedIn(false);
    router.push("/login");
  };

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/blog", label: "Blog" },
    { href: "/projects", label: "Projects" },
    { href: "/uploadIMG", label: "Design" },
  ];

  if (!hasMounted) return null;

  return (
    <nav className="bg-[#0d4c3e] py-5 px-4 md:px-36 relative z-20 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-white text-xl font-bold">
          <Link href="/">
            <div className="hover:cursor-pointer">
              <Image
                src="/logo.jpg"
                alt="ARvana Logo"
                width={50}
                height={20}
                priority
              />
            </div>
          </Link>

        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map(({ href, label }) => {
            const redirectPath =
              !isLoggedIn && (href === "/projects" || href === "/uploadIMG")
                ? "/login"
                : href;

            return (
              <Link key={href} href={redirectPath}>
                <span
                  className={`cursor-pointer transition-all ${isActive(href)
                    ? "text-white font-semibold border-b-2 py-1 border-white"
                    : "text-white hover:text-white"
                    }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}

          {!isLoggedIn && (
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Link href="/login">
                <CiLogin
                  className="text-white text-2xl cursor-pointer hover:text-gray-300"
                  title="Login"
                />
              </Link>
            </motion.div>
          )}

          {isLoggedIn && (
            <CiLogout
              onClick={handleLogout}
              className="text-white text-2xl cursor-pointer hover:text-gray-300"
              title="Logout"
            />
          )}
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden flex items-center justify-between">
          {/* Hamburger Icon */}
          <div className="flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex flex-col justify-between w-6 h-5 focus:outline-none"
            >
              <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "transform rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block h-0.5 bg-white transition-opacity duration-300 ${isOpen ? "opacity-0" : ""}`}></span>
              <span className={`block h-0.5 bg-white transition-transform duration-300 ${isOpen ? "transform -rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>

          {/* Login / Logout Icons */}
          <div className="flex items-center ml-6 space-x-4">
            {!isLoggedIn && (
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <Link href="/login">
                  <CiLogin className="text-white text-2xl cursor-pointer " title="Login" />
                </Link>
              </motion.div>
            )}
            {isLoggedIn && (
              <CiLogout
                onClick={handleLogout}
                className="text-white text-2xl cursor-pointer hover:text-mainbackground"
                title="Logout"
              />
            )}
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 bg-[#0d4c3e] px-4 py-4 space-y-3 rounded-b-lg shadow-lg transition-all duration-300">
          {navItems.map(({ href, label }) => {
            const redirectPath =
              !isLoggedIn && (href === "/projects" || href === "/uploadIMG")
                ? "/login"
                : href;

            return (
              <Link key={href} href={redirectPath}>
                <span
                  className={`block text-white text-base px-3 py-2 rounded-md transition-all duration-200 
                      
                    }`}
                >
                  {label}
                </span>
              </Link>
            );
          })}
        </div>
      )}
       
        
      
    </nav>
  );
}