import ResetPasswordForm from "@/components/forms/ResetPasswordForm";

export default function ResetPasswordPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-red-500/10 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Reset Password
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Create your new password.
        </p>

        <ResetPasswordForm />
      </div>
    </main>
  );
}