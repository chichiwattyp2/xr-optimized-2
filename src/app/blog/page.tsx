//  'use client';
// import Image from 'next/image';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/design1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/design2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/design3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/design4.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/design5.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/design6.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="bg-[#0d4c3e] font-sans text-white">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative">
//         <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
//           <Image
//             src="/hero.jpg"
//             alt="Hero"
//             width={1920}
//             height={1080}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/40">
//           <div className="max-w-2xl text-white drop-shadow-lg">
//             <p className="uppercase text-xs tracking-widest mb-2">Inspiration</p>
//             <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
//               Explore Our Design Ideas
//             </h1>
//             <p className="text-sm mb-6">
//               Stay ahead with trending interior ideas and unique looks from our design experts.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-4 sm:px-6 bg-[#0d4c3e]">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-white text-2xl font-bold mb-8 text-center">Latest Designs</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {blogItems.map(({ id, title, author, image }) => (
//               <div
//                 key={id}
//                 className="bg-[#E5F2F8] text-[#0d4c3e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//               >
//                 <Image
//                   src={image}
//                   alt={title}
//                   width={400}
//                   height={250}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4 space-y-2">
//                   <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                   <p className="text-sm text-gray-700">Click to edit the text box.</p>
//                   <p className="text-xs italic text-gray-500">By {author}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Start Your Design Section ---------- */}
//       <section className="bg-[#0d4c3e] text-white py-16 px-4 sm:px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          
//           {/* Left Box Styled Like Blog Cards */}
//           <div className="bg-[#E5F2F8] text-[#0d4c3e] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
//             <div className="p-6 flex flex-col space-y-4 text-center">
//               <div className="mx-auto bg-[#0d4c3e] text-white w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
//                 ★
//               </div>
//               <h3 className="text-xl font-bold">Start your design</h3>
//               <p className="text-sm text-gray-700">
//                 Sample text. Click to select the text box. Click again or double click to start editing the text.
//               </p>
//               <button className="mt-4 px-4 py-2 bg-[#0d4c3e] text-white rounded-full font-semibold hover:bg-[#08382f] transition">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Right Image */}
//           <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
//             <Image
//               src="/bedroom.jpg" // Make sure this image exists in your public folder
//               alt="Modern Bedroom"
//               width={400}
//               height={250}
//               className="w-full h-40 object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/design1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/design2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/design3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/design4.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/design5.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/design6.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="bg-white text-white font-sans">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative">
//         <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
//           <Image
//             src="/hero.jpg"
//             alt="Hero"
//             width={1920}
//             height={1080}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/40">
//           <div className="max-w-2xl drop-shadow-lg">
//             <p className="uppercase text-xs tracking-widest mb-2">Inspiration</p>
//             <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
//               Explore Our Design Ideas
//             </h1>
//             <p className="text-sm mb-6">
//               Stay ahead with trending interior ideas and unique looks from our design experts.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-4 sm:px-6 bg-[#E5F2F8]">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-[#0d4c3e] text-2xl font-bold mb-8 text-center">Latest Designs</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {blogItems.map(({ id, title, author, image }) => (
//               <div
//                 key={id}
//                 className="bg-[#0d4c3e] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//               >
//                 <Image
//                   src={image}
//                   alt={title}
//                   width={400}
//                   height={250}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4 space-y-2">
//                   <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                   <p className="text-sm text-white/80">Click to edit the text box.</p>
//                   <p className="text-xs italic text-white/60">By {author}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Start Your Design Section ---------- */}
//       <section className="py-16 px-4 sm:px-6 bg-[#E5F2F8]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Text Box */}
//           <div className="bg-[#0d4c3e] text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
//             <div className="p-6 flex flex-col space-y-4 text-center">
//               <div className="mx-auto bg-white text-[#0d4c3e] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
//                 ★
//               </div>
//               <h3 className="text-xl font-bold">Start your design</h3>
//               <p className="text-sm text-white/80">
//                 Sample text. Click to select the text box. Click again or double click to start editing the text.
//               </p>
//               <button className="mt-4 px-4 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold hover:bg-gray-200 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
//             <Image
//               src="/bedroom.jpg"
//               alt="Modern Bedroom"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/design1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/design2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/design3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/design4.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/design5.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/design6.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="bg-white text-white font-sans">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative">
//         <div className="w-full h-[300px] sm:h-[400px] overflow-hidden">
//           <Image
//             src="/hero.jpg"
//             alt="Hero"
//             width={1920}
//             height={1080}
//             className="w-full h-full object-cover object-center"
//           />
//         </div>
//         <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-black/40">
//           <div className="max-w-2xl drop-shadow-lg">
//             <p className="uppercase text-xs tracking-widest mb-2">Inspiration</p>
//             <h1 className="text-3xl sm:text-4xl font-bold leading-tight mb-4">
//               Explore Our Design Ideas
//             </h1>
//             <p className="text-sm mb-6">
//               Stay ahead with trending interior ideas and unique looks from our design experts.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-4 sm:px-6 bg-[#E5F2F8]">
//         <div className="max-w-6xl mx-auto">
//           <h2 className="text-[#0d4c3e] text-2xl font-bold mb-8 text-center">Latest Designs</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {blogItems.map(({ id, title, author, image }) => (
//               <div
//                 key={id}
//                 className="bg-[#0d4c3e] text-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
//               >
//                 <Image
//                   src={image}
//                   alt={title}
//                   width={400}
//                   height={250}
//                   className="w-full h-40 object-cover"
//                 />
//                 <div className="p-4 space-y-2">
//                   <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                   <p className="text-sm text-white/80">Click to edit the text box.</p>
//                   <p className="text-xs italic text-white/60">By {author}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ---------- Start Your Design Section (Full Width) ---------- */}
//       <section className="py-16 px-4 sm:px-6 bg-[#E5F2F8]">
//         <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Text Box */}
//           <div className="bg-[#0d4c3e] text-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col justify-between mx-auto w-full max-w-6xl px-6 md:px-0">
//             <div className="p-6 flex flex-col space-y-4 text-center">
//               <div className="mx-auto bg-white text-[#0d4c3e] w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold">
//                 ★
//               </div>
//               <h3 className="text-xl font-bold">Start your design</h3>
//               <p className="text-sm text-white/80">
//                 Sample text. Click to select the text box. Click again or double click to start editing the text.
//               </p>
//               <button className="mt-4 px-4 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold hover:bg-gray-200 transition">
//                 Learn More
//               </button>
//             </div>
//           </div>

