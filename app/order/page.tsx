"use client";

const WHATSAPP_NUMBER = "6281234567890";
const DEFAULT_MESSAGE =
  "Halo, saya mau pesan website. Boleh minta info paket dan harganya?";

export default function OrderPage() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    DEFAULT_MESSAGE,
  )}`;

  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <section className="w-full max-w-xl rounded-2xl border border-white/20 bg-white/10 p-8 text-center">
        <h1 className="text-2xl font-bold">Pesan Website</h1>
        <p className="mt-3 text-sm text-white/80">
          Klik tombol di bawah untuk chat WhatsApp dan langsung pesan website
          buatan kamu.
        </p>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-6 inline-flex items-center justify-center rounded-lg bg-green-500 px-6 py-3 text-sm font-semibold text-black transition hover:bg-green-400"
        >
          Chat via WhatsApp
        </a>

        <p className="mt-4 text-xs text-white/60">
          Ubah nomor WhatsApp di file <code>app/order/page.tsx</code>.
        </p>
      </section>
    </main>
  );
}
