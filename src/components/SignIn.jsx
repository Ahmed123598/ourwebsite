// // src/components/SignIn.jsx
// import { Link } from 'react-router-dom';

// const SignIn = () => {
//   return (
//     <div className="flex items-center justify-center min-h-[calc(100vh-80px)]">
//       <div className="bg-neutral-800 border border-neutral-700 p-8 rounded-xl max-w-md w-full">
//         <h2 className="text-3xl mb-6 text-center">Sign In to Your Account</h2>
//         <form>
//           <div className="mb-4">
//             <label htmlFor="email" className="block mb-2">Email</label>
//             <input
//               type="email"
//               id="email"
//               className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="you@example.com"
//             />
//           </div>
//           <div className="mb-6">
//             <label htmlFor="password" className="block mb-2">Password</label>
//             <input
//               type="password"
//               id="password"
//               className="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
//               placeholder="••••••••"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-orange-500 to-orange-800 py-2 rounded-md hover:opacity-90 transition"
//           >
//             Sign In
//           </button>
//         </form>
//         <div className="mt-6 text-center">
//           <p className="text-neutral-400">
//             Don't have an account?{' '}
//             <Link to="/" className="text-orange-500 hover:underline">
//               Contact me
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;