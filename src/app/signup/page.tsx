//  'use client';

// import Image from 'next/image';

// export default function SignUpPage() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/blue.jpeg" // Replace with your image path
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Overlay to darken image a bit */}
//       <div className="absolute inset-0 bg-[#0d4c3e]/70 z-10"></div>

//       {/* Sign up card */}
//       <div className="relative z-20 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden shadow-2xl backdrop-blur-sm p-8 m-4">
//         {/* Optional Left Section with image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/blue.jpg" // Optional, or another interior image
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign up <span className="text-lg">→</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import Image from 'next/image';

// export default function SignUpPage() {
//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/living-room.jpg" // Your image path
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         {/* Optional Left Section with image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5">
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign up <span className="text-lg">→</span>
//             </button>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('https://interior-desgin.onrender.com/api/v1/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ name, email, password }),
//       });

//       const data = await res.json();

//       if (!res.ok) {
//         throw new Error(data.message || 'Registration failed');
//       }

//       setSuccess('Account created successfully!');
//       setName('');
//       setEmail('');
//       setPassword('');
//     } catch (err: any) {
//       setError(err.message);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/living-room.jpg"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         {/* Optional Left Section with image */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//                 required
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//                 required
//               />
//             </div>

//             <button
//               type="submit"
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               Sign up <span className="text-lg">→</span>
//             </button>
//           </form>

//           {/* Feedback Messages */}
//           {error && <p className="text-red-600 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess('');

//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//     } catch (err: any) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <Image
//         src="/living-room.jpg"
//         alt="Background"
//         layout="fill"
//         objectFit="cover"
//         className="z-0"
//         priority
//       />

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4">
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             layout="fill"
//             objectFit="cover"
//             className="rounded-2xl"
//           />
//         </div>

//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/living-room.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">
//                 Name
//               </label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">
//                 Email
//               </label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">
//                 Password
//               </label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       if (
//         err.message.includes('fetch') ||
//         err.message.includes('NetworkError') ||
//         err.message.includes('server is currently unavailable')
//       ) {
//         setError('Server is starting up or unavailable. Please try again shortly.');
//       } else {
//         setError(err.message || 'Something went wrong.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/living-room.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('/api/signup', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');
//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       if (
//         err.message.includes('fetch') ||
//         err.message.includes('NetworkError') ||
//         err.message.includes('server is currently unavailable')
//       ) {
//         setError('Server is starting up or unavailable. Please try again shortly.');
//       } else {
//         setError(err.message || 'Something went wrong.');
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/living-room.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/living-room.jpg"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/4.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function SignUpPage() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully!');
//       setFormData({ name: '', email: '', password: '' });
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/4.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//           {/* 👉 Sign in redirect link */}
//           <p className="text-sm text-center text-[#0d4c3e]">
//             Already have an account?{' '}
//             <Link href="/login" className="underline font-medium hover:text-[#08382e]">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       // Redirect to login page after successful signup
//       router.push('/login');
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/4.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//           {/* 👉 Sign in redirect link */}
//           <p className="text-sm text-center text-[#0d4c3e]">
//             Already have an account?{' '}
//             <Link href="/login" className="underline font-medium hover:text-[#08382e]">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });

//       setTimeout(() => {
//         router.push('/login');
//       }, 2000);
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/4.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//           {/* 👉 Sign in redirect link */}
//           <p className="text-sm text-center text-[#0d4c3e]">
//             Already have an account?{' '}
//             <Link href="/login" className="underline font-medium hover:text-[#08382e]">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   // For responsive confetti
//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 4000);
//     } catch (err: any) {
//       setError(err.message || 'Something went wrong.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {/* Confetti Celebration */}
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       {/* Background image */}
//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/4.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       {/* Sign up card */}
//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         {/* Left Section */}
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         {/* Form section */}
//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//           {/* 👉 Sign in redirect link */}
//           <p className="text-sm text-center text-[#0d4c3e]">
//             Already have an account?{' '}
//             <Link href="/login" className="underline font-medium hover:text-[#08382e]">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#0d4c3e]">
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="absolute inset-0 z-0">
//         <Image
//           src="/4.jpg"
//           alt="Background"
//           fill
//           className="object-cover"
//           sizes="100vw"
//           priority
//         />
//       </div>

//       <div className="relative z-10 max-w-4xl w-full grid md:grid-cols-2 gap-10 bg-white/90 rounded-3xl overflow-hidden p-8 m-4 shadow-2xl">
//         <div className="hidden md:block relative w-full h-96">
//           <Image
//             src="/5.png"
//             alt="Design Preview"
//             fill
//             className="object-cover rounded-2xl"
//             sizes="(min-width: 768px) 50vw, 100vw"
//             priority
//           />
//         </div>

//         <div className="flex flex-col justify-center space-y-6 text-[#0d4c3e]">
//           <h2 className="text-3xl font-bold text-center">Sign Up</h2>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <div>
//               <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//               <input
//                 id="name"
//                 type="text"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Name"
//               />
//             </div>

//             <div>
//               <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//               <input
//                 id="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Your Email"
//               />
//             </div>

//             <div>
//               <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//               <input
//                 id="password"
//                 type="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="w-full px-4 py-2 rounded-full bg-white text-[#0d4c3e] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//                 placeholder="Create Password"
//               />
//             </div>

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full flex items-center justify-center gap-2 bg-[#0d4c3e] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#0b3d31] transition disabled:opacity-60"
//             >
//               {loading ? 'Signing up...' : 'Sign up →'}
//             </button>
//           </form>

//           {loading && (
//             <p className="text-sm text-center text-gray-500">Connecting to server...</p>
//           )}
//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//           <p className="text-sm text-center text-[#0d4c3e]">
//             Already have an account?{' '}
//             <Link href="/login" className="underline font-medium hover:text-[#08382e]">
//               Sign in
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center bg-[#143d37]">
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="relative z-10 w-[90%] max-w-6xl rounded-[2rem] overflow-hidden shadow-2xl grid grid-cols-1 md:grid-cols-2 bg-white">
//         <div className="relative bg-white p-10 flex items-center justify-center">
//           <div className="absolute top-0 left-0 w-full h-full bg-[url('/wave-left.svg')] bg-no-repeat bg-contain z-0"></div>
//           <Image src="/tree.png" alt="Christmas Tree" width={300} height={300} className="z-10" />
//         </div>

//         <div className="relative bg-[#143d37] text-white p-10 z-10">
//           <div className="absolute top-0 right-0 w-full h-full bg-[url('/wave-right.svg')] bg-no-repeat bg-contain z-0"></div>

//           <div className="relative z-10">
//             <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
//             <form className="space-y-5" onSubmit={handleSubmit}>
//               <div>
//                 <label htmlFor="name" className="block mb-1 text-sm font-medium">Name</label>
//                 <input
//                   id="name"
//                   type="text"
//                   value={formData.name}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e0f4ec]"
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="email" className="block mb-1 text-sm font-medium">Email</label>
//                 <input
//                   id="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e0f4ec]"
//                   placeholder="Your Email"
//                 />
//               </div>

//               <div>
//                 <label htmlFor="password" className="block mb-1 text-sm font-medium">Password</label>
//                 <input
//                   id="password"
//                   type="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full px-4 py-2 rounded-full bg-white text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#e0f4ec]"
//                   placeholder="Create Password"
//                 />
//               </div>

//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 bg-[#3ecf8e] text-[#143d37] px-6 py-2 rounded-full font-semibold hover:bg-[#35b87f] transition disabled:opacity-60"
//               >
//                 {loading ? 'Signing up...' : 'Sign up →'}
//               </button>
//             </form>

//             {loading && (
//               <p className="text-sm text-center text-gray-300">Connecting to server...</p>
//             )}
//             {error && <p className="text-red-400 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-400 text-sm text-center">{success}</p>}

//             <p className="text-sm text-center mt-4">
//               Already have an account?{' '}
//               <Link href="/login" className="underline font-medium text-[#3ecf8e] hover:text-[#2fba78]">
//                 Sign in
//               </Link>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f7f9fd] p-4 relative">
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="max-w-6xl w-full bg-white rounded-[40px] shadow-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
//         {/* Left Form Side */}
//         <div className="bg-[#eaf1f5] p-10 flex flex-col justify-center space-y-6">
//           <div>
//             <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Login</h2>
//             <p className="text-sm text-gray-600">If You Are Already A Member, Easily Log In</p>
//           </div>

//           <form className="space-y-4" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-2 rounded-xl font-semibold hover:bg-[#093b30] transition"
//             >
//               {loading ? 'Signing up...' : 'Login'}
//             </button>
//           </form>

//           <div className="flex items-center justify-between">
//             <span className="w-full border-t border-gray-300"></span>
//             <span className="px-3 text-sm text-gray-500">OR</span>
//             <span className="w-full border-t border-gray-300"></span>
//           </div>

//           <button className="w-full flex items-center justify-center gap-2 border border-gray-300 bg-white py-2 rounded-xl hover:shadow-sm transition">
//             <Image src="/google-logo.png" alt="Google" width={20} height={20} />
//             <span className="text-sm text-gray-700">Login with Google</span>
//           </button>

//           <div className="flex justify-between text-sm text-gray-500 mt-2">
//             <Link href="#" className="hover:text-[#0d4c3e]">Forgot my password</Link>
//             <Link href="/login" className="hover:text-[#0d4c3e]">
//               <span>If You Don’t Have An Account, Create </span>
//               <span className="font-semibold underline ml-1">Register</span>
//             </Link>
//           </div>

//           {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//           {success && <p className="text-green-600 text-sm text-center">{success}</p>}
//         </div>

//         {/* Right 3D Image Side */}
//         <div className="relative hidden md:block">
//           <Image
//             src="/5.png" // Replace with your 3D room image (like in the uploaded image)
//             alt="3D Design"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-[#f3f8f7] px-4 py-8 relative">
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-[30px] bg-white overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3] flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Register</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#093b30] transition"
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>

             
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <Link href="#" className="underline hover:text-[#0d4c3e]">Forgot my password</Link>
//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e]">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg" // Replace with your actual uploaded image path
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div
//       className="min-h-screen flex items-center justify-center px-4 py-8 relative bg-cover bg-no-repeat bg-top"
//       style={{ backgroundImage: "url('/l.png')" }}
//     >
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-[30px] bg-white overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3] flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Register</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#093b30] transition"
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <Link href="#" className="underline hover:text-[#0d4c3e]">Forgot my password</Link>
//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e]">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();

//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/l.png" // ✅ Replace with your image name in /public
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {/* Confetti */}
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       {/* Signup Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Left Form Side */}
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#093b30] transition"
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>

//             <div className="relative flex items-center justify-center">
//               <div className="absolute h-px bg-gray-300 w-full"></div>
//               <span className="bg-[#eef4f3] px-3 text-sm text-gray-500">OR</span>
//             </div>
//           </form>

//           <div className="text-sm text-gray-600 mt-4 flex justify-between items-center">
//             <Link href="#" className="underline hover:text-[#0d4c3e]">Forgot my password</Link>
//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e]">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Right 3D Illustration Side */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image
//             src="/3d-room.jpg"
//             alt="3D Room"
//             fill
//             className="object-cover"
//             priority
//           />
//         </div>
//       </div>
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   // Forgot password modal
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image src="/l.png" alt="Background" fill className="absolute inset-0 object-cover z-0" priority />
//       {showConfetti && (
//         <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={800} gravity={0.8} wind={0.01} recycle={false} />
//       )}

//       {/* Sign Up Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[580px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-[#0d4c3e] text-white py-3 rounded-xl font-semibold hover:bg-[#093b30] transition"
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex justify-between items-center">
//             <button
//               onClick={() => setShowModal(true)}
//               className="underline hover:text-[#0d4c3e]"
//             >
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e]">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Right Illustration */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image src="/3d-room.jpg" alt="3D Room" fill className="object-cover" priority />
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-600 hover:text-[#0d4c3e] font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
//   [key: string]: any;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   // Forgot password modal
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     const handleResize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/login');
//       }, 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image src="/l.png" alt="Background" fill className="absolute inset-0 object-cover z-0" priority />
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       {/* Sign Up Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[580px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex justify-between items-center">
//             <button
//               onClick={() => setShowModal(true)}
//               className="underline hover:text-[#0d4c3e]"
//             >
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e]">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Right Illustration */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image src="/3d-room.jpg" alt="3D Room" fill className="object-cover" priority />
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-600 hover:text-[#0d4c3e] font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   // Forgot password modal
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);

//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       {/* Background */}
//       <Image src="/l.png" alt="Background" fill className="absolute inset-0 object-cover z-0" priority />
//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       {/* Sign Up Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[580px] flex flex-col md:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         <div className="w-full md:w-1/2 px-10 py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex justify-between items-center">
//             <button
//               onClick={() => setShowModal(true)}
//               className="underline hover:text-[#0d4c3e]"
//             >
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e]">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Right Illustration */}
//         <div className="w-full md:w-1/2 relative h-[400px] md:h-auto">
//           <Image src="/3d-room.jpg" alt="3D Room" fill className="object-cover" priority />
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 transition">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-[90%] max-w-md animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-600 hover:text-[#0d4c3e] font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       <Image src="/l.png" alt="Background" fill className="absolute inset-0 object-cover z-0" priority />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="relative z-10 w-full max-w-5xl min-h-[580px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500
//                 ${loading
//                 ? 'bg-gray-400 cursor-not-allowed'
//                 : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Register'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button
//               onClick={() => setShowModal(true)}
//               className="underline hover:text-[#0d4c3e] w-fit"
//             >
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Image */}
//         <div className="w-full lg:w-1/2 relative h-64 sm:h-80 lg:h-auto">
//           <Image src="/3d-room.jpg" alt="3D Room" fill className="object-cover" priority />
//         </div>
//       </div>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-600 hover:text-[#0d4c3e] font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';

// interface RegisterResponse {
//   message?: string;
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       <Image src="/great_wave_laptop_wallpaper .svg" alt="Background" fill className="absolute inset-0 object-cover z-0" priority />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       {/* Main Card */}
//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button
//               onClick={() => setShowModal(true)}
//               className="underline hover:text-[#0d4c3e] w-fit"
//             >
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* Image Section - Hidden on small screens */}
//         <div className="hidden lg:block w-1/2 relative">
//           <Image src="/room.glb" alt="3D Room" fill className="object-cover" priority />
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p
//                 className={`text-sm mb-2 ${
//                   resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'
//                 }`}
//               >
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button
//                 onClick={() => setShowModal(false)}
//                 className="text-gray-600 hover:text-[#0d4c3e] font-semibold"
//               >
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface RegisterResponse {
//   message?: string;
// }

// // 3D Model Loader
// function Model({ url }: { url: string }) {
//   const gltf = useGLTF(url);
//   return (
//     <>
//       <primitive object={gltf.scene} scale={1.5} />
//       <OrbitControls />
//     </>
//   );
// }

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       <Image
//         src="/great_wave_laptop_wallpaper .svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button onClick={() => setShowModal(true)} className="underline hover:text-[#0d4c3e] w-fit">
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* 3D Viewer Section */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//             </Canvas>
//           </div>
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-[#0d4c3e] font-semibold">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface RegisterResponse {
//   message?: string;
// }

// // 3D Model Loader
// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       <Image
//         src="/great_wave_laptop_wallpaper .svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button onClick={() => setShowModal(true)} className="underline hover:text-[#0d4c3e] w-fit">
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* 3D Viewer Section */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls enableZoom enablePan enableRotate />
//             </Canvas>
//           </div>
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-[#0d4c3e] font-semibold">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';

// interface RegisterResponse {
//   message?: string;
// }

// // 3D Model Loader
// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');

//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden">
//       <Image
//         src="/w1.svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0"
//         priority
//       />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={800}
//           gravity={0.8}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <div className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-sm overflow-hidden shadow-2xl">
//         {/* Form Section */}
//         <div className="w-full lg:w-1/2 px-6 sm:px-10 py-8 sm:py-12 bg-[#eef4f3]/80 flex flex-col justify-center">
//           <h2 className="text-2xl sm:text-3xl font-bold text-[#0d4c3e] mb-1">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <button
//               type="submit"
//               disabled={loading}
//               className={`w-full text-white py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed'
//                   : 'bg-[#0d4c3e] hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button onClick={() => setShowModal(true)} className="underline hover:text-[#0d4c3e] w-fit">
//               Forgot my password
//             </button>

//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </div>

//         {/* 3D Viewer Section */}
//         <div className="hidden lg:block w-1/2 relative">
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls
//                 autoRotate={false}
//                 autoRotateSpeed={1.5}
//                 enableZoom={false}
//                 enablePan={false}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2.5}
//                 maxAzimuthAngle={Math.PI / 2}
//                 minAzimuthAngle={-Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </div>
//       </div>

//       {/* Forgot Password Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-2 sm:px-4">
//           <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto animate-fade-in">
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-[#0d4c3e] font-semibold">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { motion } from 'framer-motion';

// interface RegisterResponse {
//   message?: string;
// }

// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');
//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-br from-[#e8f5f1] to-[#f2fcf8]">
//       <Image
//         src="/w1.svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0 pointer-events-none"
//         priority
//       />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={500}
//           gravity={0.4}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.15)] overflow-hidden"
//       >
//         {/* Left Form Section */}
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="w-full lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 bg-[#eef4f3]/80 flex flex-col justify-center"
//         >
//           <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0d4c3e] mb-2">Sign Up</h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             <input
//               id="name"
//               type="text"
//               placeholder="Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="email"
//               type="email"
//               placeholder="Email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             <input
//               id="password"
//               type="password"
//               placeholder="Password"
//               value={formData.password}
//               onChange={handleChange}
//               required
//               className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.4 }}
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed text-white'
//                   : 'bg-[#0d4c3e] text-white hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </motion.button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button onClick={() => setShowModal(true)} className="underline hover:text-[#0d4c3e] w-fit">
//               Forgot my password
//             </button>
//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </motion.div>

//         {/* Right 3D Section */}
//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="hidden lg:block w-1/2 relative"
//         >
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls
//                 autoRotate
//                 autoRotateSpeed={1}
//                 enableZoom={false}
//                 enablePan={false}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2.5}
//                 maxAzimuthAngle={Math.PI / 2}
//                 minAzimuthAngle={-Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </motion.div>
//       </motion.div>

//       {/* Password Reset Modal */}
//       {showModal && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.4, ease: 'easeOut' }}
//             className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
//           >
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-[#0d4c3e] font-semibold">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { motion } from 'framer-motion';

// interface RegisterResponse {
//   message?: string;
// }

// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');
//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-br from-[#e8f5f1] to-[#f2fcf8] animate-float">
//       <Image
//         src="/w1.svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0 pointer-events-none"
//         priority
//       />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={500}
//           gravity={0.4}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.15)] overflow-hidden animate-float"
//       >
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="w-full lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 bg-[#eef4f3]/80 flex flex-col justify-center"
//         >
//           <h2 className="text-4xl font-extrabold text-[#0d4c3e] mb-2 bg-gradient-to-r from-[#0d4c3e] to-[#1f6f5b] bg-clip-text text-transparent animate-shimmer">
//             Sign Up
//           </h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {['name', 'email', 'password'].map((field) => (
//               <input
//                 key={field}
//                 id={field}
//                 type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
//                 placeholder={field[0].toUpperCase() + field.slice(1)}
//                 value={(formData as any)[field]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e] focus:shadow-glow transition-all duration-300"
//               />
//             ))}

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.4 }}
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed text-white'
//                   : 'bg-[#0d4c3e] text-white hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </motion.button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button onClick={() => setShowModal(true)} className="underline hover:text-[#0d4c3e] w-fit">
//               Forgot my password
//             </button>
//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="hidden lg:block w-1/2 relative"
//         >
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls
//                 autoRotate
//                 autoRotateSpeed={1}
//                 enableZoom={false}
//                 enablePan={false}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2.5}
//                 maxAzimuthAngle={Math.PI / 2}
//                 minAzimuthAngle={-Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </motion.div>
//       </motion.div>

//       {showModal && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.4, ease: 'easeOut' }}
//             className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
//           >
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-[#0d4c3e] font-semibold">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }
// 'use client';

// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { motion } from 'framer-motion';

// interface RegisterResponse {
//   message?: string;
// }

// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function SignUpPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
//   const [showModal, setShowModal] = useState(false);
//   const [resetEmail, setResetEmail] = useState('');
//   const [resetMsg, setResetMsg] = useState('');

//   useEffect(() => {
//     const updateSize = () => {
//       setWindowSize({ width: window.innerWidth, height: window.innerHeight });
//     };
//     updateSize();
//     window.addEventListener('resize', updateSize);
//     return () => window.removeEventListener('resize', updateSize);
//   }, []);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     setError('');
//     setSuccess('');

//     if (!formData.name || !formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     if (formData.password.length < 6) {
//       setError('Password must be at least 6 characters.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Name: formData.name,
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: RegisterResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Signup failed');

//       setSuccess('Account created successfully! Redirecting to login...');
//       setFormData({ name: '', email: '', password: '' });
//       setShowConfetti(true);
//       setTimeout(() => router.push('/login'), 3000);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleResetPassword = async () => {
//     setResetMsg('');
//     if (!resetEmail) {
//       setResetMsg('Please enter your email.');
//       return;
//     }

//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/forgot-password', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email: resetEmail }),
//       });

//       const data = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Reset failed');
//       setResetMsg('Password reset link sent to your email.');
//       setResetEmail('');
//     } catch (err) {
//       const errorMsg = err instanceof Error ? err.message : 'Error sending reset link.';
//       setResetMsg(errorMsg);
//     }
//   };

//   return (
//     <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden bg-gradient-to-br from-[#e8f5f1] to-[#f2fcf8] animate-float">
//       <Image
//         src="/w1.svg"
//         alt="Background"
//         fill
//         className="absolute inset-0 object-cover z-0 pointer-events-none"
//         priority
//       />

//       {showConfetti && (
//         <Confetti
//           width={windowSize.width}
//           height={windowSize.height}
//           numberOfPieces={500}
//           gravity={0.4}
//           wind={0.01}
//           recycle={false}
//         />
//       )}

//       <motion.div
//         initial={{ opacity: 0, y: 40 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1, ease: 'easeOut' }}
//         className="relative z-10 w-full max-w-5xl min-h-[500px] flex flex-col lg:flex-row rounded-[30px] bg-white/90 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.15)] overflow-hidden animate-float"
//       >
//         <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="w-full lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 bg-[#eef4f3]/80 flex flex-col justify-center"
//         >
//           <h2 className="text-4xl font-extrabold text-[#0d4c3e] mb-2 bg-gradient-to-r from-[#0d4c3e] to-[#1f6f5b] bg-clip-text text-transparent animate-shimmer">
//             Sign Up
//           </h2>
//           <p className="text-sm text-gray-600 mb-8">Create your account to get started</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {(['name', 'email', 'password'] as const).map((field) => (
//               <input
//                 key={field}
//                 id={field}
//                 type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
//                 placeholder={field[0].toUpperCase() + field.slice(1)}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e] focus:shadow-glow transition-all duration-300"
//               />
//             ))}

//             {loading && <p className="text-sm text-gray-600">Creating your account...</p>}
//             {error && <p className="text-red-500 text-sm text-center">{error}</p>}
//             {success && <p className="text-green-600 text-sm text-center">{success}</p>}

//             <motion.button
//               whileHover={{ scale: 1.03 }}
//               transition={{ duration: 0.4 }}
//               type="submit"
//               disabled={loading}
//               className={`w-full py-3 rounded-xl font-semibold transition-all duration-500 ${
//                 loading
//                   ? 'bg-gray-400 cursor-not-allowed text-white'
//                   : 'bg-[#0d4c3e] text-white hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
//               }`}
//             >
//               {loading ? 'Signing up...' : 'Sign Up'}
//             </motion.button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <button onClick={() => setShowModal(true)} className="underline hover:text-[#0d4c3e] w-fit">
//               Forgot my password
//             </button>
//             <Link href="/login" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Already have an account? Login
//             </Link>
//           </div>
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="hidden lg:block w-1/2 relative"
//         >
//           <div className="absolute inset-0">
//             <Canvas camera={{ position: [0, 0, 5], fov: 50 }} style={{ background: '#f9f9f9' }}>
//               <ambientLight intensity={0.7} />
//               <directionalLight position={[5, 5, 5]} intensity={1} />
//               <Suspense fallback={null}>
//                 <Model url="/room.glb" />
//               </Suspense>
//               <OrbitControls
//                 autoRotate
//                 autoRotateSpeed={1}
//                 enableZoom={false}
//                 enablePan={false}
//                 maxPolarAngle={Math.PI / 2}
//                 minPolarAngle={Math.PI / 2.5}
//                 maxAzimuthAngle={Math.PI / 2}
//                 minAzimuthAngle={-Math.PI / 2}
//               />
//             </Canvas>
//           </div>
//         </motion.div>
//       </motion.div>

//       {showModal && (
//         <motion.div
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
//         >
//           <motion.div
//             initial={{ scale: 0.9, opacity: 0 }}
//             animate={{ scale: 1, opacity: 1 }}
//             transition={{ duration: 0.4, ease: 'easeOut' }}
//             className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-md max-h-[90vh] overflow-y-auto"
//           >
//             <h3 className="text-xl font-semibold text-[#0d4c3e] mb-4">Reset Your Password</h3>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={resetEmail}
//               onChange={(e) => setResetEmail(e.target.value)}
//               className="w-full mb-4 px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e]"
//             />
//             {resetMsg && (
//               <p className={`text-sm mb-2 ${resetMsg.includes('sent') ? 'text-green-600' : 'text-red-500'}`}>
//                 {resetMsg}
//               </p>
//             )}
//             <div className="flex justify-end gap-3">
//               <button onClick={() => setShowModal(false)} className="text-gray-600 hover:text-[#0d4c3e] font-semibold">
//                 Cancel
//               </button>
//               <button
//                 onClick={handleResetPassword}
//                 className="bg-[#0d4c3e] text-white px-4 py-2 rounded-xl hover:bg-[#093b30] transition"
//               >
//                 Send Reset Link
//               </button>
//             </div>
//           </motion.div>
//         </motion.div>
//       )}
//     </div>
//   );
// }
'use client';
import { useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { motion } from 'framer-motion';
import React from 'react'; // Required for typing

interface RegisterResponse {
  message?: string;
}
export default function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      console.log(showConfetti , windowSize)
    };
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.name || !formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://api.virtualinteriordesign.click/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Name: formData.name,
          Email: formData.email,
          Password: formData.password,
        }),
      });

      const data: RegisterResponse = await res.json();
      if (!res.ok) throw new Error(data.message || 'Signup failed');

      setSuccess('Account created successfully! Redirecting to login...');
      setFormData({ name: '', email: '', password: '' });
      setShowConfetti(true);
      setTimeout(() => router.push('/login'), 3000);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
      setError(errorMessage);
    } finally {
      setLoading(false);
    }
  };
