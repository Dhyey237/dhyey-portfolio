import React, { useState, useEffect } from 'react';
import { Camera, Film, Palette, Aperture, Instagram, MessageCircle, Mail, ExternalLink, Sparkles, Zap, Star, Video, FileImage, Monitor, ArrowRight } from 'lucide-react';

// ==========================================
// IMAGE IMPORTS - CUSTOMIZE YOUR IMAGES HERE
// ==========================================
// Replace these import paths with your actual image paths
import heroBg from './Images/hero/bg1.jpg';
import heroAvatar from './Images/hero/0.jpg';

import skill1 from './Images/skills/pexels-mikegiugliano-3009066.jpg';
import skill2 from './Images/skills/tamara-malaniy-Q7xoPRzWAuw-unsplash.jpg';
import skill3 from './Images/skills/tom-podmore-ZbeW6fB84-Q-unsplash.jpg';
import skill4 from './Images/skills/vincenzo-de-simone-KFtEH51bGdU-unsplash.jpg';

import g1 from './Images/gallery/20250816_073000.jpg';
import g2 from './Images/gallery/20250816_080304.jpg';
import g3 from './Images/gallery/20250816_083345.jpg';
import g4 from './Images/gallery/20250816_084443.jpg';
import g5 from './Images/gallery/20250816_085430.jpg';
import g6 from './Images/gallery/20250816_090627.jpg';
import g7 from './Images/gallery/20250816_090644.jpg';
import g8 from './Images/gallery/20250816_090720.jpg';
import g9 from './Images/gallery/20250816_091001.jpg';
import g10 from './Images/gallery/IMG_3147.JPG';
import g11 from './Images/gallery/IMG_6974.jpg';
import g12 from './Images/gallery/IMG_6984.jpg';
import g13 from './Images/gallery/IMG_7019.jpg';
import g14 from './Images/gallery/IMG_7045.jpg';
import g15 from './Images/gallery/IMG_7047.jpg';
import g16 from './Images/gallery/IMG_7544.jpg';
import g17 from './Images/gallery/IMG_7613.jpg';
import g18 from './Images/gallery/PXL_20250706_025430795.jpg';

// ==========================================
// IMAGE CONFIGURATION - EDIT IMAGES HERE
// ==========================================
const IMAGES = {
  heroBackground: heroBg,
  heroAvatar: heroAvatar,
  skillBackgrounds: [skill1, skill2, skill3, skill4],
  gallery: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18]
};

