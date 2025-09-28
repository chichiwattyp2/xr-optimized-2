
// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const steps = [
//   {
//     title: '1. Upload Furniture',
//     description: 'Choose your favorite 3D furniture models or upload your own. You can drag and drop or select from our gallery.',
//     image: '/upload-demo.jpg',
//   },
//   {
//     title: '2. Place in Your Space',
//     description: 'Click to place your furniture in your virtual room. Move it around freely within the boundaries.',
//     image: '/place-demo.jpg',
//   },
//   {
//     title: '3. Adjust, Rotate & Scale',
//     description: 'Use the control menu to rotate, scale, or fine-tune the position of your item.',
//     image: '/adjust-demo.jpg',
//   },
//   {
//     title: '4. Preview in AR',
//     description: 'Switch to AR mode to view your room with the furniture in real-time through your camera.',
//     image: '/ar-demo.jpg',
//   },
//   {
//     title: '5. Save Your Design',
//     description: 'Take a screenshot of your design to save and share your virtual layout.',
//     image: '/save-demo.jpg',
//   },
// ];

// const HowToUsePage = () => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans min-h-screen py-20 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto">
//         <motion.h1
//           className="text-3xl sm:text-4xl font-bold text-center mb-12"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           How to Use Our Virtual Interior Designer
//         </motion.h1>

//         <div className="space-y-20">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               className={`flex flex-col md:flex-row items-center gap-8 ${i % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: i * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <img
//                 src={step.image}
//                 alt={step.title}
//                 className="w-full md:w-1/2 h-auto rounded-xl shadow-lg"
//               />
//               <div className="md:w-1/2">
//                 <h2 className="text-xl sm:text-2xl font-semibold mb-4">{step.title}</h2>
//                 <p className="text-white/80 text-sm sm:text-base">{step.description}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default HowToUsePage;
// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const steps = [
//   {
//     title: '1. Upload Furniture',
//     description: 'Choose your favorite 3D furniture models or upload your own. You can drag and drop or select from our gallery.',
//     image: '/upload-demo.jpg',
//   },
//   {
//     title: '2. Place in Your Space',
//     description: 'Click to place your furniture in your virtual room. Move it around freely within the boundaries.',
//     image: '/place-demo.jpg',
//   },
//   {
//     title: '3. Adjust, Rotate & Scale',
//     description: 'Use the control menu to rotate, scale, or fine-tune the position of your item.',
//     image: '/adjust-demo.jpg',
//   },
//   {
//     title: '4. Preview in AR',
//     description: 'Switch to AR mode to view your room with the furniture in real-time through your camera.',
//     image: '/ar-demo.jpg',
//   },
//   {
//     title: '5. Save Your Design',
//     description: 'Take a screenshot of your design to save and share your virtual layout.',
//     image: '/save-demo.jpg',
//   },
// ];

// const HowToUsePage = () => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans min-h-screen py-20 px-4 sm:px-8">
//       <div className="max-w-6xl mx-auto">
//         <motion.h1
//           className="text-3xl sm:text-5xl font-extrabold text-center mb-20 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-300"
//           initial={{ opacity: 0, y: -30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           How to Use Our Virtual Interior Designer
//         </motion.h1>

//         <div className="space-y-28">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               className={`relative group flex flex-col md:flex-row items-center gap-10 ${
//                 i % 2 !== 0 ? 'md:flex-row-reverse' : ''
//               }`}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.9, delay: i * 0.2, ease: 'easeOut' }}
//               viewport={{ once: true }}
//             >
//               <div className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#9be7c4]/30 to-[#48cfae]/20 blur-2xl z-0 opacity-30 group-hover:scale-105 transition-transform duration-500" />
//                 <motion.img
//                   src={step.image}
//                   alt={step.title}
//                   className="relative z-10 w-full h-auto object-cover rounded-2xl transform group-hover:scale-105 transition duration-500"
//                   whileHover={{ scale: 1.05 }}
//                   initial={{ scale: 0.95, opacity: 0 }}
//                   whileInView={{ scale: 1, opacity: 1 }}
//                   transition={{ duration: 0.8 }}
//                 />
//               </div>

//               <motion.div
//                 className="md:w-1/2 bg-white/5 backdrop-blur-lg p-6 rounded-2xl border border-white/10 shadow-lg"
//                 initial={{ opacity: 0, y: 30 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.8, delay: i * 0.15 }}
//               >
//                 <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-lime-200 drop-shadow-md">
//                   {step.title}
//                 </h2>
//                 <p className="text-white/80 text-sm sm:text-base leading-relaxed">
//                   {step.description}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// };

// export default HowToUsePage;
// 'use client';

// import { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';

// const steps = [
//   {
//     title: '1. Upload Furniture',
//     description: 'Choose your favorite 3D furniture models or upload your own. You can drag and drop or select from our gallery.',
//     image: '/upload-demo.jpg',
//   },
//   {
//     title: '2. Place in Your Space',
//     description: 'Click to place your furniture in your virtual room. Move it around freely within the boundaries.',
//     image: '/place-demo.jpg',
//   },
//   {
//     title: '3. Adjust, Rotate & Scale',
//     description: 'Use the control menu to rotate, scale, or fine-tune the position of your item.',
//     image: '/adjust-demo.jpg',
//   },
//   {
//     title: '4. Preview in AR',
//     description: 'Switch to AR mode to view your room with the furniture in real-time through your camera.',
//     image: '/ar-demo.jpg',
//   },
//   {
//     title: '5. Save Your Design',
//     description: 'Take a screenshot of your design to save and share your virtual layout.',
//     image: '/save-demo.jpg',
//   },
// ];