return (
  <div className="relative min-h-screen flex items-center justify-center px-4 py-8 overflow-hidden text-white">
    {/* الخلفية المتحركة */}
    <motion.div
      initial={{ scale: 1 }}
      animate={{ scale: 1.1 }}
      transition={{ duration: 15, repeat: Infinity, repeatType: 'reverse', ease: 'easeInOut' }}
      className="absolute inset-0 z-0"
    >
      <Image
        src="/bg-sign.jpg"
        alt="Signup Background"
        fill
        quality={100}
        className="object-cover pointer-events-none"
        priority
      />
    </motion.div>


    {/* ديف الفورم - في النص */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
      className="relative z-10 w-full max-w-lg rounded-[30px] bg-[#0d4c3e]/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.4)] px-6 sm:px-10 py-10 sm:py-14 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-extrabold text-white mb-2 text-center">Get Started</h2>
      <p className="text-sm text-gray-300 mb-8 text-center">Your Virtual Design Journey Starts Here</p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        {(['name', 'email', 'password'] as const).map((field) => (
          <input
            key={field}
            id={field}
            type={field === 'password' ? 'password' : field === 'email' ? 'email' : 'text'}
            placeholder={field[0].toUpperCase() + field.slice(1)}
            value={formData[field]}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl bg-transparent border-b border-gray-400 text-white placeholder-gray-300 focus:outline-none focus:border-white transition-all duration-300"
          />
        ))}

        {loading && <p className="text-sm text-gray-300">Creating your account...</p>}
        {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        {success && <p className="text-green-600 text-sm text-center">{success}</p>}

        <motion.button
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.4 }}
          type="submit"
          disabled={loading}
          className={`w-full py-3 rounded-xl font-semibold transition-all duration-500 ${
            loading
              ? 'bg-gray-400 cursor-not-allowed text-white'
              : 'bg-[#0d4c3e] text-white hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
          }`}
        >
          {loading ? 'Signing up...' : 'Sign Up'}
        </motion.button>
      </form>
      {/* <div className="text-sm text-gray-300 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0 text-center">
        <Link href="/login" className="font-semibold underline hover:text-white w-fit mx-auto">
          Already a Member ? Login
        </Link>
      </div> */}
      <p className="mt-6 text-sm text-center text-gray-300">
  Already a member?{' '}
  <Link href="/login" className="text-green-500 font-bold hover:underline">
    Log in here
  </Link>
</p>

    </motion.div>
  </div>
);
}
