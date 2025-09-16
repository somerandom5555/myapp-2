"use client";

'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((p) => ({ ...p, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.location.href = '/auth/login?screen_hint=signup'
  }

  return (
    <main className="min-h-[80vh] lg:h-[calc(100vh-72px)] text-white flex items-stretch px-4 py-6 mobile:py-8 lg:py-4 overflow-hidden pb-safe" style={{ background: "linear-gradient(180deg, #002327 0%, #004047 44.22%, #00818d 84.87%, #00a6b5 100%)" }}>
      <div className="mx-auto w-full max-w-6xl grid gap-10 lg:grid-cols-2 items-center">
        {/* Left content */}
        <section className="order-2 lg:order-1 hidden sm:block">
          <h2 className="text-3xl font-bold text-white mb-4">Join TradersPool</h2>
          <p className="text-neutral-200 mb-3">Premium trading tools, secure access, and a seamless dashboard experience.</p>
          <ul className="list-disc pl-5 space-y-2 text-neutral-300 mb-6">
            <li>Elite market insights and premium trading signals</li>
            <li>Fast setup and simple account management</li>
            <li>Reliable support and transparent pricing</li>
          </ul>
          <div className="hidden">
            {/* Award/brand logos (40px height) */}
            <div className="h-10 flex items-center">
              <svg width="120" height="40" viewBox="0 0 120 40" aria-label="TechRadar" className="opacity-90"><rect width="120" height="40" rx="6" fill="#005670"/><text x="12" y="26" fill="white" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial">TechRadar</text></svg>
            </div>
            <div className="h-10 flex items-center">
              <svg width="120" height="40" viewBox="0 0 120 40" aria-label="Trustpilot" className="opacity-90"><rect width="120" height="40" rx="6" fill="#00B67A"/><g><polygon points="20,8 23,16 31,16 24.5,21 27,29 20,24 13,29 15.5,21 9,16 17,16" fill="#FFD700"/></g><text x="44" y="26" fill="white" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial">Trustpilot</text></svg>
            </div>
            <div className="h-10 flex items-center">
              <svg width="100" height="40" viewBox="0 0 100 40" aria-label="CNBC" className="opacity-90"><rect width="100" height="40" rx="6" fill="#E21A23"/><text x="18" y="26" fill="white" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial">CNBC</text></svg>
            </div>
            <div className="h-10 flex items-center">
              <svg width="100" height="40" viewBox="0 0 100 40" aria-label="PCMag" className="opacity-90"><rect width="100" height="40" rx="6" fill="#0066CC"/><text x="16" y="26" fill="white" fontSize="16" fontWeight="700" fontFamily="-apple-system,BlinkMacSystemFont,Segoe UI,Inter,Arial">PCMag</text></svg>
            </div>
          </div>
        </section>

        {/* Right form */}
        <section className="order-1 lg:order-2 w-full max-w-md justify-self-center">
          <div className="text-center mb-4">
            <Link href="/" className="inline-block text-[1.75rem] font-extrabold tracking-tight text-cyan-300">TradersPool</Link>
            <h1 className="mt-1 text-[1.25rem] font-bold text-white">Create your account</h1>
          </div>
          <div className="bg-white border border-[#E2E8F0] rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] p-6 lg:p-5">
            <form onSubmit={handleSubmit} className="space-y-3 lg:space-y-2.5">
              <button type="submit" className="w-full rounded-[6px] bg-[#3B82F6] hover:bg-[#2563EB] text-white font-bold py-3 transition-colors">Sign Up</button>

              <div className="flex items-center gap-3">
                <div className="h-px bg-[#E2E8F0] flex-1" />
                <span className="text-sm text-[#64748B]">Or continue with Gmail</span>
                <div className="h-px bg-[#E2E8F0] flex-1" />
              </div>

              <div className="grid grid-cols-1 gap-3">
                <a href="/auth/login?connection=google-oauth2" className="inline-flex items-center justify-center gap-2 rounded-[6px] border border-[#4285F4] bg-white px-4 py-3 text-sm font-medium text-[#4285F4] hover:bg-slate-50">
                  <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true"><path fill="#4285F4" d="M21.35 11.1h-9.18v2.98h5.27c-.23 1.5-1.59 4.4-5.27 4.4-3.17 0-5.76-2.62-5.76-5.85s2.6-5.85 5.76-5.85c1.81 0 3.03.77 3.73 1.44l2.54-2.45C17.19 4.26 15.12 3.3 12.17 3.3 6.99 3.3 2.8 7.49 2.8 12.63s4.19 9.33 9.37 9.33c5.41 0 8.97-3.79 8.97-9.14 0-.61-.06-1.07-.16-1.72z"/></svg>
                  Continue with Gmail
                </a>
              </div>

              <div className="rounded-[6px] border border-[#E2E8F0] bg-white/60 backdrop-blur-sm p-3 text-center">
                <p className="text-xs text-[#64748B] mb-2">Already have an account?</p>
                <a href="/auth/login" className="inline-flex items-center justify-center rounded-[6px] bg-[#0F172A] text-white px-4 py-2 text-xs font-medium hover:bg-black/90">Log In</a>
              </div>
            </form>
          </div>

          <p className="text-center text-[10px] text-neutral-300 mt-4">© 2015 TradersPool. All rights reserved.</p>
          <div className="mt-1 flex items-center justify-center gap-1.5" aria-label="Social links">
            <a href="https://wa.me/18632101640?text=Hello%20from%20your%20site" target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center hover:opacity-90" aria-label="WhatsApp">
              <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884"/></svg>
            </a>
            <a href="https://discord.gg/Yc7dVvGV" target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full bg-[#5865F2] flex items-center justify-center hover:opacity-90" aria-label="Discord">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M19.54 5.34A17.5 17.5 0 0 0 15.89 4l-.18.32c1.76.54 2.7 1.34 2.7 1.34-1.18-.61-2.32-.93-3.41-1.05a12.38 12.38 0 0 0-2.32 0C11.6 4.04 10.46 4.36 9.28 4.97c0 0 .94-.8 2.7-1.34L11.8 4A17.5 17.5 0 0 0 8.16 5.34C4.9 10.06 5.7 14.65 5.7 14.65a9.1 9.1 0 0 0 3.2 1.6l.66-.9c-1.16-.35-2.03-1.08-2.03-1.08l.32.18c.02.01.03.02.05.03 0 0 .02 0 .02.02 1.28.71 2.68 1.14 4.19 1.14s2.91-.43 4.19-1.14h.02l.07-.05s-.86.74-2.03 1.08l.66.9a9.1 9.1 0 0 0 3.2-1.6s.8-4.59-2.46-9.31ZM9.85 12.8c-.65 0-1.19-.6-1.19-1.33 0-.73.52-1.33 1.19-1.33.67 0 1.21.6 1.19 1.33 0 .73-.52 1.33-1.19 1.33Zm4.3 0c-.65 0-1.19-.6-1.19-1.33 0-.73.52-1.33 1.19-1.33s1.19.6 1.19 1.33c0 .73-.52 1.33-1.19 1.33Z"/></svg>
            </a>
            <a href="https://t.me/+16673164844" target="_blank" rel="noopener noreferrer" className="w-5 h-5 rounded-full bg-[#26A5E4] flex items-center justify-center hover:opacity-90" aria-label="Telegram">
              <svg className="w-2.5 h-2.5 text-white" viewBox="0 0 24 24" fill="currentColor"><path d="M23.91 3.79L20.3 20.84c-.25 1.21-.98 1.5-2 .94l-5.5-4.07-2.66 2.57c-.3.3-.55.55-1.1.55-.72 0-.6-.27-.84-.95L6.3 13.7l-5.45-1.7c-1.18-.35-1.19-1.16.26-1.75l21.26-8.2c.97-.43 1.9.24 1.53 1.73z"/></svg>
            </a>
          </div>
        </section>
      </div>
    </main>
  )
}
