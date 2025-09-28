// 'use client';
// import { useEffect, useState, Suspense } from 'react';
// import Image from 'next/image';
// import Link from 'next/link';
// import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
// import { motion } from 'framer-motion';

// interface LoginResponse {
//   message?: string;
//   token?: string;
// }

// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

// export default function LoginPage() {
//   const router = useRouter();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState('');
//   const [showConfetti, setShowConfetti] = useState(false);
//   const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

//   useEffect(() => {
//     const token = localStorage.getItem('token');
//     if (token && window.location.pathname === '/login') {
//       router.replace('/');
//     }
//   }, [router]);

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

//     if (!formData.email || !formData.password) {
//       setError('Please fill in all fields.');
//       return;
//     }

//     setLoading(true);
//     try {
//       const res = await fetch('http://13.48.25.101:8000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           Email: formData.email,
//           Password: formData.password,
//         }),
//       });

//       const data: LoginResponse = await res.json();
//       if (!res.ok) throw new Error(data.message || 'Login failed');

//       localStorage.setItem('token', data.token || '');
//       window.dispatchEvent(new Event('storage'));

//       setSuccess('Login successful! Redirecting...');
//       setShowConfetti(true);

//       setTimeout(() => {
//         router.push('/');
//         location.reload();
//       }, 500);
//     } catch (err) {
//       const errorMessage = err instanceof Error ? err.message : 'Something went wrong.';
//       setError(errorMessage);
//     } finally {
//       setLoading(false);
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
//           numberOfPieces={400}
//           gravity={0.3}
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
//         {/* Left Form Side */}
//         {/* <motion.div
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//           className="w-full lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 bg-[#eef4f3]/80 flex flex-col justify-center"
//         >
//           <h2 className="text-4xl font-extrabold text-[#0d4c3e] mb-2 bg-gradient-to-r from-[#0d4c3e] to-[#1f6f5b] bg-clip-text text-transparent animate-shimmer">
//             Login
//           </h2>
//           <p className="text-sm text-gray-600 mb-8">Welcome back! Log into your account.</p>

//           <form className="space-y-5" onSubmit={handleSubmit}>
//             {(['email', 'password'] as const).map((field) => (
//               <input
//                 key={field}
//                 id={field}
//                 type={field === 'password' ? 'password' : 'email'}
//                 placeholder={field[0].toUpperCase() + field.slice(1)}
//                 value={formData[field]}
//                 onChange={handleChange}
//                 required
//                 className="w-full px-4 py-3 rounded-xl bg-white border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e] focus:shadow-glow transition-all duration-300"
//               />
//             ))}

//             {loading && <p className="text-sm text-gray-600">Logging in...</p>}
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
//               {loading ? 'Logging in...' : 'Login'}
//             </motion.button>
//           </form>

//           <div className="text-sm text-gray-600 mt-6 flex flex-col sm:flex-row justify-between gap-3 sm:gap-0">
//             <Link href="/signup" className="font-semibold underline hover:text-[#0d4c3e] w-fit">
//               Don&apos;t have an account? Sign Up
//             </Link>
//           </div>
//         </motion.div> */}
// {/* Left Form Side */}
// <motion.div
//   initial={{ opacity: 0, x: -30 }}
//   animate={{ opacity: 1, x: 0 }}
//   transition={{ delay: 0.3, duration: 1, ease: 'easeOut' }}
//   className="w-full lg:w-1/2 px-6 sm:px-10 py-10 sm:py-14 flex flex-col justify-center"
// >
//   {/* Logo */}
//   <div className="mb-8">
//     <Image src="/virtual-reality.png" alt="Logo" width={50} height={50} />
//   </div>

//   <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back</h2>
//   <p className="text-sm text-gray-600 mb-6">Please enter your details</p>

//   <form className="space-y-4" onSubmit={handleSubmit}>
//     <div>
//       <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//         Email address
//       </label>
//       <input
//         id="email"
//         type="email"
//         value={formData.email}
//         onChange={handleChange}
//         className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
//         required
//       />
//     </div>

//     <div>
//       <label htmlFor="password" className="block text-sm font-medium text-gray-700">
//         Password
//       </label>
//       <input
//         id="password"
//         type="password"
//         value={formData.password}
//         onChange={handleChange}
//         className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
//         required
//       />
//     </div>

//     <div className="flex items-center justify-between text-sm text-gray-600">
//       <label className="flex items-center">
//         <input type="checkbox" className="mr-2" />
//         Remember for 30 days
//       </label>
//       <Link href="#" className="text-purple-600 hover:underline">
//         Forgot password
//       </Link>
//     </div>

//        <motion.button
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
//               {loading ? 'Logging in...' : 'Login'}
//             </motion.button>

//     <button
//       type="button"
//       className="w-full py-2 px-4 border border-gray-300 flex items-center justify-center rounded-md mt-2"
//     >
//       <Image src="/google.svg" alt="Google" width={20} height={20} className="mr-2" />
//       Sign in with Google
//     </button>
//   </form>