//           {/* Image */}
//           <div className="rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 w-full max-w-6xl mx-auto">
//             <Image
//               src="/bedroom.jpg"
//               alt="Modern Bedroom"
//               width={600}
//               height={400}
//               className="w-full h-full object-cover"
//             />
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/design1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/design2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/design3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/design4.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/design5.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/design6.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="font-sans bg-white text-gray-800">
//       {/* ---------- Hero Section ---------- */}
//       <section className="bg-[#0d4c3e] text-white py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <Image
//             src="/design5.jpg"
//             alt="Hero"
//             width={600}
//             height={400}
//             className="rounded-xl w-full h-auto object-cover"
//           />
//           <div className="space-y-4">
//             <h1 className="text-3xl sm:text-4xl font-bold">2024 home decor trends</h1>
//             <p className="text-sm sm:text-base text-white/90">
//               Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute
//               irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse
//               sem arcu, convallis non pretium sit amet, tincidunt sit amet lectus. Duis aute irure dolor in reprehenderit
//               in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section (With Colored Paragraphs) ---------- */}
//       <section className="py-16 px-6 bg-[#f5f5f5]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {blogItems.map(({ id, title, author, image }) => (
//             <div key={id} className="rounded-xl shadow hover:shadow-lg transition-all overflow-hidden bg-white">
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">Sample text. Click to select the text box.</p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="w-full h-[500px] grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side */}
//         <div className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4">
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start your design</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Sample text. Click to select the text box. Click again or double click to start editing the text.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold hover:bg-gray-200 transition">
//             Learn More
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="w-full h-full">
//           <Image
//             src="/bedroom.jpg"
//             alt="Modern Bedroom"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/design1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/design2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/design3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/design4.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/design5.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/design6.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="font-sans bg-white text-gray-800">
//       {/* ---------- Hero Section ---------- */}
//       <section className="bg-[#0d4c3e] text-white py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <Image
//             src="/design5.jpg"
//             alt="Hero"
//             width={600}
//             height={400}
//             className="rounded-xl w-full h-auto object-cover"
//           />
//           <div className="space-y-4">
//             <h1 className="text-3xl sm:text-4xl font-bold">2024 home decor trends</h1>
//             <p className="text-sm sm:text-base text-white/90">
//               Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute
//               irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse
//               sem arcu, convallis non pretium sit amet, tincidunt sit amet lectus. Duis aute irure dolor in reprehenderit
//               in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section (Light Teal Background + Dark Paragraphs) ---------- */}
//       <section className="py-16 px-6 bg-[#E5F2F8]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {blogItems.map(({ id, title, author, image }) => (
//             <div key={id} className="rounded-xl shadow hover:shadow-lg transition-all overflow-hidden bg-white">
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">Sample text. Click to select the text box.</p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="w-full h-[500px] grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side */}
//         <div className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4">
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start your design</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Sample text. Click to select the text box. Click again or double click to start editing the text.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold hover:bg-gray-200 transition">
//             Learn More
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="w-full h-full">
//           <Image
//             src="/bedroom.jpg"
//             alt="Modern Bedroom"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="font-sans bg-white text-gray-800">
//       {/* ---------- Hero Section ---------- */}
//       <section className="bg-[#0d4c3e] text-white py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <Image
//             src="/bla.jpg"
//             alt="Hero"
//             width={600}
//             height={400}
//             className="rounded-xl w-full h-auto object-cover"
//           />
//           <div className="space-y-4">
//             <h1 className="text-3xl sm:text-4xl font-bold">2024 home decor trends</h1>
//             <p className="text-sm sm:text-base text-white/90">
//               Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute
//               irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse
//               sem arcu, convallis non pretium sit amet, tincidunt sit amet lectus. Duis aute irure dolor in reprehenderit
//               in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {blogItems.map(({ id, title, author, image }) => (
//             <div
//               key={id}
//               className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">Sample text. Click to select the text box.</p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="w-full h-[500px] grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side */}
//         <div className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4">
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start your design</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Sample text. Click to select the text box. Click again or double click to start editing the text.
//           </p>
//           <button className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold hover:bg-gray-200 transition">
//             Learn More
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="w-full h-full">
//           <Image
//             src="/1.jpg"
//             alt="Modern Bedroom"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// const blogItems = [
//   { id: 1, title: 'design 1', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'design 2', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'design 3', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'design 4', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'design 5', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'design 6', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="font-sans bg-white text-gray-800">
//       {/* ---------- Hero Section ---------- */}
//       <section className="bg-[#0d4c3e] text-white py-12 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <Image
//             src="/bla.jpg"
//             alt="Hero"
//             width={600}
//             height={400}
//             className="rounded-xl w-full h-auto object-cover"
//           />
//           <div className="space-y-4">
//             <h1 className="text-3xl sm:text-4xl font-bold">2024 home decor trends</h1>
//             <p className="text-sm sm:text-base text-white/90">
//               Sample text. Click to select the text box. Click again or double click to start editing the text. Duis aute
//               irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Suspendisse
//               sem arcu, convallis non pretium sit amet, tincidunt sit amet lectus. Duis aute irure dolor in reprehenderit
//               in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
//           {blogItems.map(({ id, title, author, image }) => (
//             <div
//               key={id}
//               className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">Sample text. Click to select the text box  
//                   .</p>
//                 <p className="text-xs italic text-white/60"  >By {author}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side */}
//         <div className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4">
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start your design</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Sample text. Click to select the text box. Click again or double click to start editing the text.
//           </p>

//           {/* Animated "Learn More" Button */}
//           <motion.button
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 hover:shadow-md transition-all"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//           </motion.button>
//         </div>

//         {/* Right Side */}
//         <div className="w-full h-[300px] md:h-auto">
//           <Image
//             src="/1.jpg"
//             alt="Modern Bedroom"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// // Mock data for featured blog posts
// const blogItems = [
//   { id: 1, title: 'Minimalist Living Room', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'Coastal Interior Style', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'Urban Industrial Loft', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Rustic Bedroom Design', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Scandinavian Simplicity', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Bold Modern Contrast', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="font-sans bg-white text-gray-800">
//       {/* ---------- Hero Section ---------- */}
//       <section className="bg-[#0d4c3e] text-white py-16 px-6">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Interior trend hero"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Top 2024 Interior Design Trends</h1>
//             <p className="text-base text-white/90">
//               Discover this year's most inspiring home design themes—from minimalist elegance to vibrant modern contrast.
//               Dive into curated articles and expert tips to transform your living space into a visual story of style and function.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           {blogItems.map(({ id, title, author, image }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">
//                   Explore design ideas, tips, and layouts for the perfect {title.toLowerCase()} that reflects your style.
//                 </p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start Your Design Journey</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Whether you're redesigning a single room or planning a full home transformation, let us guide your inspiration.
//           </p>

//           <motion.button
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 hover:shadow-md transition-all"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="w-full h-[300px] md:h-auto"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Modern Interior"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';

// // Blog data
// const blogItems = [
//   { id: 1, title: 'Minimalist Living Room', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'Coastal Interior Style', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'Urban Industrial Loft', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Rustic Bedroom Design', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Scandinavian Simplicity', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Bold Modern Contrast', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   return (
//     <main className="font-sans bg-white text-gray-800">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative bg-[#0d4c3e] text-white py-16 px-6 overflow-hidden">
//         <FloatingBubbles /> {/* Bubbles behind content */}

