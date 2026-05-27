// import LoginForm from "@/components/forms/LoginForm";

// export default function LoginPage() {
//   return (
//     <div>
//       <h1>Login</h1>

//       <LoginForm />
//     </div>
//   );
// }
import LoginForm from "@/components/forms/LoginForm";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6">
      <div className="w-full max-w-md rounded-3xl border border-red-500/10 bg-zinc-950 p-8 shadow-2xl">
        <h1 className="mb-2 text-3xl font-bold text-white">
          Welcome Back
        </h1>

        <p className="mb-8 text-sm text-gray-400">
          Login to continue your fitness journey.
        </p>

        <LoginForm />
      </div>
    </main>
  );
}