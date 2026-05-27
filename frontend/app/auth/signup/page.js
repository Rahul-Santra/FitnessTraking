// export default function SignupPage() {
//   return <div>Signup</div>;
// }
import SignupForm from "@/components/forms/SignupForm";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-red-500/10 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Create Account
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Start your personalized fitness journey.
        </p>

        <SignupForm />
      </div>
    </main>
  );
}