//         <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Interior trend hero"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Top 2024 Interior Design Trends</h1>
//             <p className="text-base text-white/90">
//               Discover this year's most inspiring home design themes—from minimalist elegance to vibrant modern contrast.
//               Dive into curated articles and expert tips to transform your living space into a visual story of style and function.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           {blogItems.map(({ id, title, author, image }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">
//                   Explore design ideas, tips, and layouts for the perfect {title.toLowerCase()} that reflects your style.
//                 </p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="w-full grid grid-cols-1 md:grid-cols-2">
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="bg-[#0d4c3e] text-white flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start Your Design Journey</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Whether you're redesigning a single room or planning a full home transformation, let us guide your inspiration.
//           </p>

//           <motion.button
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 hover:shadow-md transition-all"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="w-full h-[300px] md:h-auto"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Modern Interior"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }

// // Floating Bubbles Component
// const FloatingBubbles = () => {
//   return (
//     <ul className="absolute inset-0 z-0 pointer-events-none">
//       {[...Array(12)].map((_, i) => (
//         <li
//           key={i}
//           className="absolute w-4 h-4 bg-white/10 rounded-full animate-float"
//           style={{
//             top: `${Math.random() * 100}%`,
//             left: `${Math.random() * 100}%`,
//             animationDelay: `${i * 0.5}s`,
//             animationDuration: `${6 + (i % 4)}s`,
//           }}
//         />
//       ))}
//     </ul>
//   );
// };
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   { id: 1, title: 'Minimalist Living Room', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'Coastal Interior Style', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'Urban Industrial Loft', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Rustic Bedroom Design', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Scandinavian Simplicity', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Bold Modern Contrast', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const tempBubbles = Array.from({ length: 20 }).map((_, i) => {
//       const size = Math.random() * 40 + 10;
//       const style = {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${size}px`,
//         height: `${size}px`,
//         animationDelay: `${Math.random() * 5}s`,
//         animationDuration: `${6 + Math.random() * 4}s`,
//       };
//       return (
//         <div
//           key={i}
//           className="absolute bg-white rounded-full opacity-10 animate-float"
//           style={style}
//         />
//       );
//     });
//     setBubbles(tempBubbles);
//   }, []);

//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Interior trend hero"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Top 2024 Interior Design Trends</h1>
//             <p className="text-base text-white/90">
//               Discover this year's most inspiring home design themes—from minimalist elegance to vibrant modern contrast.
//               Dive into curated articles and expert tips to transform your living space into a visual story of style and function.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           {blogItems.map(({ id, title, author, image }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">
//                   Explore design ideas, tips, and layouts for the perfect {title.toLowerCase()} that reflects your style.
//                 </p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start Your Design Journey</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Whether you're redesigning a single room or planning a full home transformation, let us guide your inspiration.
//           </p>

//           <motion.button
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 hover:shadow-md transition-all"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[300px] md:h-auto"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Modern Interior"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   { id: 1, title: 'Minimalist Living Room', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'Coastal Interior Style', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'Urban Industrial Loft', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Rustic Bedroom Design', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Scandinavian Simplicity', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Bold Modern Contrast', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

   
//   useEffect(() => {
//   const tempBubbles = Array.from({ length: 20 }).map((_, i) => {
//     const size = Math.random() * 14 + 6; // 6px to 20px
//     const style = {
//       top: `${Math.random() * 100}%`,
//       left: `${Math.random() * 100}%`,
//       width: `${size}px`,
//       height: `${size}px`,
//       animationDelay: `${Math.random() * 5}s`,
//       animationDuration: `${6 + Math.random() * 4}s`,
//     };
//     return (
//       <div
//         key={i}
//         className="absolute bg-white/20 rounded-full opacity-20 animate-float"
//         style={style}
//       />
//     );
//   });
//   setBubbles(tempBubbles);
// }, []);


//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Interior trend hero"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Top 2024 Interior Design Trends</h1>
//             <p className="text-base text-white/90">
//               Discover this year's most inspiring home design themes—from minimalist elegance to vibrant modern contrast.
//               Dive into curated articles and expert tips to transform your living space into a visual story of style and function.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           {blogItems.map(({ id, title, author, image }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.015] overflow-hidden"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">
//                   Explore design ideas, tips, and layouts for the perfect {title.toLowerCase()} that reflects your style.
//                 </p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start Your Design Journey</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Whether you're redesigning a single room or planning a full home transformation, let us guide your inspiration.
//           </p>

//           <motion.button
//             whileHover={{ x: 5 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 hover:shadow-md transition-all"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[300px] md:h-auto"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Modern Interior"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   { id: 1, title: 'Minimalist Living Room', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'Coastal Interior Style', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'Urban Industrial Loft', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Rustic Bedroom Design', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Scandinavian Simplicity', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Bold Modern Contrast', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const tempBubbles = Array.from({ length: 20 }).map((_, i) => {
//       const size = Math.random() * 14 + 6; // 6–20px
//       const style = {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${size}px`,
//         height: `${size}px`,
//         animationDelay: `${Math.random() * 5}s`,
//         animationDuration: `${6 + Math.random() * 4}s`,
//       };
//       return (
//         <div
//           key={i}
//           className="absolute bg-white/20 rounded-full opacity-20 animate-float"
//           style={style}
//         />
//       );
//     });
//     setBubbles(tempBubbles);
//   }, []);

//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Interior trend hero"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Top 2024 Interior Design Trends</h1>
//             <p className="text-base text-white/90">
//               Discover this year's most inspiring home design themes—from minimalist elegance to vibrant modern contrast.
//               Dive into curated articles and expert tips to transform your living space into a visual story of style and function.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//         >
//           {blogItems.map(({ id, title, author, image }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="rounded-xl bg-white shadow-md hover:shadow-2xl hover:ring-2 hover:ring-[#0d4c3e]/30 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] overflow-hidden group"
//             >
//               <Image
//                 src={image}
//                 alt={title}
//                 width={400}
//                 height={250}
//                 className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//               />
//               <div className="bg-[#0d4c3e] text-white p-4 space-y-2">
//                 <h3 className="text-lg font-semibold capitalize">{title}</h3>
//                 <p className="text-sm text-white/90">
//                   Explore design ideas, tips, and layouts for the perfect {title.toLowerCase()} that reflects your style.
//                 </p>
//                 <p className="text-xs italic text-white/60">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}
//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start Your Design Journey</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Whether you're redesigning a single room or planning a full home transformation, let us guide your inspiration.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>

//             {/* Shining ring effect */}
//             <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[300px] md:h-auto"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Modern Interior"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   { id: 1, title: 'Minimalist Living Room', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'Coastal Interior Style', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'Urban Industrial Loft', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Rustic Bedroom Design', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Scandinavian Simplicity', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Bold Modern Contrast', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const tempBubbles = Array.from({ length: 20 }).map((_, i) => {
//       const size = Math.random() * 14 + 6; // 6–20px
//       const style = {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${size}px`,
//         height: `${size}px`,
//         animationDelay: `${Math.random() * 5}s`,
//         animationDuration: `${6 + Math.random() * 4}s`,
//       };
//       return (
//         <div
//           key={i}
//           className="absolute bg-white/20 rounded-full opacity-20 animate-float"
//           style={style}
//         />
//       );
//     });
//     setBubbles(tempBubbles);
//   }, []);

//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1.9, x: 0 }}
//             transition={{ duration: .6 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Interior trend hero"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Top 2024 Interior Design Trends</h1>
//             <p className="text-base text-white/90">
//               Discover this year's most inspiring home design themes—from minimalist elegance to vibrant modern contrast.
//               Dive into curated articles and expert tips to transform your living space into a visual story of style and function.
//             </p>
//           </motion.div>
//         </div>
//       </section>

      
//       {/* ---------- Blog Grid Section ---------- */}
// <section className="py-16 px-6 bg-[#F1F9F7]">
//   <motion.div
//     initial="hidden"
//     whileInView="visible"
//     viewport={{ once: true }}
//     transition={{ staggerChildren: 0.15 }}
//     className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"
//   >
//     {blogItems.map(({ id, title, author, image }) => (
//       <motion.div
//         key={id}
//         variants={{
//           hidden: { opacity: 0, y: 20 },
//           visible: { opacity: 1.2, y: 0 },
//         }}
//         transition={{ duration: 0.6 }}
//         className="group rounded-xl bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02] hover:shadow-2xl hover:ring-2 hover:ring-[#0d4c3e]/30 overflow-hidden cursor-pointer"
//       >
//         <div className="transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110">
//           <Image
//             src={image}
//             alt={title}
//             width={400}
//             height={250}
//             className="w-full h-48 object-cover"
//           />
//         </div>
//         <div className="bg-[#0d4c3e] text-white p-4 space-y-2 transition-all duration-300 group-hover:bg-[#0f5e4f]">
//           <h3 className="text-lg font-semibold capitalize group-hover:text-white">
//             {title}
//           </h3>
//           <p className="text-sm text-white/90 group-hover:text-white">
//             Explore design ideas, tips, and layouts for the perfect {title.toLowerCase()} that reflects your style.
//           </p>
//           <p className="text-xs italic text-white/60 group-hover:text-white/70">By {author}</p>
//         </div>
//       </motion.div>
//     ))}
//   </motion.div>
// </section>


//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}

//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Start Your Design Journey</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Whether you're redesigning a single room or planning a full home transformation, let us guide your inspiration.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Learn More</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//             {/* Glowing ring */}
//             <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[300px] md:h-auto group"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Modern Interior"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   { id: 1, title: 'Designing with Depth: Layering Furniture in AR', author: 'Amy', image: '/1.jpg' },
//   { id: 2, title: 'How to Visualize Your Room Before Buying', author: 'Alex', image: '/2.jpg' },
//   { id: 3, title: 'From Upload to Upgrade: The Smart Room Journey', author: 'Nora', image: '/3.jpg' },
//   { id: 4, title: 'Color Harmony: Matching Furniture to Your Walls', author: 'Khalid', image: '/1.jpg' },
//   { id: 5, title: 'Tiny Spaces, Big Impact with AR', author: 'Sina', image: '/2.jpg' },
//   { id: 6, title: 'Mixing Styles Confidently with Tech', author: 'Naomi', image: '/3.jpg' },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const tempBubbles = Array.from({ length: 25 }).map((_, i) => {
//       const size = Math.random() * 20 + 20; // 20–40px
//       const style = {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${size}px`,
//         height: `${size}px`,
//         animationDelay: `${Math.random() * 5}s`,
//         animationDuration: `${8 + Math.random() * 6}s`,
//         filter: 'blur(2px)',
//       };
//       return (
//         <div
//           key={i}
//           className="absolute bg-white/30 rounded-full opacity-30 animate-float shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]"
//           style={style}
//         />
//       );
//     });
//     setBubbles(tempBubbles);
//   }, []);

//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Design Your Room Virtually</h1>
//             <p className="text-base text-white/90">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy. Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         >
//           {blogItems.map(({ id, title, author, image }) => (
             
//             <motion.div
//   key={id}
//   variants={{
//     hidden: { opacity: 0, y: 20 },
//     visible: { opacity: 1, y: 0 },
//   }}
//   transition={{ duration: 0.6 }}
//   className="group flex flex-col rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] hover:ring-4 hover:ring-[#0d4c3e]/30 overflow-hidden cursor-pointer min-h-[390px]"
// >
//   {/* Image Section */}
//   <div className="w-full h-52 overflow-hidden rounded-t-2xl">
//     <Image
//       src={image}
//       alt={title}
//       width={400}
//       height={250}
//       className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//     />
//   </div>

//   {/* Text Section */}
//   <div className="flex flex-col justify-between flex-1 p-5 bg-gradient-to-b from-[#0d4c3e] to-[#0f5e4f] text-white space-y-2 transition-all duration-300">
//     <div>
//       <h3 className="text-lg font-semibold group-hover:text-white">
//         {title}
//       </h3>
//       <p className="text-sm text-white/90 group-hover:text-white">
//         Learn how to transform your space virtually with confidence and creativity—powered by our design platform.
//       </p>
//     </div>
//     <p className="text-xs italic text-white/60 group-hover:text-white/70">By {author}</p>
//   </div>
// </motion.div>

//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}

//         {/* Left Side */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Ready to Try Furniture in Your Room?</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//             <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
//           </motion.button>
//         </motion.div>

//         {/* Right Side */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[300px] md:h-auto group"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Room with virtual furniture"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const tempBubbles = Array.from({ length: 25 }).map((_, i) => {
//       // const size = Math.random() * 20 + 20; // 20–40px
//       const size = Math.random() * 16 + 6;
//       const style = {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${size}px`,
//         height: `${size}px`,
//         animationDelay: `${Math.random() * 5}s`,
//         animationDuration: `${8 + Math.random() * 6}s`,
//         filter: 'blur(2px)',
//       };
//       return (
//         <div
//           key={i}
//           className="absolute bg-white/30 rounded-full opacity-30 animate-float shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]"
//           style={style}
//         />
//       );
//     });
//     setBubbles(tempBubbles);
//   }, []);

//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4"
//           >
//             <h1 className="text-4xl font-bold">Design Your Room Virtually</h1>
//             <p className="text-base text-white/90">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy. Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         >
//           {blogItems.map(({ id, title, author, image, description }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="group flex flex-col rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] hover:ring-4 hover:ring-[#0d4c3e]/30 overflow-hidden cursor-pointer min-h-[390px]"
//             >
//               {/* Image */}
//               <div className="w-full h-52 overflow-hidden rounded-t-2xl">
//                 <Image
//                   src={image}
//                   alt={title}
//                   width={400}
//                   height={250}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//                 />
//               </div>

//               {/* Text */}
//               <div className="flex flex-col justify-between flex-1 p-5 bg-gradient-to-b from-[#0d4c3e] to-[#0f5e4f] text-white space-y-2 transition-all duration-300">
//                 <div>
//                   <h3 className="text-lg font-semibold group-hover:text-white">
//                     {title}
//                   </h3>
//                   <p className="text-sm text-white/90 group-hover:text-white">
//                     {description}
//                   </p>
//                 </div>
//                 <p className="text-xs italic text-white/60 group-hover:text-white/70">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}

//         {/* Left CTA Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-2xl font-bold text-center">Ready to Try Furniture in Your Room?</h2>
//           <p className="text-sm text-white/80 text-center max-w-sm">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//             <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
//           </motion.button>
//         </motion.div>

//         {/* Right CTA Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[300px] md:h-auto group"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Room with virtual furniture"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import type { JSX } from 'react';
// import Image from 'next/image';
// import { motion } from 'framer-motion';
// import { useEffect, useState } from 'react';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [bubbles, setBubbles] = useState<JSX.Element[]>([]);

//   useEffect(() => {
//     const tempBubbles = Array.from({ length: 25 }).map((_, i) => {
//       const size = Math.random() * 16 + 6;
//       const style = {
//         top: `${Math.random() * 100}%`,
//         left: `${Math.random() * 100}%`,
//         width: `${size}px`,
//         height: `${size}px`,
//         animationDelay: `${Math.random() * 5}s`,
//         animationDuration: `${8 + Math.random() * 6}s`,
//         filter: 'blur(2px)',
//       };
//       return (
//         <div
//           key={i}
//           className="absolute bg-white/30 rounded-full opacity-30 animate-float shadow-[0_0_10px_2px_rgba(255,255,255,0.15)]"
//           style={style}
//         />
//       );
//     });
//     setBubbles(tempBubbles);
//   }, []);

//   return (
//     <main className="font-sans bg-white text-gray-800 relative">
//       {/* ---------- Hero Section ---------- */}
//       <section className="relative overflow-hidden bg-[#0d4c3e] text-white py-16 px-4 sm:px-6">
//         {bubbles}
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.6 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//             className="space-y-4 text-center md:text-left"
//           >
//             <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Design Your Room Virtually</h1>
//             <p className="text-base text-white/90">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy. Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Grid Section ---------- */}
//       <section className="py-16 px-4 sm:px-6 bg-[#F1F9F7]">
//         <motion.div
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true }}
//           transition={{ staggerChildren: 0.15 }}
//           className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10"
//         >
//           {blogItems.map(({ id, title, author, image, description }) => (
//             <motion.div
//               key={id}
//               variants={{
//                 hidden: { opacity: 0, y: 20 },
//                 visible: { opacity: 1, y: 0 },
//               }}
//               transition={{ duration: 0.6 }}
//               className="group flex flex-col rounded-2xl bg-white shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.03] hover:ring-4 hover:ring-[#0d4c3e]/30 overflow-hidden cursor-pointer min-h-[390px]"
//             >
//               {/* Image */}
//               <div className="w-full h-52 overflow-hidden rounded-t-2xl">
//                 <Image
//                   src={image}
//                   alt={title}
//                   width={400}
//                   height={250}
//                   className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//                 />
//               </div>

