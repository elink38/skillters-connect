import React from 'react';
import {
  FaFacebookF,
  FaMapMarkerAlt,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaArrowRight,
  FaGlobe
} from 'react-icons/fa';

const FontImport = () => (
  <style>
    {`
      @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;600;700&display=swap');
      .font-outfit { font-family: 'Outfit', sans-serif; }
    `}
  </style>
);

const SocialCard = ({ icon, label, platform, colorConfig, href }) => {
  return (
    <a
      href={href || "#"}
      className={`group relative flex items-center justify-between p-4 rounded-2xl border transition-all duration-300
  bg-gray-600 bg-opacity-0
  backdrop-filter backdrop-blur-sm
  bg-clip-padding
  ${colorConfig.border}
  ${colorConfig.hoverShadow}
  hover:-translate-y-1
`}

    >
      <div className={`absolute inset-0 rounded-2xl opacity-20 bg-gradient-to-r ${colorConfig.gradient} pointer-events-none`} />

      <div className="flex items-center gap-4 z-10">
        <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-xl ${colorConfig.iconBg}`}>
          {icon}
        </div>

        <div className="flex flex-col">
          <span className="text-gray-400 text-xs font-light tracking-wide">{label}</span>
          <span className="text-white font-semibold text-lg leading-tight group-hover:text-white/90 transition-colors">
            {platform}
            
          </span>
        </div>
      </div>

        <div
            className="
                absolute right-6
                w-6 h-[2px]
                bg-white
                opacity-0
                translate-x-[-15px]
                group-hover:opacity-100
                group-hover:translate-x-0
                transition-all duration-500
            "
            >
            <span
                className="
                absolute right-0 top-1/2
                w-2 h-2
                border-t-2 border-r-2 border-white
                rotate-45 -translate-y-1/2
                "
            />
        </div>
    </a>
  );
};

export default function SkilltersPage() {

  const platforms = [
    {
      id: 1,
      platform: 'Find Us',
      label: 'View our location',
      icon: <FaMapMarkerAlt />,
      href: 'https://location.skillters.in', 
      config: {
        border: 'border-blue-500/30',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(59,130,246,0.5)]',
        gradient: 'from-blue-600 to-transparent',
        iconBg: 'bg-blue-600',
      }
    },
    {
      id: 2,
      platform: 'Instagram',
      label: 'Follow us on',
      icon: <FaInstagram />,
      href: 'https://www.instagram.com/skillters.in?igsh=cGRpc2I0MjhhaHZ2', 
      config: {
        border: 'border-pink-500/30',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(236,72,153,0.5)]',
        gradient: 'from-pink-600 via-purple-600 to-transparent',
        iconBg: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500',
      }
    },
    {
      id: 3,
      platform: 'YouTube',
      label: 'Watch on',
      icon: <FaYoutube />,
      href: 'https://youtube.com/@skillters?si=onl0uZIVSRGCBdaq', 
      config: {
        border: 'border-red-500/30',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(239,68,68,0.5)]',
        gradient: 'from-red-600 to-transparent',
        iconBg: 'bg-red-600',
      }
    },
    {
      id: 4,
      platform: 'WhatsApp',
      label: 'Chat on',
      icon: <FaWhatsapp />,
      href: 'https://wa.me/916355774721', 
      config: {
        border: 'border-green-500/30',
        hoverShadow: 'hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]',
        gradient: 'from-green-600 to-transparent',
        iconBg: 'bg-green-500',
      }
    }
  ];

  return (
    <div className="min-h-screen w-full relative flex items-center justify-center p-4 font-outfit overflow-hidden bg-[#0f0f0f]">
      <FontImport />

      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/background.png')` }}
      />
      <div className="absolute inset-0 bg-black/20 z-0" />

      <div className="relative z-10 w-full max-w-[600px] flex flex-col gap-6">

        {/* ✅ ONLY CHANGE IS HERE */}
        <div className="flex justify-center">
          <div className="relative group w-[440px]">
            <div className="absolute -inset-[1px] bg-gradient-to-r from-blue-500 via-yellow-400 to-red-500 rounded-3xl opacity-70 blur-sm group-hover:opacity-100 transition duration-500" />
            <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-3xl p-8 flex flex-col items-center justify-center text-center border border-white/10 shadow-2xl">
              <img src="/logo.png" alt="Skillters" className="w-16 mb-4" />
              <h1 className="text-3xl font-bold text-white tracking-wide mb-1">
                SKILLTERS
              </h1>
            </div>
          </div>
        </div>

        {/* SOCIAL GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
          {platforms.map((p) => (
            <SocialCard key={p.id} {...p} colorConfig={p.config} />
          ))}
        </div>

        {/* FOOTER BUTTON */}
        <a href="https://skillters.in" className="relative w-full group mt-6">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 to-yellow-300 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-200" />
          <div className="relative w-full bg-gradient-to-r from-[#fb923c] via-[#fbbf24] to-[#facc15] rounded-full p-4 flex items-center justify-center gap-3 shadow-lg transform active:scale-95 transition-all">
            <div className="bg-white rounded-full p-1.5 shadow-sm">
              <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-green-400 flex items-center justify-center">
                <FaGlobe className="text-white text-xs" />
              </div>
            </div>
            <span className="text-gray-900 font-bold text-lg tracking-wide">
              Visit SKILLTERS Website
            </span>
          </div>
        </a>

      </div>
    </div>
  );
}
