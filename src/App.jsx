/*function GlassButton({ label, title, icon, glowColor, textColor, onClick }) {
  return (
    <button
      onClick={onClick}
      className="relative w-[380px] h-[78px] rounded-2xl overflow-hidden
                 transition-transform hover:scale-[1.015]"
      style={{
        boxShadow: `0 0 55px ${glowColor}`,
      }}
    >
      {/* GLASS BASE *}
      <div className="absolute inset-0 rounded-2xl bg-white/[0.06] backdrop-blur-[38px]" />

      {/* INNER BORDER HIGHLIGHT *}
      <div className="absolute inset-0 rounded-2xl border border-white/30" />
      <div className="absolute inset-[1px] rounded-2xl border border-black/30" />

      {/* NOISE *}
      <div
        className="absolute inset-0 opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "url('/noise.png')" }}
      />

      {/* CONTENT *}
      <div className="relative z-10 flex items-center gap-4 px-5 h-full">
        {/* ICON TILE *}
        <div className="w-12 h-12 rounded-xl bg-white/[0.18]
                        backdrop-blur-[24px]
                        border border-white/40
                        flex items-center justify-center">
          <img src={icon} className="w-6 h-6" />
        </div>

        <div>
          <p className="text-[12px] tracking-wide text-white/70 font-inter">
            {label}
          </p>
          <p className={`text-[18px] font-semibold tracking-wide ${textColor}`}>
            {title} →
          </p>
        </div>
      </div>
    </button>
  );
}

export default function App() {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/background.png')" }}
    >
      <div className="flex flex-col items-center gap-9">

        {/* LOGO GLASS CARD — EXACT STACK *}
        <div className="relative w-[440px] rounded-2xl p-7 text-center overflow-hidden">

          {/* GLASS *}
          <div className="absolute inset-0 bg-white/[0.05] backdrop-blur-[42px] rounded-2xl" />

          {/* BORDERS *}
          <div className="absolute inset-0 rounded-2xl border border-white/35" />
          <div className="absolute inset-[1px] rounded-2xl border border-black/30" />

          {/* RAINBOW GLOW *}
          <div
            className="absolute inset-0 rounded-2xl blur-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(59,130,246,0.45), rgba(168,85,247,0.4), rgba(249,115,22,0.4))",
            }}
          />

          {/* NOISE *}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{ backgroundImage: "url('/noise.png')" }}
          />

          {/* CONTENT *}
          <div className="relative z-10">
            <img src="/logo.png" className="w-16 mx-auto mb-4" />

            <h1 className="text-white text-[27px] font-semibold tracking-[0.12em]">
              SKILLTERS
            </h1>

            <p className="text-white/80 text-[14px] mt-2 font-inter tracking-wide">
              Helios, Naranpura
            </p>
          </div>
        </div>

        {/* BUTTON GRID *}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          <GlassButton
            label="Find us on"
            title="Google Maps"
            icon="/icons/location.svg"
            textColor="text-blue-400"
            glowColor="rgba(59,130,246,0.55)"
            onClick={() =>
              window.open(
                "https://maps.google.com/?q=Helios,+Naranpura",
                "_blank"
              )
            }
          />

          <GlassButton
            label="Follow us on"
            title="Instagram"
            icon="/icons/instagram.svg"
            textColor="text-pink-400"
            glowColor="rgba(236,72,153,0.55)"
            onClick={() => window.open("https://instagram.com", "_blank")}
          />

          <GlassButton
            label="Watch on"
            title="YouTube"
            icon="/icons/youtube.svg"
            textColor="text-red-400"
            glowColor="rgba(239,68,68,0.55)"
            onClick={() => window.open("https://youtube.com", "_blank")}
          />

          <GlassButton
            label="Chat on"
            title="WhatsApp"
            icon="/icons/whatsapp.svg"
            textColor="text-green-400"
            glowColor="rgba(34,197,94,0.55)"
            onClick={() => window.open("https://wa.me/91XXXXXXXXXX", "_blank")}
          />

        </div>

        {/* CTA *}
        <button
          className="relative w-[540px] h-[74px] rounded-full font-semibold text-lg
                     overflow-hidden hover:scale-[1.03] transition-transform"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-yellow-400" />
          <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "url('/noise.png')" }} />
          <span className="relative z-10 text-black tracking-wide">
            Visit SKILLTERS Website
          </span>
        </button>

      </div>
    </div>
  );
}
*/


// src/App.jsx
import React from 'react';
import SkilltersLanding from './SkilltersLanding'; // Importing the file you just made

function App() {
  return (
    <div>
      <SkilltersLanding />
    </div>
  );
}

export default App;