//               {/* Text */}
//               <div className="flex flex-col justify-between flex-1 p-5 bg-gradient-to-b from-[#0d4c3e] to-[#0f5e4f] text-white space-y-2 transition-all duration-300">
//                 <div>
//                   <h3 className="text-lg font-semibold group-hover:text-white">
//                     {title}
//                   </h3>
//                   <p className="text-sm text-white/90 group-hover:text-white">
//                     {description}
//                   </p>
//                 </div>
//                 <p className="text-xs italic text-white/60 group-hover:text-white/70">By {author}</p>
//               </div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </section>

//       {/* ---------- Final CTA Section ---------- */}
//       <section className="relative w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden bg-[#0d4c3e] text-white">
//         {bubbles}

//         {/* Left CTA Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 flex flex-col justify-center items-center text-center md:text-left p-6 sm:p-8 space-y-4"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg">
//             ★
//           </div>
//           <h2 className="text-xl sm:text-2xl font-bold max-w-sm">Ready to Try Furniture in Your Room?</h2>
//           <p className="text-sm text-white/80 max-w-sm">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//             <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
//           </motion.button>
//         </motion.div>

//         {/* Right CTA Image */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           viewport={{ once: true }}
//           className="z-10 w-full h-[250px] sm:h-[300px] md:h-auto group"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Room with virtual furniture"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-110"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import Particles from 'react-tsparticles';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans overflow-hidden relative min-h-screen py-24 px-4 sm:px-8">
//       {/* Scroll progress bar */}
//       {mounted && (
//         <motion.div
//           style={{ scaleX }}
//           className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
//         />
//       )}

