"use client";

import { Lock } from "lucide-react";

export default function ResetPasswordForm() {
  return (
    <form className="space-y-6">
      <div>
        <label className="mb-2 block text-sm text-gray-300">
          New Password
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <Lock size={18} className="text-red-500" />

          <input
            type="password"
            placeholder="Enter new password"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm text-gray-300">
          Confirm Password
        </label>

        <div className="flex items-center rounded-xl border border-red-500/20 bg-zinc-900 px-4">
          <Lock size={18} className="text-red-500" />

          <input
            type="password"
            placeholder="Confirm password"
            className="w-full bg-transparent px-3 py-4 text-sm text-white outline-none"
          />
        </div>
      </div>

      <button className="w-full rounded-xl bg-red-600 py-4 font-semibold text-white transition hover:bg-red-700">
        Reset Password
      </button>
    </form>
  );
}