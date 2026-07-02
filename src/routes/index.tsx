import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import coverImg from "@/assets/ebook-cover.webp";
import pattern1 from "@/assets/pattern-1.webp";
import pattern2 from "@/assets/pattern-2.webp";
import pattern3 from "@/assets/pattern-3.webp";
import pattern4 from "@/assets/pattern-4.webp";
import devicesImg from "@/assets/devices.webp";
import badgeEmail from "@/assets/badge-email.webp";
import badgeLifetime from "@/assets/badge-lifetime.webp";
import insideVideo from "@/assets/por-dentro.mp4";
import testimonialsImg from "@/assets/testimonials.webp";
import testiFacebook1 from "@/assets/testi-facebook-1.jpg";
import testiFacebook2 from "@/assets/testi-facebook-2.jpg";
import testiWhatsapp from "@/assets/testi-whatsapp.jpg";
import bonus1 from "@/assets/bonus-1.webp";
import bonus2 from "@/assets/bonus-2.webp";
import bonus3 from "@/assets/bonus-3.webp";
import offerBookImg from "@/assets/offer-book.webp";
import paymentsImg from "@/assets/payments.webp";
import more1 from "@/assets/more-1.webp";
import more2 from "@/assets/more-2.webp";
import more3 from "@/assets/more-3.webp";
import more4 from "@/assets/more-4.webp";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "eBook +60 Patrones de Mascotas Amigurumi en Español" },
      { name: "description", content: "Crea adorables mascotas amigurumi con más de 60 patrones exclusivos en español. ¡Solo por hoy con 70% de descuento!" },
      { property: "og:title", content: "eBook +60 Patrones de Mascotas Amigurumi" },
      { property: "og:description", content: "Más de 60 patrones exclusivos de mascotas en español. ¡70% de descuento hoy!" },
    ],
  }),
  component: Index,
});

const CHECKOUT_URL = "https://go.hotmart.com/Q106494710B?ap=c22b";

const IMG = {
  cover: coverImg,
  patterns: [pattern1, pattern2, pattern3, pattern4],
  devices: devicesImg,
  emailBadge: badgeEmail,
  lifetimeBadge: badgeLifetime,
  insideVideo: insideVideo,
  testimonials: testimonialsImg,
  bonuses: [bonus1, bonus2, bonus3],
  offerBook: offerBookImg,
  payments: paymentsImg,
  morePatterns: [more1, more2, more3, more4],
};

const FAQS = [
  {
    q: "¿Los patrones son en español?",
    a: "Todos los patrones que veras en este ebook estan completamente en español con abreviaturas faciles de leer.",
  },
  {
    q: "¿Los patrones tiene los materiales, hilos y agujas que debo utilizar?",
    a: "Cada patrón menciona que materiales debes de usar para su elaboración y el acabado.",
  },
  {
    q: "¿La compra es segura?",
    a: "La compra es 100% segura. Nuestro ebook se encuentra alojado en la plataforma educativa de Hotmart, una empresa de productos digitales 100% confiable.",
  },
  {
    q: "¿En donde me llegara el ebook?",
    a: "Recibirá su comprobante de pago como también un correo electrónico para acceder directamente al ebook.",
  },
];