// const HowToUsePage = () => {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   if (!mounted) return null;

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans min-h-screen py-24 px-4 sm:px-8 overflow-hidden">
//       <div className="max-w-6xl mx-auto">
//         <motion.h1
//           className="text-4xl sm:text-5xl font-extrabold text-center mb-24 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-300 drop-shadow-md"
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1, ease: 'easeOut' }}
//         >
//           <motion.span
//             initial={{ opacity: 0 }}
//             animate={{ opacity: [0, 1, 0.8, 1] }}
//             transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
//           >
//             How to Use Our Virtual Interior Designer
//           </motion.span>
//         </motion.h1>

//         <div className="space-y-36 relative z-10">
//           {steps.map((step, i) => (
//             <motion.div
//               key={i}
//               className={`relative group flex flex-col md:flex-row items-center gap-12 ${
//                 i % 2 !== 0 ? 'md:flex-row-reverse' : ''
//               }`}
//               initial={{ opacity: 0, y: 80, rotateX: -10 }}
//               whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
//               transition={{ duration: 1, delay: i * 0.2 }}
//               viewport={{ once: true }}
//             >
//               {/* Step Badge */}
//               <motion.div
//                 className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-20"
//                 initial={{ opacity: 0, y: -10 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 + 0.3 }}
//               >
//                 <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 shadow-lg text-sm text-white font-semibold tracking-wide animate-pulse">
//                   Step {i + 1}
//                 </div>
//               </motion.div>

//               {/* Image */}
//               <div className="relative w-full md:w-1/2 overflow-hidden rounded-2xl shadow-2xl">
//                 <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-[#9be7c4]/30 to-[#48cfae]/20 blur-2xl z-0 opacity-20 group-hover:scale-110 transition-transform duration-500" />
//                 <motion.img
//                   src={step.image}
//                   alt={step.title}
//                   className="relative z-10 w-full h-auto object-cover rounded-2xl transition-transform duration-500 transform group-hover:scale-[1.03] group-hover:rotate-[0.5deg]"
//                   whileHover={{ scale: 1.03 }}
//                 />
//               </div>

//               {/* Text Block */}
//               <motion.div
//                 className="md:w-1/2 bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 shadow-lg"
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ delay: i * 0.2 + 0.1 }}
//               >
//                 <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-lime-200 drop-shadow-md">
//                   {step.title}
//                 </h2>
//                 <p className="text-white/80 text-sm sm:text-base leading-relaxed tracking-wide">
//                   {step.description}
//                 </p>
//               </motion.div>
//             </motion.div>
//           ))}

//           {/* Fancy Divider at bottom */}
//           <motion.div
//             className="w-full h-16 mt-20 relative"
//             initial={{ width: 0 }}
//             whileInView={{ width: '100%' }}
//             transition={{ duration: 1.5, ease: 'easeInOut' }}
//           >
//             <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent blur-sm animate-pulse rounded-full" />
//           </motion.div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default HowToUsePage;
'use client';

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Particles from 'react-tsparticles';

const steps = [
  {
    title: '1. Sign In',
    description: 'Start by signing in to access the full features of the virtual interior designer.',
  },
  {
    title: '2. Choose a Room',
    description: 'Go to the design page and choose either a 3D room template or a Custom Room layout.',
  },
  {
    title: '3. Enter AR Mode',
    description: 'After selecting a room, you will be redirected to the AR page automatically.',
  },
  {
    title: '4. Add Furniture',
    description: 'You can either choose furniture from our database, upload your own 3D model, or convert a 2D image to 3D using mesh.ai.',
  },
  {
    title: '5. Control & Move Items',
    description: 'Use drag-and-drop or the control menu to rotate, scale, duplicate, or measure between two points in the room.',
  },
  {
    title: '6. Preview in Real World (QR Code)',
    description: 'Generate a QR code for your room. If scanned from a mobile device, the furniture appears in real-world AR. From a laptop, a scan view will be shown.',
  },
];

const HowToUsePage = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <main className="bg-[#0d4c3e] text-white font-sans min-h-screen py-24 px-4 sm:px-8 overflow-hidden relative">
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 40 },
            size: { value: 2 },
            move: { enable: true, speed: 0.4 },
            opacity: { value: 0.1 },
            color: { value: '#ffffff' },
          },
        }}
      />

      {mounted && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
        />
      )}

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.h1
          className="text-4xl sm:text-5xl font-extrabold text-center mb-24 tracking-tight bg-clip-text  drop-shadow-md"
          initial={{ opacity: 0.5, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          <motion.span
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0, 1, 0.8, 1] }}
            transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
          >
            How to Use Our Virtual Interior Designer
          </motion.span>
        </motion.h1>

        <div className="relative border-l-4 border-lime-300 pl-8 space-y-20">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative"
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="absolute -left-[2.2rem] top-1.5 w-4 h-4 bg-lime-300 rounded-full border-2 border-white shadow-lg" />
              <div className="bg-white/5 backdrop-blur-xl p-6 md:p-8 rounded-xl border border-white/10 shadow-lg">
                <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-lime-200">
                  {step.title}
                </h2>
                <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}

          {/* QR Code Visual at the End */}
          <motion.div
            className="flex flex-col md:flex-row items-center justify-center gap-8 mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="bg-white p-6 rounded-2xl shadow-2xl">
              <img
                src="/qr-code-mobile.png"
                alt="Mobile View"
                className="w-60 h-60 object-cover object-bottom rounded-xl"
              />
              <p className="text-center mt-3 text-base text-black font-semibold">
                View in Real World
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-2xl">
              <img
                src="/qr-code-laptop.png"
                alt="Laptop Scan"
                className="w-60 h-60 object-cover  rounded-xl"
              />
              <p className="text-center mt-3 text-base text-black font-semibold">
                Scan to Open on Mobile
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </main>
  );
};

export default HowToUsePage;