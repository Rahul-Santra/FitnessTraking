"use client";

import Link from "next/link";
import { Mail, Lock } from "lucide-react";

export default function LoginForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Email
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <Mail size={18} className="text-red-500" />

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Password
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <Lock size={18} className="text-red-500" />

          <input
            type="password"
            placeholder="Enter your password"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <div className="flex items-center justify-between">
        <label className="flex items-center gap-2 text-sm text-gray-400">
          <input type="checkbox" />
          Remember me
        </label>

        <Link
          href="/auth/forgot-password"
          className="text-sm text-red-500 hover:text-red-400"
        >
          Forgot Password?
        </Link>
      </div>

      <button className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700">
        Login
      </button>

      <p className="text-center text-sm text-gray-400">
        Don&apos;t have an account?{" "}
        <Link
          href="/auth/signup"
          className="text-red-500 hover:text-red-400"
        >
          Signup
        </Link>
      </p>
    </form>
  );
}


// export default function LoginForm() {
//   return (
//     <form>
//       <input type="email" />
//       <input type="password" />

//       <button>Login</button>
//     </form>
//   );
// }