function CoralBand({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full bg-[#f4a08c] py-6 px-4">
      <h2 className="text-center font-extrabold text-white tracking-wide text-2xl md:text-4xl uppercase max-w-5xl mx-auto leading-tight">
        {children}
      </h2>
    </div>
  );
}

function CTAButton({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <a
        href={CHECKOUT_URL}
        target="_blank"
        rel="noreferrer"
        className="inline-block bg-[#7ed957] hover:bg-[#6dc847] transition-colors text-white font-extrabold text-lg md:text-xl px-10 py-4 rounded-full shadow-[0_6px_0_rgba(0,0,0,0.12)] uppercase tracking-wide text-center animate-pulse-cta"
      >
        {children}
      </a>
      <p className="text-xs text-gray-600 font-medium flex items-center justify-center gap-1.5">
        <span>🔒 Pago 100% seguro y encriptado</span>
        <span>•</span>
        <span>🛡️ Garantía de 7 días</span>
      </p>
    </div>
  );
}

function Countdown() {
  const [t, setT] = useState({ h: 8, m: 9, s: 57 });
  useEffect(() => {
    const id = setInterval(() => {
      setT((p: { h: number; m: number; s: number }) => {
        let { h, m, s } = p;
        s -= 1;
        if (s < 0) {
          s = 59;
          m -= 1;
        }
        if (m < 0) {
          m = 59;
          h -= 1;
        }
        if (h < 0) {
          h = 0;
          m = 0;
          s = 0;
        }
        return { h, m, s };
      });
    }, 1000);
    return () => clearInterval(id);
  }, []);
  const pad = (n: number) => n.toString().padStart(2, "0");
  return (
    <div className="flex justify-center gap-6 md:gap-10 mt-4">
      {[
        { v: pad(t.h), l: "HORAS" },
        { v: pad(t.m), l: "MINUTOS" },
        { v: pad(t.s), l: "SEGUNDOS" },
      ].map((it) => (
        <div key={it.l} className="text-center">
          <div className="text-4xl md:text-5xl font-extrabold text-[#e63946]">{it.v}</div>
          <div className="text-xs md:text-sm font-semibold text-[#222] tracking-widest mt-1">
            {it.l}
          </div>
        </div>
      ))}
    </div>
  );
}

const FOMO_MESSAGES = [
  { icon: "🛒", text: "Valentina de Colombia acaba de adquirir este ebook" },
  { icon: "👀", text: "23 personas están viendo esta página ahora mismo" },
  { icon: "⭐", text: "Mariana de México acaba de comprar y dejó 5 estrellas" },
  { icon: "🔥", text: "142 personas se han interesado en este producto hoy" },
  { icon: "🛒", text: "Lucía de Argentina acaba de adquirir este ebook" },
  { icon: "⚡", text: "Quedan pocas unidades al precio de descuento" },
  { icon: "👀", text: "31 personas están viendo esta oferta en este momento" },
  { icon: "🛒", text: "Gabriela de Perú acabó de comprar hace 2 minutos" },
  { icon: "🔥", text: "87 emprendedoras ya se unieron hoy" },
  { icon: "🛒", text: "Daniela de Chile acaba de adquirir este ebook" },
  { icon: "💬", text: "Ana de Venezuela dejó una reseña de 5 estrellas" },
  { icon: "🛒", text: "Sofía de Ecuador acaba de adquirir este ebook" },
  { icon: "👀", text: "18 personas están mirando esta oferta ahora mismo" },
  { icon: "🔥", text: "213 personas vieron esta página hoy" },
  { icon: "🛒", text: "Camila de Bolivia compró hace menos de 5 minutos" },
  { icon: "⭐", text: "Carolina de Uruguay dijo: ¡los patrones son increíbles!" },
  { icon: "⚡", text: "Solo por hoy: 70% de descuento activo" },
  { icon: "🛒", text: "Isabella de Paraguay acaba de adquirir este ebook" },
  { icon: "👀", text: "27 personas están leyendo esta página en este momento" },
  { icon: "🔥", text: "56 emprendedoras compraron este ebook esta semana" },
  { icon: "🛒", text: "Fernanda de Guatemala acabó de comprar" },
  { icon: "💬", text: "Paola de Costa Rica: ¡Lo recomiendo 100%!" },
  { icon: "🛒", text: "Andrea de República Dominicana acaba de unirse" },
  { icon: "⚡", text: "Esta oferta vence pronto — ¡no te quedes sin ella!" },
  { icon: "👀", text: "41 personas tienen este ebook en mente ahora mismo" },
  { icon: "🛒", text: "Natalia de Honduras acaba de adquirir este ebook" },
  { icon: "🔥", text: "189 personas han visitado esta página hoy" },
  { icon: "🛒", text: "Alejandra de Panamá compró hace un momento" },
];

function FomoNotification() {
  const [visible, setVisible] = useState(false);
  const [idx, setIdx] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    // First notification after 12s (user has time to start reading first)
    const firstTimer = setTimeout(() => showNext(0), 12000);
    return () => clearTimeout(firstTimer);
  }, []);

  function showNext(i: number) {
    setIdx(i);
    setAnimating(true);
    setVisible(true);
    // Stay visible 5s
    setTimeout(() => {
      setAnimating(false);
      setTimeout(() => {
        setVisible(false);
        // 20s gap before next — feels natural, not spammy
        const next = (i + 1) % FOMO_MESSAGES.length;
        setTimeout(() => showNext(next), 20000);
      }, 400);
    }, 5000);
  }

  if (!visible) return null;

  const msg = FOMO_MESSAGES[idx];
  return (
    <div
      style={{
        position: "fixed",
        bottom: "80px",
        left: "16px",
        zIndex: 9999,
        transform: animating ? "translateX(0)" : "translateX(-120%)",
        opacity: animating ? 1 : 0,
        transition: "transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.4s ease",
        maxWidth: "300px",
      }}
    >
      <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.15)] border border-gray-100 px-4 py-3 flex items-center gap-3">
        <div className="text-2xl flex-shrink-0">{msg.icon}</div>
        <div>
          <p className="text-xs font-semibold text-[#222] leading-snug">{msg.text}</p>
          <p className="text-[10px] text-gray-400 mt-0.5">hace unos momentos</p>
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="bg-[#eaeef2] rounded-md mb-3 overflow-hidden">
      <button
        onClick={() => setOpen((o: boolean) => !o)}
        className="w-full flex items-center justify-between text-left px-5 py-4 font-semibold text-[#222]"
      >
        <span>{q}</span>
        <span
          className={`transition-transform text-xl ${open ? "rotate-180" : ""}`}
          aria-hidden
        >
          ▾
        </span>
      </button>
      {open && <div className="px-5 pb-5 text-[#333]">{a}</div>}
    </div>
  );
}

