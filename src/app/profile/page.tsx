import Link from "next/link";
import { auth0 } from "../../lib/auth0";

export default async function ProfilePage() {
  const session = await auth0.getSession();

  if (!session?.user) {
    return (
      <main className="min-h-screen text-white px-4 py-6 pb-safe" style={{ background: "linear-gradient(180deg, #002327 0%, #004047 44.22%, #00818d 84.87%, #00a6b5 100%)" }}>
        <div className="w-full max-w-md mx-auto bg-white border border-[#E2E8F0] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 text-center">
          <h1 className="text-xl font-bold mb-2">You're not logged in</h1>
          <p className="text-[#64748B] mb-4">Please log in to view your profile.</p>
          <div className="flex flex-col gap-3">
            <Link href="/login" className="w-full rounded-[6px] bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 transition-colors">Log In</Link>
            <a href="/auth/login?screen_hint=signup" className="w-full rounded-[6px] border border-[#3B82F6] text-[#3B82F6] hover:bg-slate-50 font-semibold py-3 transition-colors">Create an account</a>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen text-white px-4 py-6 pb-safe" style={{ background: "linear-gradient(180deg, #002327 0%, #004047 44.22%, #00818d 84.87%, #00a6b5 100%)" }}>
      <div className="w-full max-w-lg mx-auto bg-white border border-[#E2E8F0] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6">
        <div className="text-center mb-4">
          <span className="inline-block text-2xl font-extrabold tracking-tight text-cyan-300">TradersPool</span>
          <h1 className="mt-1 text-lg font-bold text-[#0F172A]">My Profile</h1>
        </div>
        <div className="rounded-[6px] bg-[#F8FAFC] border border-[#E2E8F0] p-3 text-sm text-[#0F172A]">
          <pre className="whitespace-pre-wrap break-all">{JSON.stringify(session.user, null, 2)}</pre>
        </div>
        <div className="mt-4">
          <a href="/auth/logout" className="w-full block rounded-[6px] border border-[#E2E8F0] text-[#0F172A] hover:bg-slate-50 font-semibold py-3 text-center">Log out</a>
        </div>
      </div>
    </main>
  );
}