//   <p className="mt-6 text-sm text-center text-gray-600">
//     Don’t have an account?{' '}
//     <Link href="/signup" className="text-purple-600 hover:underline font-semibold">
//       Sign up
//     </Link>
//   </p>
// </motion.div>

//         {/* Right 3D Model Side */}
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
//     </div>
//   );
// }


'use client';
import { useEffect, useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
// import Confetti from 'react-confetti';
// import { Canvas } from '@react-three/fiber';
// import { OrbitControls, useGLTF } from '@react-three/drei';
import { motion } from 'framer-motion';
// import { signIn } from "next-auth/react";

interface LoginResponse {
  message?: string;
  token?: string;
}

// function Model({ url }: { url: string }) {
//   const { scene } = useGLTF(url);
//   return <primitive object={scene} scale={1.5} />;
// }
// useGLTF.preload('/room.glb');

export default function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // const [ setShowConfetti] = useState(false);
  // const [windowSize , setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token && window.location.pathname === '/login') {
      router.replace('/');
    }
  }, [router]);

  // useEffect(() => {
  //   const updateSize = () => {
  //     setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  //   };
  //   updateSize();
  //   window.addEventListener('resize', updateSize);
  //   return () => window.removeEventListener('resize', updateSize);
  // }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!formData.email || !formData.password) {
      setError('Please fill in all fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('https://api.virtualinteriordesign.click/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          Email: formData.email,
          Password: formData.password,
        }),
      });

      const data: LoginResponse = await res.json();
      if (!res.ok) throw new Error(data.message || 'Login failed');

      localStorage.setItem('token', data.token || '');
      localStorage.setItem('userEmail', formData.email);
      window.dispatchEvent(new Event('storage'));

      setSuccess('Login successful! Redirecting...');
      // setShowConfetti(true);

      setTimeout(() => {
        router.push('/');
        // location.reload();
      }, 500);
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
      src="/background.jpg"
      alt="Login Background"
      fill
      quality={100}
      className="object-cover"
      priority
    />
  </motion.div>

  {/* ديف الفورم - وسط الشاشة */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className="relative z-10 w-full max-w-lg p-10 rounded-[30px] bg-[#0d4c3e]/30 backdrop-blur-md shadow-[0_0_30px_rgba(0,0,0,0.15)]"
  >
  <div className="px-6 sm:px-10 py-10 sm:py-14 flex flex-col justify-center">
<motion.h2
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, ease: 'easeOut' }}
  className="text-3xl font-bold text-white mb-2"
>
  Welcome back to{' '}
  <span className="italic text-[#00ffb3] font-extrabold tracking-wide">VidAR</span>
</motion.h2>



  <motion.p
    initial={{ opacity: 0, y: -10 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
    className="text-sm text-gray-300 mb-6"
  >
    Design your dream room with AR magic.
  </motion.p>

  <form className="space-y-5" onSubmit={handleSubmit}>
    {/* Email Input */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
        Email address :
      </label>
      <input
        id="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Enter your email"
        className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e] transition duration-300"
        required
      />
    </motion.div>

    {/* Password Input */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
        Password :
      </label>
      <input
        id="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Enter your password"
        className="w-full px-4 py-3 bg-transparent border border-gray-500 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d4c3e] transition duration-300"
        required
      />
    </motion.div>

    {/* Remember & Forgot */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 }}
      className="flex items-center justify-between text-sm text-gray-300"
    >
      <label className="flex items-center">
        <input type="checkbox" className="mr-2" />
        Remember for 30 days
      </label>
      <Link href="/forgot-password" className="text-green-500 font-bold hover:underline">
        Forgot password
      </Link>
    </motion.div>

    {/* Error / Success Messages */}
    {error && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-red-500 font-bold text-sm text-center"
      >
        {error}
      </motion.p>
    )}
    {success && (
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-green-600 font-bold text-sm text-center"
      >
        {success}
      </motion.p>
    )}

    {/* Submit Button */}
    <motion.button
      whileHover={{ scale: loading ? 1 : 1.03 }}
      transition={{ duration: 0.4 }}
      type="submit"
      disabled={loading}
      className={`w-full py-3 rounded-xl font-semibold transition-all duration-500 ${
        loading
          ? 'bg-gray-400 cursor-not-allowed text-white'
          : 'bg-[#0d4c3e] text-white hover:bg-[#093b30] shadow-[0_0_12px_#0d4c3e80] hover:shadow-[0_0_20px_#0d4c3eff]'
      }`}
    >
      {loading ? 'Logging in...' : 'Login'}
    </motion.button>
  </form>

  {/* Signup Prompt */}
  <motion.p
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.6, duration: 0.6 }}
    className="mt-6 text-sm text-center text-gray-300"
  >
    Don’t have an account?{' '}
    <Link href="/signup" className="text-green-500 font-bold hover:underline">
      Sign up
    </Link>
  </motion.p>
</div>

  </motion.div>
</div>

  );
}