function Index() {
  return (
    <main
      className="min-h-screen w-full"
      style={{ fontFamily: "Montserrat, system-ui, sans-serif", backgroundColor: "#fdf3ef" }}
    >
      <FomoNotification />
      {/* Top hero band */}
      <CoralBand>
        ¡CREA ADORABLES MASCOTAS DE AMIGURUMI CON MÁS DE 60 PATRONES EXCLUSIVOS!
      </CoralBand>

      {/* Social proof bar */}
      <div className="bg-white border-b border-[#f4a08c]/40 py-3 px-4">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-semibold text-[#555]">
          <span>⭐⭐⭐⭐⭐ <span className="text-[#7a1e1e]">+500 compradoras satisfechas</span></span>
          <span>🇪🇸 Disponible en todo Latinoamérica</span>
          <span>📦 Entrega inmediata por email</span>
        </div>
      </div>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-12 md:py-16 grid md:grid-cols-2 gap-10 items-center">
        <div className="flex justify-center">
          <img src={IMG.cover} alt="eBook Mascotas Amigurumis" className="max-w-sm w-full h-auto" fetchPriority="high" decoding="async" />
        </div>
        <div>
          <h2
            className="text-5xl md:text-6xl text-[#222] mb-6"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Patrones Exclusivos
          </h2>
          <ul className="space-y-3 text-[#333] text-base md:text-lg">
            <li>✅ Más de <strong>60 patrones de mascotas</strong> completamente en español</li>
            <li>✅ Instrucciones <strong>claras y detalladas</strong> con apoyo gráfico paso a paso</li>
            <li>✅ Perfectos para <strong>emprendedoras</strong> que quieren diseños únicos y rentables</li>
            <li>✅ Acceso <strong>inmediato y de por vida</strong> desde cualquier dispositivo</li>
          </ul>

          {/* Price anchor in hero */}
          <div className="mt-6 flex items-center gap-4">
            <div className="text-center">
              <div className="text-lg text-[#999] line-through font-bold">$27.00 USD</div>
              <div className="text-4xl font-extrabold text-[#7ed957]">$8.00 USD</div>
              <div className="text-xs text-[#555] mt-1">ÚNICO PAGO · ACCESO INMEDIATO</div>
            </div>
            <div className="flex-1">
              <CTAButton>¡QUIERO MIS PATRONES AHORA!</CTAButton>
            </div>
          </div>

          {/* Mini urgency */}
          <div className="mt-4 bg-[#fff3cd] border border-[#ffc107] rounded-xl px-4 py-2 text-center">
            <span className="text-sm font-bold text-[#7a5c00]">⏰ Oferta por tiempo limitado — <span className="text-[#e63946]">70% de descuento activo ahora</span></span>
          </div>
        </div>
      </section>

      <CoralBand>¡SÓLO POR HOY PODRÁS ADQUIRIRLOS CON UN 70% DE DESCUENTO!</CoralBand>

      {/* Patterns preview */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-center text-2xl md:text-4xl font-extrabold italic text-[#222] mb-10">
          Estos son algunos de los patrones que encontrarás:
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {IMG.patterns.map((src) => (
            <img key={src} src={src} alt="Patrones amigurumi" className="w-full rounded-2xl" loading="lazy" decoding="async" />
          ))}
        </div>
      </section>

      {/* Devices */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-center text-2xl md:text-4xl font-extrabold text-[#7a1e1e] mb-2">
          ¿QUÉ TIPO DE MASCOTAS VIENE EN EL EBOOK?
        </h3>
        <p className="text-center text-lg md:text-2xl font-bold text-[#7a1e1e] mb-10">
          (VISIBLE EN CUALQUIER DISPOSITIVO)
        </p>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <img src={IMG.devices} alt="Visible en cualquier dispositivo" className="w-full" loading="lazy" decoding="async" />
          <div>
            <h4
              className="text-4xl text-[#7c5fb8] mb-4"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              Encontraras:
            </h4>
            <ul className="text-[#333] text-lg space-y-1">
              <li>- Bulldog</li>
              <li>- Chihuahua</li>
              <li>- Pitbull</li>
              <li>- Rottweiler</li>
              <li>- Husk</li>
              <li>- Gato siamés</li>
              <li>- Gato regordete</li>
              <li className="pt-2 font-semibold">Y muchas más razas</li>
            </ul>
            <div className="flex flex-col gap-4 mt-8 max-w-sm">
              <img src={IMG.emailBadge} alt="Entrega por email" className="w-full" loading="lazy" decoding="async" />
              <img src={IMG.lifetimeBadge} alt="Acceso de por vida" className="w-full" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </section>

      <CoralBand>ASÍ VERÁS NUESTRO EBOOK POR DENTRO</CoralBand>

      <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className="w-full max-w-[360px] aspect-[444/960] bg-black rounded-3xl overflow-hidden shadow-2xl border-[6px] border-white relative">
          <video
            src={IMG.insideVideo}
            controls
            preload="none"
            playsInline
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center mt-12">
          <CTAButton>¡HAZ CLIC AQUÍ PARA ACCEDER AL EBOOK MASCOTAS!</CTAButton>
        </div>
      </section>

      {/* Testimonials - Rich Cards */}
      <section className="py-14 px-6" style={{ backgroundColor: "#fce6dd" }}>
        <h3 className="text-center text-2xl md:text-4xl font-extrabold text-white mb-2 max-w-4xl mx-auto leading-tight">
          <span className="bg-[#ee5a8b] px-3 py-1 inline-block">MIRA LO QUE DICEN QUIENES YA LO TIENEN</span>
        </h3>
        <p className="text-center text-[#7a1e1e] font-semibold mb-10 mt-3">Reseñas verificadas de compradoras reales ✅</p>

        {/* WhatsApp collage - FIRST and most powerful */}
        <div className="max-w-5xl mx-auto mb-8">
          <img src={testiWhatsapp} alt="Clientas mostrando sus amigurumis por WhatsApp" className="w-full rounded-2xl shadow-lg" loading="lazy" decoding="async" />
        </div>

        {/* Facebook screenshot cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <img src={testiFacebook1} alt="Testimonio Giselle Campos en Facebook" className="w-full" loading="lazy" decoding="async" />
            <div className="px-4 py-2 flex justify-end">
              <span className="text-[10px] font-semibold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">✔ Facebook</span>
            </div>
          </div>
          <div className="bg-white rounded-2xl overflow-hidden shadow-md">
            <img src={testiFacebook2} alt="Testimonio Raquel García en Facebook" className="w-full" loading="lazy" decoding="async" />
            <div className="px-4 py-2 flex justify-end">
              <span className="text-[10px] font-semibold bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">✔ Facebook</span>
            </div>
          </div>
        </div>

        {/* Hotmart review cards */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-4">
          {[
            { name: "Rita", text: "Emprendo con el tejido hace muchos años y estos patrones no se consiguen y mucho menos a un precio tan accesible. La lectura es sencilla y tiene mucho apoyo gráfico. ¡Soy feliz! ❤️" },
            { name: "Elvira", text: "Me encantó el ebook, muy claro, fácil de entender y los amigurumis quedan preciosos, lo recomiendo 💯" },
            { name: "Victoria", text: "Este ebook es el que más me gustó de todos, es muy lindo cada patrón y muy bien detallado. ¡Gracias!" },
            { name: "Jocelyn", text: "Muy bonito, gran contenido muy bien explicado. Se entiende perfecto, el contenido es increíble, ¡me encantó!" },
            { name: "Sara", text: "Un Ebook super completo, muy bien explicado cada detalle, los patrones que promete están completos. ¡Me encantó esta compra!" },
          ].map(({ name, text }) => (
            <div key={name} className="bg-white rounded-2xl p-5 shadow-md flex flex-col gap-3">
              <div className="flex items-center gap-1 text-yellow-400 text-lg">{'★★★★★'}</div>
              <p className="text-[#333] text-sm leading-relaxed flex-grow">&ldquo;{text}&rdquo;</p>
              <div className="flex items-center justify-between mt-2">
                <span className="font-bold text-[#222] text-sm">{name}</span>
                <span className="text-[10px] font-semibold bg-orange-100 text-orange-600 px-2 py-0.5 rounded-full">✔ Hotmart</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="bg-white py-12 px-6 border-y border-[#fce6dd]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <div className="flex-shrink-0 w-28 h-28 bg-[#f4a08c]/15 rounded-full flex items-center justify-center text-5xl">
            🛡️
          </div>
          <div>
            <h3 className="text-2xl font-extrabold text-[#7a1e1e] mb-2">
              Garantía de Satisfacción de 7 Días
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Queremos que compres con total tranquilidad. Prueba el ebook de patrones hoy mismo. Si en los primeros 7 días sientes que no cumple con tus expectativas, puedes solicitar el reembolso del 100% de tu dinero directamente en la plataforma. Sin preguntas ni complicaciones. ¡Tu inversión está totalmente protegida!
            </p>
          </div>
        </div>
      </section>

      <CoralBand>¡Y ESO NO ES TODO, TENEMOS MÁS PARA TI!</CoralBand>

      {/* Bonuses */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <h3 className="text-center text-xl md:text-3xl font-extrabold text-[#222] mb-10">
          Si adquieres el ebook hoy mismo recibirás los siguientes packs:
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          {IMG.bonuses.map((src, i) => (
            <div key={src} className="text-center">
              <img src={src} alt={`Bono ${i + 1}`} className="w-full mb-4" loading="lazy" decoding="async" />
              <div className="text-[#7c5fb8] font-extrabold text-xl">BONO {i + 1}</div>
              <div className="text-[#333] mt-1">
                Pack "
                <em>
                  {["Amigos de Kitty", "Gatitos Halloween", "Gatitos Cactus"][i]}
                </em>
                "
              </div>
            </div>
          ))}
        </div>
      </section>

      <CoralBand>¡ACCEDE AHORA MISMO CON EL 70% DE DESCUENTO!</CoralBand>

      {/* Offer */}
      <section className="max-w-6xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10 items-center">
        <img src={IMG.offerBook} alt="Ebook mascotas" className="w-full" loading="lazy" decoding="async" />
        <div className="text-center md:text-left">
          <h3 className="text-2xl md:text-3xl font-extrabold text-[#222]">
            RECIBIRÁS TODO ESTO Y MÁS POR
          </h3>
          <div className="text-3xl md:text-4xl font-extrabold text-[#e63946] line-through mt-3">
            $27.00 USD
          </div>
          <div className="text-xl md:text-2xl font-bold mt-3 text-[#222]">POR APENAS</div>
          <div className="text-4xl md:text-6xl font-extrabold text-[#7ed957] mt-2">$8.00 USD</div>
          <p className="mt-3 text-sm md:text-base text-[#444]">
            *El pago se realizará en tu moneda local, único pago*
          </p>
          <div className="mt-6">
            <CTAButton>¡QUIERO ADQUIRIR EL EBOOK!</CTAButton>
          </div>
          <img src={IMG.payments} alt="Métodos de pago" className="mt-6 max-w-md w-full mx-auto md:mx-0" loading="lazy" decoding="async" />

          <div className="mt-10">
            <h4 className="text-center md:text-left text-xl md:text-2xl font-extrabold text-[#222]">
              Esta oferta termina en:
            </h4>
            <Countdown />
            <p className="text-center mt-4 font-semibold text-[#7a1e1e]">
              ¡AÚN PUEDES APROVECHAR EL DESCUENTO!
            </p>
          </div>
        </div>
      </section>

      <CoralBand>MÁS PATRONES QUE VERÁS EN NUESTRO EBOOK</CoralBand>

      <section className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid sm:grid-cols-2 gap-8">
          {IMG.morePatterns.map((src) => (
            <img key={src} src={src} alt="Más patrones" className="w-full rounded-2xl" loading="lazy" decoding="async" />
          ))}
        </div>
      </section>

      <CoralBand>¿TIENES PREGUNTAS?</CoralBand>

      <section className="max-w-3xl mx-auto px-6 py-14">
        {FAQS.map((f) => (
          <FaqItem key={f.q} q={f.q} a={f.a} />
        ))}
        <div className="text-center mt-10">
          <CTAButton>¡QUIERO ADQUIRIR EL EBOOK!</CTAButton>
        </div>
      </section>

      <footer className="py-8 text-center text-xs text-[#666]">
        © {new Date().getFullYear()} Valenstore · Todos los derechos reservados
      </footer>

      {/* Sticky mobile CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-200 px-4 py-3 shadow-[0_-4px_20px_rgba(0,0,0,0.12)]">
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noreferrer"
          className="block w-full text-center bg-[#7ed957] text-white font-extrabold text-base py-3 rounded-full shadow-[0_4px_0_rgba(0,0,0,0.15)] uppercase tracking-wide animate-pulse-cta"
        >
          🛒 ¡QUIERO EL EBOOK POR $8 USD!
        </a>
      </div>
    </main>
  );
}