//       {/* Background Particles */}
//       <Particles
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: false,
//           background: { color: { value: 'transparent' } },
//           particles: {
//             number: { value: 45 },
//             size: { value: 2 },
//             opacity: { value: 0.1 },
//             move: { enable: true, speed: 0.5 },
//             color: { value: '#ffffff' },
//           },
//         }}
//       />

//       {/* Heading */}
//       <motion.h1
//         className="text-4xl sm:text-5xl font-extrabold text-center mb-24 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-lime-300 drop-shadow-md z-10 relative"
//         initial={{ opacity: 0, scale: 0.95 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//       >
//         ✨ Explore Our Latest Blog Posts
//       </motion.h1>

//       {/* Blog Cards */}
//       <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 relative z-10">
//         {blogItems.map((item, index) => (
//           <motion.div
//             key={item.id}
//             className="group"
//             initial={{ opacity: 0, y: 80 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: index * 0.1 }}
//             viewport={{ once: true }}
//           >
//             <Tilt
//               tiltMaxAngleX={5}
//               tiltMaxAngleY={5}
//               glareEnable
//               glareMaxOpacity={0.2}
//               className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
//             >
//               <div className="relative overflow-hidden">
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={400}
//                   height={250}
//                   className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//               </div>
//               <div className="p-6 space-y-3">
//                 <h3 className="text-xl font-bold text-lime-200">{item.title}</h3>
//                 <p className="text-white/80 text-sm">{item.description}</p>
//                 <p className="text-xs text-white/60 italic">By {item.author}</p>
//               </div>
//             </Tilt>
//           </motion.div>
//         ))}
//       </div>

