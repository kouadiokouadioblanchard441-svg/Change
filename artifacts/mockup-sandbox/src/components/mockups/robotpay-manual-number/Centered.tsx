import { Copy } from "lucide-react";
import "./_group.css";

const paymentPhone = "73127420";

export function Centered() {
  return (
    <main className="min-h-screen bg-white p-5 font-sans">
      <div className="mx-auto flex min-h-screen w-full max-w-md items-center">
        <section
          aria-label="Numéro de paiement"
          className="w-full rounded-2xl border-2 border-[#14538a] bg-[#f7fbff] p-3 shadow-[0_4px_14px_rgba(20,83,138,0.16)]"
        >
          <div className="mb-3 flex flex-col items-center border-b border-[#d7e3ef] pb-2.5 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-slate-500">
              Numéro de paiement
            </p>
            <p className="mt-0.5 text-sm font-bold text-[#14538a]">Togocel</p>
          </div>
          <div className="flex min-h-12 items-center justify-center rounded-xl border-2 border-[#14538a] bg-white px-3 py-2 shadow-inner">
            <p className="break-all text-center font-mono text-xl font-bold tabular-nums tracking-[0.08em] text-[#17324d]">
              {paymentPhone}
            </p>
          </div>
          <button
            type="button"
            onClick={() => navigator.clipboard.writeText(paymentPhone)}
            aria-label={`Copier le numéro ${paymentPhone}`}
            className="mx-auto mt-3 flex h-10 min-w-28 items-center justify-center gap-2 rounded-lg border-2 border-[#14538a] bg-[#14538a] px-4 text-xs font-bold text-white shadow-sm transition hover:bg-[#104674] active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8fc4d8] focus-visible:ring-offset-2"
          >
            <Copy aria-hidden="true" className="h-4 w-4" /> Copier
          </button>
        </section>
      </div>
    </main>
  );
}