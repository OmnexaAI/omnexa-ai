export default function LoginPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="w-full max-w-md border border-gray-800 rounded-2xl p-8">
        <h1 className="text-3xl font-bold mb-6">
          Welcome Back
        </h1>

        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 bg-gray-900 rounded-xl"
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 bg-gray-900 rounded-xl"
        />

        <button className="w-full bg-white text-black py-3 rounded-xl font-semibold">
          Login
        </button>
      </div>
    </main>
  );
}