//       {/* Bottom Divider */}
//       <motion.div
//         className="w-full h-16 mt-24 relative"
//         initial={{ width: 0 }}
//         whileInView={{ width: '100%' }}
//         transition={{ duration: 1.2, ease: 'easeInOut' }}
//       >
//         <div className="absolute inset-0 h-1 bg-gradient-to-r from-transparent via-lime-300 to-transparent blur-sm animate-pulse rounded-full" />
//       </motion.div>
//     </main>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import Particles from 'react-tsparticles';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans overflow-hidden relative min-h-screen">
//       {/* Scroll progress bar */}
//       {mounted && (
//         <motion.div
//           style={{ scaleX }}
//           className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
//         />
//       )}

//       {/* Particles background */}
//       <Particles
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: false,
//           background: { color: { value: 'transparent' } },
//           particles: {
//             number: { value: 45 },
//             size: { value: 2 },
//             opacity: { value: 0.1 },
//             move: { enable: true, speed: 0.5 },
//             color: { value: '#ffffff' },
//           },
//         }}
//       />

//       {/* Hero Section */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="space-y-4 text-center md:text-left"
//           >
//             <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300">
//               Design Your Room Virtually
//             </h1>
//             <p className="text-white/80 text-base sm:text-lg">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy. Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Cards Section */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <motion.h2
//           className="text-3xl sm:text-4xl font-bold text-center mb-16 text-lime-300"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           ✍️ Our Latest AR Design Articles
//         </motion.h2>
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//           {blogItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 80 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.1 }}
//               viewport={{ once: true }}
//             >
//               <Tilt
//                 tiltMaxAngleX={5}
//                 tiltMaxAngleY={5}
//                 glareEnable
//                 glareMaxOpacity={0.2}
//                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
//               >
//                 <Image
//                   src={item.image}
//                   alt={item.title}
//                   width={400}
//                   height={250}
//                   className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
//                 />
//                 <div className="p-6 space-y-3">
//                   <h3 className="text-xl font-bold text-lime-200">{item.title}</h3>
//                   <p className="text-white/80 text-sm">{item.description}</p>
//                   <p className="text-xs text-white/60 italic">By {item.author}</p>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Footer */}
//       <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-24 px-6 bg-[#0d4c3e]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col justify-center items-center text-center md:text-left space-y-6"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow">
//             ★
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-bold max-w-md text-lime-300">
//             Ready to Try Furniture in Your Room?
//           </h2>
//           <p className="text-sm text-white/80 max-w-md">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="mt-2 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Room with virtual furniture"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import Particles from 'react-tsparticles';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans overflow-hidden relative min-h-screen">
//       {mounted && (
//         <motion.div
//           style={{ scaleX }}
//           className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
//         />
//       )}

//       <Particles
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: false,
//           background: { color: { value: 'transparent' } },
//           particles: {
//             number: { value: 50 },
//             size: { value: 2 },
//             opacity: { value: 0.08 },
//             move: { enable: true, speed: 0.4 },
//             color: { value: '#ffffff' },
//           },
//         }}
//       />

//       {/* Hero Section */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="space-y-4 text-center md:text-left"
//           >
//             <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 animate-pulse">
//               Design Your Room Virtually
//             </h1>
//             <p className="text-white/80 text-base sm:text-lg">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy.
//               Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Section */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 drop-shadow-md"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.02, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           ✍️ Our Latest AR Design Articles
//         </motion.h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//           {blogItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 60 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.15 }}
//               viewport={{ once: true }}
//               animate={{
//                 y: [0, -4, 0],
//               }}
//               transition={{
//                 duration: 4,
//                 repeat: Infinity,
//                 ease: 'easeInOut',
//                 delay: index * 0.2,
//               }}
//             >
//               <Tilt
//                 tiltMaxAngleX={5}
//                 tiltMaxAngleY={5}
//                 glareEnable
//                 glareMaxOpacity={0.2}
//                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500"
//               >
//                 <div className="relative overflow-hidden">
//                   <Image
//                     src={item.image}
//                     alt={item.title}
//                     width={400}
//                     height={250}
//                     className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-white/10 opacity-10 group-hover:opacity-20 transition-all duration-500" />
//                   <div className="absolute inset-0 bg-white/10 blur-xl opacity-10 group-hover:opacity-20 transition-all duration-500" />
//                 </div>

//                 <div className="p-6 space-y-3">
//                   <h3 className="text-xl font-bold text-lime-200">{item.title}</h3>
//                   <p className="text-white/80 text-sm">{item.description}</p>
//                   <p className="text-xs text-white/60 italic">By {item.author}</p>
//                 </div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-24 px-6 bg-[#0d4c3e]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col justify-center items-center text-center md:text-left space-y-6"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow">
//             ★
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-bold max-w-md text-lime-300">
//             Ready to Try Furniture in Your Room?
//           </h2>
//           <p className="text-sm text-white/80 max-w-md">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             className="relative overflow-hidden px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-bold shadow-md transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.div
//               className="absolute -inset-1 rounded-full border-2 border-lime-300 animate-pulse opacity-40"
//             />
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Room with virtual furniture"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import Particles from 'react-tsparticles';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans overflow-hidden relative min-h-screen">
//       {mounted && (
//         <motion.div
//           style={{ scaleX }}
//           className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
//         />
//       )}

//       <Particles
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: false,
//           background: { color: { value: 'transparent' } },
//           particles: {
//             number: { value: 50 },
//             size: { value: 2 },
//             opacity: { value: 0.08 },
//             move: { enable: true, speed: 0.4 },
//             color: { value: '#ffffff' },
//           },
//         }}
//       />

//       {/* Hero Section */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="space-y-4 text-center md:text-left"
//           >
//             <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 animate-pulse">
//               Design Your Room Virtually
//             </h1>
//             <p className="text-white/80 text-base sm:text-lg">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy.
//               Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Blog Cards */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 drop-shadow-md"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.02, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           ✍️ Our Latest AR Design Articles
//         </motion.h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//           {blogItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
//               viewport={{ once: true }}
//             >
//               <Tilt
//                 tiltMaxAngleX={4}
//                 tiltMaxAngleY={4}
//                 glareEnable
//                 glareMaxOpacity={0.12}
//                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-2xl"
//               >
//                 <motion.div
//                   animate={{ y: [0, -2, 0] }}
//                   transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//                 >
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={400}
//                       height={250}
//                       className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
//                     />
//                     <div className="absolute inset-0 bg-white/10 blur-2xl opacity-5 group-hover:opacity-10 transition-all duration-700" />
//                     <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 opacity-5 group-hover:opacity-10 transition-all duration-700" />
//                   </div>