const Portfolio = () => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [clientForm, setClientForm] = useState({ name: '', email: '', message: '' });
  const [queryForm, setQueryForm] = useState({ name: '', query: '' });
  const [isLoading, setIsLoading] = useState(true);

  // ==========================================
  // PRELOAD IMPORTANT IMAGES (HERO + SKILLS)
  // ==========================================
  useEffect(() => {
    const preloadImages = async () => {
      // Only preload the images needed for the first view (hero + skills)
      const priorityImages = [
        IMAGES.heroBackground,
        IMAGES.heroAvatar,
        ...IMAGES.skillBackgrounds
      ];

      const imagePromises = priorityImages.map((src) => {
        return new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve; // Resolve even on error to not block
          img.src = src;
        });
      });

      await Promise.all(imagePromises);
      setIsLoading(false);
    };

    preloadImages();
  }, []);

  // ==========================================
  // OPTIMIZED SCROLL TRACKING
  // ==========================================
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const sections = ['hero', 'skills', 'tools', 'gallery', 'contact'];
          const current = sections.find(section => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 150 && rect.bottom >= 150;
            }
            return false;
          });
          if (current && current !== activeSection) {
            setActiveSection(current);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [activeSection]);

  // ==========================================
  // SMOOTH SCROLL TO SECTION
  // ==========================================
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  // ==========================================
  // WHATSAPP FORM HANDLERS
  // ==========================================
  const handleClientSubmit = () => {
    if (!clientForm.name || !clientForm.email || !clientForm.message) {
      alert('Please fill in all fields');
      return;
    }
    const message = `New Client Inquiry:\nName: ${clientForm.name}\nEmail: ${clientForm.email}\nMessage: ${clientForm.message}`;
    window.open(`https://wa.me/919879672277?text=${encodeURIComponent(message)}`, '_blank');
    setClientForm({ name: '', email: '', message: '' });
  };

  const handleQuerySubmit = () => {
    if (!queryForm.name || !queryForm.query) {
      alert('Please fill in all fields');
      return;
    }
    const message = `Quick Query:\nName: ${queryForm.name}\nQuery: ${queryForm.query}`;
    window.open(`https://wa.me/919879672277?text=${encodeURIComponent(message)}`, '_blank');
    setQueryForm({ name: '', query: '' });
  };

  // ==========================================
  // CONTENT CONFIGURATION - EDIT TEXT HERE
  // ==========================================
  const PERSONAL_INFO = {
    name: 'Dhyey Patel',
    tagline: 'Video Editor | Photographer | Storyteller',
    bio1: 'Crafting visual stories that captivate and inspire. With a passion for cinematography and an eye for detail, I transform moments into timeless memories through the art of video editing and photography.',
    bio2: 'Specializing in color grading, motion graphics, and creative storytelling. Every frame tells a story, and I\'m here to make yours unforgettable.',
    phone: '919879672277'
  };

  const skills = [
    { 
      id: 1, 
      title: 'Skills', 
      items: ['Video Editing', 'Color Grading', 'Storytelling', 'Photography', 'Cinematography', 'Motion Graphics', 'Audio Design'], 
      icon: Sparkles, 
      gradient: 'from-blue-500/30 via-cyan-500/30 to-blue-600/30' 
    },
    { 
      id: 2, 
      title: 'Services', 
      items: ['Corporate Videos', 'Wedding Films', 'Product Photography', 'Social Media Content', 'Brand Storytelling', 'Event Coverage'], 
      icon: Star, 
      gradient: 'from-purple-500/30 via-pink-500/30 to-purple-600/30' 
    },
    { 
      id: 3, 
      title: 'Gears', 
      items: ['Sony A7 III', 'DJI Ronin', 'Godox Lighting', 'Rode Mic', 'MacBook Pro', 'Color Grading Monitor'], 
      icon: Camera, 
      gradient: 'from-emerald-500/30 via-teal-500/30 to-green-600/30' 
    },
    { 
      id: 4, 
      title: 'Tools', 
      items: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Lightroom', 'DaVinci Resolve', 'Final Cut Pro', 'CapCut', 'VN Editor'], 
      icon: Monitor, 
      gradient: 'from-orange-500/30 via-amber-500/30 to-red-500/30' 
    }
  ];

  const tools = [
    { name: 'Premiere Pro', icon: '🎬', gradient: 'from-purple-600/40 to-purple-800/40' },
    { name: 'After Effects', icon: '✨', gradient: 'from-blue-600/40 to-blue-800/40' },
    { name: 'Photoshop', icon: '🎨', gradient: 'from-cyan-600/40 to-cyan-800/40' },
    { name: 'Lightroom', icon: '📸', gradient: 'from-indigo-600/40 to-indigo-800/40' },
    { name: 'DaVinci', icon: '🎞️', gradient: 'from-red-600/40 to-red-800/40' },
    { name: 'Final Cut', icon: '⚡', gradient: 'from-orange-600/40 to-orange-800/40' },
    { name: 'CapCut', icon: '✂️', gradient: 'from-pink-600/40 to-pink-800/40' },
    { name: 'VN Editor', icon: '🎥', gradient: 'from-green-600/40 to-green-800/40' }
  ];

  const socialLinks = [
    { name: 'Instagram', subtext: '@dhyey.237', icon: Instagram, link: 'https://instagram.com/dhyey.237', gradient: 'from-purple-600/40 to-pink-700/40' },
    { name: 'Upwork', subtext: 'Hire Me', icon: ExternalLink, link: '#', gradient: 'from-green-600/40 to-emerald-700/40' },
    { name: 'Stock Images', subtext: 'Portfolio', icon: FileImage, link: '#', gradient: 'from-blue-600/40 to-cyan-700/40' },
    { name: 'WhatsApp', subtext: 'Chat Now', icon: MessageCircle, link: 'https://wa.me/919879672277', gradient: 'from-green-700/40 to-green-600/40' }
  ];

  const keywords = [
    { name: 'Video Editing', icon: Video },
    { name: 'Color Grading', icon: Palette },
    { name: 'Storytelling', icon: Film },
    { name: 'Photography', icon: Camera },
    { name: 'Cinematography', icon: Aperture },
    { name: 'Motion Graphics', icon: Zap },
  ];

  // ==========================================
  // LOADING SCREEN
  // ==========================================
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <div className="relative w-20 h-20 mx-auto mb-6">
            <div className="absolute inset-0 border-4 border-white/10 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-white rounded-full animate-spin"></div>
          </div>
          <p className="text-white/60 text-sm font-medium">Loading Images...</p>
          <p className="text-white/40 text-xs mt-2">Preloading main content for smooth experience</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ========================================== */}
      {/* CUSTOM ANIMATIONS & STYLES */}
      {/* ========================================== */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        img {
          image-rendering: -webkit-optimize-contrast;
          image-rendering: crisp-edges;
          transform: translateZ(0);
          backface-visibility: hidden;
        }
        .instant-hover {
          transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
          will-change: transform, opacity;
        }
        .no-blur-lag {
          will-change: backdrop-filter;
        }
        .preloaded-image {
          content-visibility: auto;
        }
      `}</style>

      {/* ========================================== */}
      {/* OPTIMIZED BACKGROUND */}
      {/* ========================================== */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600/20 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-600/20 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* ========================================== */}
      {/* NAVIGATION BAR */}
      {/* ========================================== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-3 md:px-6 py-3 bg-black/40 backdrop-blur-2xl rounded-full border border-white/10 shadow-2xl max-w-[95vw]">
        <div className="flex gap-2 md:gap-4 items-center">
          {[
            { id: 'hero', label: 'Home' }, 
            { id: 'skills', label: 'Skills' }, 
            { id: 'tools', label: 'Handles' }, 
            { id: 'gallery', label: 'Gallery' }, 
            { id: 'contact', label: 'Contact' }
          ].map((item) => (
            <button 
              key={item.id} 
              onClick={() => scrollToSection(item.id)} 
              className={`relative px-4 md:px-6 py-2.5 rounded-full transition-all duration-300 ${
                activeSection === item.id 
                  ? 'bg-white text-black shadow-lg scale-105' 
                  : 'text-white/70 hover:text-white hover:bg-white/10'
              }`}
            >
              <span className="relative z-10 text-xs md:text-sm font-semibold">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ========================================== */}
      {/* HERO SECTION */}
      {/* ========================================== */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden pt-32 pb-20">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.heroBackground} 
            alt="Background" 
            className="w-full h-full object-cover scale-105" 
            loading="eager"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-pink-900/20" />
        </div>
        
        <div className="relative z-10 max-w-5xl w-full mx-auto text-center">
          {/* Avatar */}
          <div className="mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_0.2s_forwards]">
            <div className="w-52 h-52 md:w-80 md:h-80 rounded-full overflow-hidden shadow-2xl mx-auto">
              <img 
                src={IMAGES.heroAvatar} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" 
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

          {/* Name + Tagline */}
          <div className="mb-10 opacity-0 animate-[fadeIn_0.8s_ease-out_0.4s_forwards]">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent drop-shadow-2xl">
                {PERSONAL_INFO.name}
              </span>
            </h1>
            <p className="text-lg md:text-2xl text-white/90 font-light mb-8">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto mb-12 px-8 py-10 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 shadow-2xl opacity-0 animate-[fadeIn_0.8s_ease-out_0.6s_forwards] hover:bg-white/8 transition-all duration-500">
            <p className="text-base md:text-lg leading-relaxed text-white/90 mb-5">
              {PERSONAL_INFO.bio1}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/75">
              {PERSONAL_INFO.bio2}
            </p>
          </div>

          {/* Keywords */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-[fadeIn_0.8s_ease-out_0.8s_forwards]">
            {keywords.map((keyword, idx) => (
              <div 
                key={idx} 
                className="group px-6 py-3 bg-white/5 backdrop-blur-xl rounded-full border border-white/10 hover:bg-white/10 hover:scale-110 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <keyword.icon className="w-5 h-5 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300" />
                  <span className="font-semibold text-sm">{keyword.name}</span>
                </div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="mt-16 opacity-0 animate-[fadeIn_0.8s_ease-out_1s_forwards]">
            <div className="animate-bounce">
              <ArrowRight className="w-6 h-6 mx-auto rotate-90 text-white/50" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SKILLS SECTION (WITH LIGHT BLUR ON HOVER) */}
      {/* ========================================== */}
      <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 bg-black">
        <div className="w-full max-w-[1800px] mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-16 md:mb-24">
            <span className="bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
              What I Do
            </span>
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {skills.map((skill, index) => {
              const SkillIcon = skill.icon;
              
              return (
                <div 
                  key={skill.id} 
                  className="group relative cursor-pointer h-[70vh] min-h-[500px]" 
                  onMouseEnter={() => setHoveredSkill(skill.id)} 
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  {/* Card Container */}
                  <div className="relative h-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                    {/* Background Image with Scale + LIGHT BLUR on hover */}
                    <div className="absolute inset-0 overflow-hidden">
                      <div 
                        className="w-full h-full instant-hover group-hover:scale-110 group-hover:blur-sm preloaded-image"
                        style={{ 
                          backgroundImage: `url(${IMAGES.skillBackgrounds[index]})`, 
                          backgroundSize: 'cover', 
                          backgroundPosition: 'center' 
                        }}
                      />
                    </div>
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 instant-hover" />
                    
                    {/* Bottom Label - Default State */}
                    <div className="absolute bottom-0 inset-x-0 p-6 transform translate-y-0 opacity-100 group-hover:translate-y-4 group-hover:opacity-0 instant-hover">
                      <div className="bg-black/40 backdrop-blur-xl rounded-2xl p-5 border border-white/20">
                        <SkillIcon className="w-8 h-8 mx-auto mb-3" />
                        <h3 className="font-bold text-2xl text-white text-center drop-shadow-lg">{skill.title}</h3>
                      </div>
                    </div>
                    
                    {/* Hover Content - Items List */}
                    <div className="absolute inset-0 flex items-center justify-center p-6 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 instant-hover">
                      <div className="bg-black/50 backdrop-blur-xl rounded-3xl p-6 border border-white/20 w-full max-w-sm">
                        <div className="flex items-center justify-center gap-3 mb-6">
                          <SkillIcon className="w-10 h-10" />
                          <h3 className="font-bold text-3xl">{skill.title}</h3>
                        </div>
                        <div className="space-y-3">
                          {skill.items.map((item, idx) => (
                            <div 
                              key={idx} 
                              className="text-sm bg-white/10 rounded-xl px-4 py-3 border border-white/20 text-center font-medium hover:bg-white/20 hover:scale-105 instant-hover"
                            >
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* TOOLS & HANDLES SECTION */}
      {/* ========================================== */}
      <section id="tools" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
        <div className="w-full max-w-[1800px] mx-auto">
          {/* Software Tools */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              My Creative Arsenal
            </span>
          </h2>
          
          <div className="flex flex-wrap justify-center gap-5 md:gap-6 mb-24">
            {tools.map((tool, idx) => (
              <div 
                key={idx} 
                className="group relative px-8 py-6 bg-white/5 backdrop-blur-2xl rounded-2xl border border-white/10 cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-white/10 hover:shadow-2xl hover:border-white/20"
              >
                <div className="relative z-10">
                  <div className="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">{tool.icon}</div>
                  <div className="text-sm font-bold text-center">{tool.name}</div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Social Handles */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-12">
            <span className="bg-gradient-to-r from-white via-cyan-100 to-blue-100 bg-clip-text text-transparent">
              Let's Connect
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {socialLinks.map((social, idx) => (
              <a 
                key={idx} 
                href={social.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group relative p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:bg-white/10 hover:scale-105 hover:border-white/20 transition-all duration-300 text-center overflow-hidden"
              >
                <div className="relative z-10">
                  <social.icon className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-lg font-bold mb-1">{social.name}</div>
                  <div className="text-sm text-white/70">{social.subtext}</div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* GALLERY SECTION (OPTIMIZED) */}
      {/* ========================================== */}
      <section id="gallery" className="relative min-h-screen py-20 md:py-32 px-4 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-4">
              <span className="bg-gradient-to-r from-white via-orange-100 to-pink-100 bg-clip-text text-transparent">
                Featured Work
              </span>
            </h2>
            <p className="text-white/60 text-lg">Every frame tells a story</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {IMAGES.gallery.map((image, idx) => (
              <div 
                key={idx} 
                className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-white/20 instant-hover"
              >
                <div className="w-full" style={{ paddingTop: '133%' }}>
                  <img 
                    src={image}
                    alt={`Gallery ${idx + 1}`} 
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 instant-hover preloaded-image" 
                    style={{ transform: 'translateZ(0)' }}
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 instant-hover" />
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 instant-hover">
                  <div className="bg-white/10 backdrop-blur-xl rounded-xl px-4 py-3 border border-white/20">
                    <p className="text-sm font-bold">Photo {idx + 1}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* CONTACT SECTION */}
      {/* ========================================== */}
      <section id="contact" className="relative min-h-screen py-20 md:py-32 px-4 bg-gradient-to-b from-black via-purple-900/10 to-black">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-center mb-4">
            <span className="bg-gradient-to-r from-white via-purple-100 to-pink-100 bg-clip-text text-transparent">
              Let's Create Together
            </span>
          </h2>
          <p className="text-center text-white/60 text-lg mb-12">Ready to bring your vision to life?</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Client Inquiry Form */}
            <div className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <MessageCircle className="w-8 h-8" />
                Client Inquiry
              </h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={clientForm.name} 
                  onChange={(e) => setClientForm({...clientForm, name: e.target.value})} 
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-white/30 focus:bg-white/8 focus:outline-none transition-all duration-300 placeholder-white/40" 
                />
                <input 
                  type="email" 
                  placeholder="Your Email" 
                  value={clientForm.email} 
                  onChange={(e) => setClientForm({...clientForm, email: e.target.value})} 
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-white/30 focus:bg-white/8 focus:outline-none transition-all duration-300 placeholder-white/40" 
                />
                <textarea 
                  placeholder="Tell me about your project..." 
                  rows="4" 
                  value={clientForm.message} 
                  onChange={(e) => setClientForm({...clientForm, message: e.target.value})} 
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-white/30 focus:bg-white/8 focus:outline-none transition-all duration-300 placeholder-white/40 resize-none" 
                />
                <button 
                  onClick={handleClientSubmit} 
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300"
                >
                  Send via WhatsApp
                </button>
              </div>
            </div>

            {/* Quick Query Form */}
            <div className="p-8 bg-white/5 backdrop-blur-2xl rounded-3xl border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500">
              <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                <Mail className="w-8 h-8" />
                Quick Query
              </h3>
              <div className="space-y-4">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  value={queryForm.name} 
                  onChange={(e) => setQueryForm({...queryForm, name: e.target.value})} 
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-white/30 focus:bg-white/8 focus:outline-none transition-all duration-300 placeholder-white/40" 
                />
                <textarea 
                  placeholder="What would you like to know?" 
                  rows="6" 
                  value={queryForm.query} 
                  onChange={(e) => setQueryForm({...queryForm, query: e.target.value})} 
                  className="w-full px-6 py-4 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 focus:border-white/30 focus:bg-white/8 focus:outline-none transition-all duration-300 placeholder-white/40 resize-none" 
                />
                <button 
                  onClick={handleQuerySubmit} 
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl font-bold hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300"
                >
                  Send Query
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* FOOTER */}
      {/* ========================================== */}
      <footer className="relative py-12 px-4 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 mb-6">© 2024 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex justify-center gap-8 mb-6">
            <a 
              href="https://instagram.com/dhyey.237" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-white hover:scale-125 transition-all duration-300"
              aria-label="Instagram"
            >
              <Instagram className="w-7 h-7" />
            </a>
            <a 
              href={`https://wa.me/${PERSONAL_INFO.phone}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-white hover:scale-125 transition-all duration-300"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-7 h-7" />
            </a>
          </div>
          <p className="text-white/30 text-sm">Crafted with passion & creativity</p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
