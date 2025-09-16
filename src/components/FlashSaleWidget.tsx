"use client";
import React, { useEffect, useState } from "react";
import { Zap, Clock } from "lucide-react";
import Link from "next/link";

export default function FlashSaleWidget() {
  // Offer end date synced with CombinedFlashSaleBanner (25 Sept 2025)
  const [offerEnds] = useState<Date>(() => new Date('2025-09-25T23:59:59'));
  const [open, setOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<string>("");

  useEffect(() => {
    function update() {
      const now = new Date();
      const diff = offerEnds.getTime() - now.getTime();
      if (diff <= 0) {
        setTimeLeft("Expired");
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
    }
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, [offerEnds]);

  return (
    <div className="fixed right-6 z-[62]"
      // position the widget above the HelpWidget (which uses bottom-20)
      style={{ bottom: open ? 220 : 140 }}
    >
      {/* Compact badge/button */}
      <div className="flex flex-col items-end">
        <button
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-semibold shadow-xl border border-yellow-300/60 hover:scale-[1.02] transition-transform"
        >
          <Zap className="w-5 h-5" />
          <span className="text-sm">Flash Sale</span>
        </button>

        {/* Expanded panel */}
        {open && (
          <div className="mt-3 w-80 max-w-[90vw] p-4 rounded-xl bg-[#0b0b0e]/95 backdrop-blur border border-white/10 shadow-2xl text-white">
            <div className="flex items-center justify-between gap-3 mb-2">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-md bg-yellow-500/20 border border-yellow-400/30">
                  <Zap className="w-5 h-5 text-yellow-300" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold">Thunder Flash Sale</h4>
                  <p className="text-xs text-neutral-300">Unlock 120+ Trading Channels (Diamond Plan)</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-bold">$400</div>
                <div className="text-xs text-neutral-400">one-time / yearly</div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-neutral-300 mb-3">
              <Clock className="w-4 h-4 text-neutral-400" />
              <span>Offer ends in {timeLeft}</span>
            </div>

            <div className="flex gap-2">
              <Link href="/signal-premium" className="flex-1 inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md bg-gradient-to-r from-yellow-400 to-orange-400 text-black font-medium shadow-md hover:scale-[1.01] transition-transform">
                Unlock Now
              </Link>
              <button onClick={() => setOpen(false)} className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-sm">
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