//                   <div className="p-6 space-y-3">
//                     <h3 className="text-xl font-bold text-lime-200">{item.title}</h3>
//                     <p className="text-white/80 text-sm">{item.description}</p>
//                     <p className="text-xs text-white/60 italic">By {item.author}</p>
//                   </div>
//                 </motion.div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-24 px-6 bg-[#0d4c3e]">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col justify-center items-center text-center md:text-left space-y-6"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow">
//             ★
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-bold max-w-md text-lime-300">
//             Ready to Try Furniture in Your Room?
//           </h2>
//           <p className="text-sm text-white/80 max-w-md">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           <motion.button
//             whileHover={{ scale: 1.08 }}
//             className="relative overflow-hidden px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-bold shadow-md transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.div
//               className="absolute -inset-1 rounded-full border-2 border-lime-300 animate-pulse opacity-40"
//             />
//           </motion.button>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="w-full h-[250px] sm:h-[300px] md:h-[400px] overflow-hidden rounded-xl shadow-lg"
//         >
//           <Image
//             src="/1.jpg"
//             alt="Room with virtual furniture"
//             width={800}
//             height={500}
//             className="w-full h-full object-cover rounded-xl transition-transform duration-300 hover:scale-105"
//           />
//         </motion.div>
//       </section>
//     </main>
//   );
// }
// 'use client';
// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import { motion, useScroll, useSpring } from 'framer-motion';
// import Tilt from 'react-parallax-tilt';
// import Particles from 'react-tsparticles';

// const blogItems = [
//   {
//     id: 1,
//     title: 'Designing with Depth: Layering Furniture in AR',
//     author: 'Amy',
//     image: '/1.jpg',
//     description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
//   },
//   {
//     id: 2,
//     title: 'How to Visualize Your Room Before Buying',
//     author: 'Alex',
//     image: '/2.jpg',
//     description: 'Use AR tools to confidently test furniture placement before spending a penny.',
//   },
//   {
//     id: 3,
//     title: 'From Upload to Upgrade: The Smart Room Journey',
//     author: 'Nora',
//     image: '/3.jpg',
//     description: 'Start by uploading your room and see how smart suggestions reshape your space.',
//   },
//   {
//     id: 4,
//     title: 'Color Harmony: Matching Furniture to Your Walls',
//     author: 'Khalid',
//     image: '/1.jpg',
//     description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
//   },
//   {
//     id: 5,
//     title: 'Tiny Spaces, Big Impact with AR',
//     author: 'Sina',
//     image: '/2.jpg',
//     description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
//   },
//   {
//     id: 6,
//     title: 'Mixing Styles Confidently with Tech',
//     author: 'Naomi',
//     image: '/3.jpg',
//     description: 'Blend modern and classic furniture styles in your room before committing.',
//   },
// ];

// export default function BlogPage() {
//   const [mounted, setMounted] = useState(false);
//   useEffect(() => setMounted(true), []);
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

//   return (
//     <main className="bg-[#0d4c3e] text-white font-sans overflow-hidden relative min-h-screen">
//       {mounted && (
//         <motion.div
//           style={{ scaleX }}
//           className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
//         />
//       )}

//       <Particles
//         className="absolute inset-0 z-0"
//         options={{
//           fullScreen: false,
//           background: { color: { value: 'transparent' } },
//           particles: {
//             number: { value: 50 },
//             size: { value: 2 },
//             opacity: { value: 0.08 },
//             move: { enable: true, speed: 0.4 },
//             color: { value: '#ffffff' },
//           },
//         }}
//       />

//       {/* ---------- Hero Section ---------- */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.8 }}
//             className="group"
//           >
//             <Image
//               src="/bla.jpg"
//               alt="Room being virtually redesigned"
//               width={600}
//               height={400}
//               className="rounded-xl w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
//             />
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={{ opacity: 1, x: 0 }}
//             transition={{ duration: 1, delay: 0.3 }}
//             className="space-y-4 text-center md:text-left"
//           >
//             <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 animate-pulse">
//               Design Your Room Virtually
//             </h1>
//             <p className="text-white/80 text-base sm:text-lg">
//               Upload your space, explore furniture options, and see real-time virtual arrangements before you buy.
//               Discover smart, stylish transformations powered by AR and AI.
//             </p>
//           </motion.div>
//         </div>
//       </section>

//       {/* ---------- Blog Cards Section ---------- */}
//       <section className="relative z-10 py-24 px-4 sm:px-8">
//         <motion.h2
//           className="text-4xl sm:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 drop-shadow-md"
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           animate={{ opacity: [0.8, 1, 0.8], scale: [1, 1.02, 1] }}
//           transition={{ duration: 3, repeat: Infinity }}
//         >
//           ✍️ Our Latest AR Design Articles
//         </motion.h2>

//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
//           {blogItems.map((item, index) => (
//             <motion.div
//               key={item.id}
//               initial={{ opacity: 0, y: 40 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.8, delay: index * 0.15, ease: 'easeOut' }}
//               viewport={{ once: true }}
//             >
//               <Tilt
//                 tiltMaxAngleX={4}
//                 tiltMaxAngleY={4}
//                 glareEnable
//                 glareMaxOpacity={0.12}
//                 className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-2xl"
//               >
//                 <motion.div
//                   animate={{ y: [0, -2, 0] }}
//                   transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//                 >
//                   <div className="relative overflow-hidden">
//                     <Image
//                       src={item.image}
//                       alt={item.title}
//                       width={400}
//                       height={250}
//                       className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.03]"
//                     />
//                     <div className="absolute inset-0 bg-white/10 blur-2xl opacity-5 group-hover:opacity-10 transition-all duration-700" />
//                     <div className="absolute inset-0 bg-gradient-to-tr from-white/10 to-white/5 opacity-5 group-hover:opacity-10 transition-all duration-700" />
//                   </div>

//                   <div className="p-6 space-y-3">
//                     <h3 className="text-xl font-bold text-lime-200">{item.title}</h3>
//                     <p className="text-white/80 text-sm">{item.description}</p>
//                     <p className="text-xs text-white/60 italic">By {item.author}</p>
//                   </div>
//                 </motion.div>
//               </Tilt>
//             </motion.div>
//           ))}
//         </div>
//       </section>

//       {/* ---------- Enhanced Final CTA Section ---------- */}
//       <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-24 px-6 bg-[#0d4c3e] overflow-hidden">
//         {/* Glowing backdrop circles */}
//         <div className="absolute -top-16 -left-20 w-[300px] h-[300px] bg-lime-300/10 rounded-full blur-3xl animate-pulse" />
//         <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-teal-200/10 rounded-full blur-2xl animate-ping" />

//         {/* Left CTA Text */}
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="z-10 flex flex-col justify-center items-center text-center md:text-left space-y-6"
//         >
//           <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow">
//             ★
//           </div>
//           <h2 className="text-2xl sm:text-3xl font-bold max-w-md text-lime-200 drop-shadow-md">
//             Ready to Try Furniture in Your Room?
//           </h2>
//           <p className="text-sm text-white/80 max-w-md">
//             Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
//           </p>

//           {/* Your original custom button — unchanged */}
//           <motion.button
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: 'spring', stiffness: 300 }}
//             className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
//           >
//             <span>Start Now</span>
//             <motion.span
//               animate={{ scale: [1, 1.2, 1] }}
//               transition={{ repeat: Infinity, duration: 1.5 }}
//             >
//               ➜
//             </motion.span>
//             <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
//           </motion.button>
//         </motion.div>

//         {/* Right CTA Image with glow + float + shimmer */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8 }}
//           className="z-10 w-full h-[250px] sm:h-[300px] md:h-[400px] relative group"
//         >
//           <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-lime-300/10 to-white/5 blur-3xl opacity-30 group-hover:opacity-40 transition-all duration-700 rounded-xl" />
//           <motion.div
//             animate={{ y: [0, -4, 0] }}
//             transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
//             className="rounded-xl overflow-hidden shadow-xl"
//           >
//             <Image
//               src="/1.jpg"
//               alt="Room with virtual furniture"
//               width={800}
//               height={500}
//               className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
//             />
//           </motion.div>
//         </motion.div>
//       </section>
//     </main>
//   );
// }
'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring } from 'framer-motion';
import Tilt from 'react-parallax-tilt';
import Particles from 'react-tsparticles';

const blogItems = [
  {
    id: 1,
    title: 'Designing with Depth: Layering Furniture in AR',
    author: 'Amy',
    image: '/1.jpg',
    description: 'Discover how layering furniture in your room preview helps create depth and harmony.',
  },
  {
    id: 2,
    title: 'How to Visualize Your Room Before Buying',
    author: 'Alex',
    image: '/2.jpg',
    description: 'Use AR tools to confidently test furniture placement before spending a penny.',
  },
  {
    id: 3,
    title: 'From Upload to Upgrade: The Smart Room Journey',
    author: 'Nora',
    image: '/3.jpg',
    description: 'Start by uploading your room and see how smart suggestions reshape your space.',
  },
  {
    id: 4,
    title: 'Color Harmony: Matching Furniture to Your Walls',
    author: 'Khalid',
    image: '/1.jpg',
    description: 'Learn how to virtually try tones and textures that perfectly match your wall palette.',
  },
  {
    id: 5,
    title: 'Tiny Spaces, Big Impact with AR',
    author: 'Sina',
    image: '/2.jpg',
    description: 'Try space-saving layouts using our 3D tools for compact rooms that shine.',
  },
  {
    id: 6,
    title: 'Mixing Styles Confidently with Tech',
    author: 'Naomi',
    image: '/3.jpg',
    description: 'Blend modern and classic furniture styles in your room before committing.',
  },
];

export default function BlogPage() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 90, damping: 30 });

  return (
    <main className="bg-[#0d4c3e] text-white font-sans overflow-hidden relative min-h-screen">
      {/* Scroll progress bar */}
      {mounted && (
        <motion.div
          style={{ scaleX }}
          className="fixed top-0 left-0 right-0 h-1 bg-lime-300 origin-left z-50"
        />
      )}

      {/* Particles background */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: false,
          background: { color: { value: 'transparent' } },
          particles: {
            number: { value: 45 },
            size: { value: 2 },
            opacity: { value: 0.07 },
            move: { enable: true, speed: 0.3 },
            color: { value: '#ffffff' },
          },
        }}
      />

      {/* Hero Section */}
      <section className="relative z-10 py-24 px-4 sm:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeInOut' }}
            className="group"
          >
            <Image
              src="/bla.jpg"
              alt="Room being virtually redesigned"
              width={600}
              height={400}
              className="rounded-xl w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeInOut' }}
            className="space-y-4 text-center md:text-left"
          >
            <h1 className="text-4xl sm:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 animate-pulse">
              Design Your Room Virtually
            </h1>
            <p className="text-white/80 text-base sm:text-lg leading-relaxed">
              Upload your space, explore furniture options, and see real-time virtual arrangements before you buy.
              Discover smart, stylish transformations powered by AR and AI.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Cards Section */}
      <section className="relative z-10 py-24 px-4 sm:px-8">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-lime-200 to-teal-300 drop-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
        >
          ✍️ Our Latest AR Design Articles
        </motion.h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
          {blogItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.1, ease: 'easeOut' }}
              viewport={{ once: true }}
            >
              <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                glareEnable
                glareMaxOpacity={0.1}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden shadow-lg transition-all duration-700 hover:shadow-xl"
              >
                <motion.div
                  animate={{ y: [0, -2, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                >
                  <div className="relative overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={250}
                      className="w-full h-52 object-cover rounded-t-2xl transition-transform duration-700 ease-in-out group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-white/10 blur-2xl opacity-5" />
                  </div>
                  <div className="p-6 space-y-3">
                    <h3 className="text-xl font-semibold text-lime-200">{item.title}</h3>
                    <p className="text-white/80 text-sm leading-relaxed">{item.description}</p>
                    <p className="text-xs text-white/60 italic">By {item.author}</p>
                  </div>
                </motion.div>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center py-24 px-6 bg-[#0d4c3e] overflow-hidden">
        {/* Glow effects */}
        <div className="absolute -top-16 -left-20 w-[300px] h-[300px] bg-lime-300/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-[200px] h-[200px] bg-teal-200/10 rounded-full blur-2xl animate-ping" />

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="z-10 flex flex-col justify-center items-center text-center md:text-left space-y-6"
        >
          <div className="bg-white text-[#0d4c3e] w-10 h-10 flex items-center justify-center rounded-full font-bold text-lg shadow">
            ★
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold max-w-md text-lime-200 drop-shadow-md">
            Ready to Try Furniture in Your Room?
          </h2>
          <p className="text-sm text-white/80 max-w-md">
            Upload your room and start experimenting with real furniture models in your space—instantly, virtually, and beautifully.
          </p>

          {/* Original custom button — unchanged */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="mt-4 px-6 py-2 bg-white text-[#0d4c3e] rounded-full font-semibold flex items-center space-x-2 relative overflow-hidden shadow-md hover:shadow-[0_0_25px_rgba(255,255,255,0.5)] transition-all duration-300"
          >
            <span>Start Now</span>
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              ➜
            </motion.span>
            <span className="absolute inset-0 rounded-full ring-2 ring-white/30 group-hover:ring-white/70 transition-all duration-500 pointer-events-none"></span>
          </motion.button>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeInOut' }}
          className="z-10 w-full h-[250px] sm:h-[300px] md:h-[400px] relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-lime-300/10 to-white/5 blur-3xl opacity-30 rounded-xl" />
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <Image
              src="/1.jpg"
              alt="Room with virtual furniture"
              width={800}
              height={500}
              className="w-full h-full object-cover rounded-xl transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}
