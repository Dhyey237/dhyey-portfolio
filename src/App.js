import React, { useState, useEffect } from 'react';
import { Camera, Film, Palette, Aperture, Instagram, MessageCircle, Mail, ExternalLink, Sparkles, Zap, Star, Video, FileImage, Monitor } from 'lucide-react';

// ==========================================
// IMAGE IMPORTS - CUSTOMIZE YOUR IMAGES HERE
// ==========================================
// Replace these import paths with your actual image paths
import heroBg from './Images/hero/bg.jpg';
import heroAvatar from './Images/hero/20250816_062329.jpg';

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
  heroBackground: heroBg,        // Hero section background image
  heroAvatar: heroAvatar,        // Your profile picture
  skillBackgrounds: [skill1, skill2, skill3, skill4],  // Background images for skills cards
  gallery: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18]  // Gallery images
};

const Portfolio = () => {
  // ==========================================
  // STATE MANAGEMENT
  // ==========================================
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [clientForm, setClientForm] = useState({ name: '', email: '', message: '' });
  const [queryForm, setQueryForm] = useState({ name: '', query: '' });
  const [hoveredNav, setHoveredNav] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // ==========================================
  // INITIAL LOADING & SCROLL TRACKING
  // ==========================================
  useEffect(() => {
    // Simulate initial load and set loading to false
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 300);

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // ==========================================
  // SMOOTH SCROLL TO SECTION
  // ==========================================
  const scrollToSection = (id) => {
    setActiveSection(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
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
  
  // Personal Information
  const PERSONAL_INFO = {
    name: 'Dhyey Patel',
    tagline: 'Video Editor | Photographer | Storyteller',
    bio1: 'Crafting visual stories that captivate and inspire. With a passion for cinematography and an eye for detail, I transform moments into timeless memories through the art of video editing and photography.',
    bio2: 'Specializing in color grading, motion graphics, and creative storytelling. Every frame tells a story, and I\'m here to make yours unforgettable.',
    phone: '919879672277'  // WhatsApp number (with country code, no + or spaces)
  };

  // Skills & Services Configuration
  const skills = [
    { 
      id: 1, 
      title: 'Skills', 
      items: ['Video Editing', 'Color Grading', 'Storytelling', 'Photography', 'Cinematography', 'Motion Graphics', 'Audio Design'], 
      icon: Sparkles, 
      gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20' 
    },
    { 
      id: 2, 
      title: 'Services', 
      items: ['Corporate Videos', 'Wedding Films', 'Product Photography', 'Social Media Content', 'Brand Storytelling', 'Event Coverage'], 
      icon: Star, 
      gradient: 'from-purple-500/20 via-pink-500/20 to-purple-600/20' 
    },
    { 
      id: 3, 
      title: 'Gears', 
      items: ['Sony A7 III', 'DJI Ronin', 'Godox Lighting', 'Rode Mic', 'MacBook Pro', 'Color Grading Monitor'], 
      icon: Camera, 
      gradient: 'from-emerald-500/20 via-teal-500/20 to-green-600/20' 
    },
    { 
      id: 4, 
      title: 'Tools', 
      items: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Lightroom', 'DaVinci Resolve', 'Final Cut Pro', 'CapCut', 'VN Editor'], 
      icon: Monitor, 
      gradient: 'from-orange-500/20 via-amber-500/20 to-red-500/20' 
    }
  ];

  // Software Tools Configuration
  const tools = [
    { name: 'Premiere Pro', icon: '🎬', gradient: 'from-purple-600/30 to-purple-800/30' },
    { name: 'After Effects', icon: '✨', gradient: 'from-blue-600/30 to-blue-800/30' },
    { name: 'Photoshop', icon: '🎨', gradient: 'from-cyan-600/30 to-cyan-800/30' },
    { name: 'Lightroom', icon: '📸', gradient: 'from-indigo-600/30 to-indigo-800/30' },
    { name: 'DaVinci', icon: '🎞️', gradient: 'from-red-600/30 to-red-800/30' },
    { name: 'Final Cut', icon: '⚡', gradient: 'from-orange-600/30 to-orange-800/30' },
    { name: 'CapCut', icon: '✂️', gradient: 'from-pink-600/30 to-pink-800/30' },
    { name: 'VN Editor', icon: '🎥', gradient: 'from-green-600/30 to-green-800/30' }
  ];

  // Social Media Links Configuration
  const socialLinks = [
    { name: 'Instagram @dhyey.237', icon: Instagram, link: 'https://instagram.com/dhyey.237', gradient: 'from-purple-600/30 to-pink-700/30' },
    { name: 'Upwork', icon: ExternalLink, link: '#', gradient: 'from-green-600/30 to-emerald-700/30' },
    { name: 'Stock Images', icon: FileImage, link: '#', gradient: 'from-blue-600/30 to-cyan-700/30' },
    { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/919879672277', gradient: 'from-green-700/30 to-green-600/30' }
  ];

  // Keyword Tags Configuration
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
          <div className="w-16 h-16 border-4 border-white/20 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white/60 text-sm">Loading Portfolio...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* ========================================== */}
      {/* CUSTOM ANIMATIONS */}
      {/* ========================================== */}
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-in {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>

      {/* ========================================== */}
      {/* BACKGROUND DECORATIVE BLOBS */}
      {/* ========================================== */}
      <div className="fixed inset-0 opacity-5 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      {/* ========================================== */}
      {/* NAVIGATION BAR */}
      {/* ========================================== */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 md:px-6 py-2.5 bg-white/[0.05] backdrop-blur-2xl rounded-full border border-white/[0.1] shadow-[0_0_30px_rgba(0,0,0,0.3)] max-w-[95vw] overflow-x-auto">
        <div className="flex gap-3 md:gap-6 items-center whitespace-nowrap relative z-10">
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
              onMouseEnter={() => setHoveredNav(item.id)} 
              onMouseLeave={() => setHoveredNav(null)} 
              className={`relative px-3 md:px-5 py-2 rounded-full transition-all duration-500 ${
                activeSection === item.id 
                  ? 'bg-white/[0.15] text-white shadow-inner' 
                  : hoveredNav === item.id 
                    ? 'bg-white/[0.08] text-white/90' 
                    : 'text-white/70 hover:text-white'
              }`}
            >
              <span className="relative z-10 text-xs md:text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

      {/* ========================================== */}
      {/* HERO SECTION - CUSTOMIZABLE */}
      {/* ========================================== */}
      <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden z-10 pt-32 pb-16">
        {/* Hero Background Image - Less blurred for better visibility */}
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.heroBackground} 
            alt="Background" 
            className="w-full h-full object-cover" 
            loading="eager"
          />
          {/* Reduced blur overlay for better background visibility */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black" />
        </div>
        
        <div className="relative z-10 max-w-4xl w-full mx-auto text-center flex flex-col items-center">
          {/* Profile Avatar - Clearly visible below navbar */}
          <div className="mb-8 animate-in" style={{ animationDelay: '0.1s' }}>
            <div className="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl mx-auto">
              <img 
                src={IMAGES.heroAvatar} 
                alt={PERSONAL_INFO.name} 
                className="w-full h-full object-cover" 
                loading="eager"
              />
            </div>
          </div>

          {/* Name and Description Card - More transparent glass effect */}
          <div className="w-full max-w-2xl px-6 py-8 bg-white/[0.03] backdrop-blur-xl rounded-3xl border border-white/[0.08] shadow-2xl mb-8 animate-in" style={{ animationDelay: '0.2s' }}>
            <h1 className="text-4xl md:text-6xl font-bold mb-3 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              {PERSONAL_INFO.name}
            </h1>
            <p className="text-base md:text-xl mb-6 text-white/90 font-light">
              {PERSONAL_INFO.tagline}
            </p>
            <p className="text-sm md:text-base leading-relaxed text-white/80 mb-4">
              {PERSONAL_INFO.bio1}
            </p>
            <p className="text-xs md:text-sm leading-relaxed text-white/70">
              {PERSONAL_INFO.bio2}
            </p>
          </div>

          {/* Keyword Tags */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 animate-in" style={{ animationDelay: '0.3s' }}>
            {keywords.map((keyword, idx) => (
              <div 
                key={idx} 
                className="group px-4 md:px-6 py-2 md:py-3 bg-white/[0.05] backdrop-blur-xl rounded-full border border-white/[0.08] hover:bg-white/[0.08] hover:scale-105 hover:border-white/[0.15] transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <keyword.icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform duration-500" />
                  <span className="font-medium text-xs md:text-sm">{keyword.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* SKILLS SECTION - IMPROVED VISIBILITY */}
      {/* ========================================== */}
      {activeSection === 'skills' && (
        <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 bg-black z-20 animate-in">
          <div className="w-full max-w-[1800px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              What I Do
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div 
                    key={skill.id} 
                    className="relative group cursor-pointer w-full" 
                    onMouseEnter={() => setHoveredSkill(skill.id)} 
                    onMouseLeave={() => setHoveredSkill(null)}
                  >
                    {/* Skill Card with Better Image Visibility */}
                    <div 
                      className="relative h-[60vh] min-h-[380px] rounded-3xl overflow-hidden border border-white/[0.05]" 
                      style={{ 
                        backgroundImage: `url(${IMAGES.skillBackgrounds[(skill.id - 1) % IMAGES.skillBackgrounds.length]})`, 
                        backgroundSize: 'cover', 
                        backgroundPosition: 'center' 
                      }}
                    >
                      {/* Minimal overlay - image clearly visible */}
                      <div className={`absolute inset-0 bg-gradient-to-t ${skill.gradient} ${hoveredSkill === skill.id ? 'opacity-40' : 'opacity-20'} transition-all duration-500`} />
                      
                      {/* Light blur only on hover - iOS 16 style */}
                      <div className={`absolute inset-0 ${hoveredSkill === skill.id ? 'backdrop-blur-sm' : 'backdrop-blur-0'} transition-all duration-500`} />
                      
                      {/* Bottom Label - Maximum transparency */}
                      <div className={`absolute bottom-0 inset-x-0 p-4 md:p-6 ${hoveredSkill === skill.id ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'} transition-all duration-700`}>
                        <div className="flex flex-col items-center gap-2 md:gap-3 bg-black/20 backdrop-blur-xl rounded-2xl p-3 md:p-4 border border-white/[0.06]">
                          <SkillIcon className="w-6 h-6 md:w-8 md:h-8" />
                          <h3 className="font-bold text-lg md:text-xl lg:text-2xl text-white drop-shadow-lg">{skill.title}</h3>
                        </div>
                      </div>
                      
                      {/* Hover Content */}
                      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 ${hoveredSkill === skill.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-500`}>
                        <div className="bg-black/30 backdrop-blur-lg rounded-3xl p-4 md:p-6 border border-white/[0.1] shadow-2xl w-full">
                          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <SkillIcon className="w-8 h-8 md:w-10 md:h-10" />
                            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">{skill.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {skill.items.map((item, idx) => (
                              <div 
                                key={idx} 
                                className="text-xs md:text-sm bg-white/[0.08] rounded-xl px-3 md:px-4 py-2 md:py-3 border border-white/[0.1] text-center font-medium hover:bg-white/[0.15] transition-all duration-300"
                                style={{ 
                                  transitionDelay: `${idx * 40}ms`, 
                                  animation: hoveredSkill === skill.id ? `slideUp 0.45s ease-out ${idx * 40}ms both` : 'none' 
                                }}
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
      )}

      {/* ========================================== */}
      {/* TOOLS & SOCIAL HANDLES SECTION */}
      {/* ========================================== */}
      {activeSection === 'tools' && (
        <section id="tools" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 bg-black z-20 animate-in">
          <div className="w-full max-w-[1800px] mx-auto">
            {/* Software Tools */}
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              My Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20">
              {tools.map((tool, idx) => (
                <div 
                  key={idx} 
                  className="group relative px-6 md:px-8 py-4 md:py-6 bg-white/[0.03] backdrop-blur-3xl rounded-2xl border border-white/[0.08] cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-white/[0.06] hover:shadow-2xl hover:border-white/[0.15]" 
                  onMouseEnter={() => setHoveredTool(tool.name)} 
                  onMouseLeave={() => setHoveredTool(null)}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  <div className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-500 relative z-10">{tool.icon}</div>
                  <div className="text-xs md:text-sm font-medium text-center relative z-10">{tool.name}</div>
                </div>
              ))}
            </div>
            
            {/* Social Media Handles */}
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Social Handles
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2 max-w-4xl mx-auto">
              {socialLinks.map((social, idx) => (
                <a 
                  key={idx} 
                  href={social.link} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="group relative p-6 md:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.08] hover:bg-white/[0.06] hover:scale-105 hover:border-white/[0.15] transition-all duration-500 text-center"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 rounded-3xl transition-opacity duration-500`} />
                  <social.icon className="w-10 h-10 md:w-12 md:h-12 mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  <div className="text-xs md:text-sm font-medium relative z-10 leading-tight">{social.name}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================== */}
      {/* GALLERY SECTION */}
      {/* ========================================== */}
      {activeSection === 'gallery' && (
        <section id="gallery" className="relative min-h-screen py-20 md:py-32 px-4 bg-black z-20 animate-in">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              My Work
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {IMAGES.gallery.map((image, idx) => (
                <div 
                  key={idx} 
                  className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.05] hover:border-white/[0.15] transition-all duration-500"
                >
                  <div className="w-full" style={{ paddingTop: '133%' }}>
                    <img 
                      src={image} 
                      alt={`Gallery ${idx + 1}`} 
                      loading="lazy" 
                      className="absolute inset-0 w-full h-full object-cover" 
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-sm transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/[0.1] backdrop-blur-xl rounded-xl px-4 py-2 border border-white/[0.1]">
                      <p className="text-sm font-medium">Photo {idx + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ========================================== */}
      {/* CONTACT SECTION */}
      {/* ========================================== */}
      {activeSection === 'contact' && (
        <section id="contact" className="relative min-h-screen py-20 md:py-32 px-4 bg-black z-20 animate-in">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">
              Let's Create Together
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Client Inquiry Form */}
              <div className="p-6 md:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                  <MessageCircle className="group-hover:scale-110 transition-transform duration-500" />
                  Client Inquiry
                </h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={clientForm.name} 
                    onChange={(e) => setClientForm({...clientForm, name: e.target.value})} 
                    className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30" 
                  />
                  <input 
                    type="email" 
                    placeholder="Your Email" 
                    value={clientForm.email} 
                    onChange={(e) => setClientForm({...clientForm, email: e.target.value})} 
                    className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30" 
                  />
                  <textarea 
                    placeholder="Tell me about your project..." 
                    rows="4" 
                    value={clientForm.message} 
                    onChange={(e) => setClientForm({...clientForm, message: e.target.value})} 
                    className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30 resize-none" 
                  />
                  <button 
                    onClick={handleClientSubmit} 
                    className="w-full px-6 py-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-xl rounded-2xl font-bold hover:scale-105 hover:from-purple-600 hover:to-pink-600 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 border border-white/[0.1]"
                  >
                    Send via WhatsApp
                  </button>
                </div>
              </div>

              {/* Quick Query Form */}
              <div className="p-6 md:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                  <Mail className="group-hover:scale-110 transition-transform duration-500" />
                  Quick Query
                </h3>
                <div className="space-y-4">
                  <input 
                    type="text" 
                    placeholder="Your Name" 
                    value={queryForm.name} 
                    onChange={(e) => setQueryForm({...queryForm, name: e.target.value})} 
                    className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30" 
                  />
                  <textarea 
                    placeholder="What would you like to know?" 
                    rows="6" 
                    value={queryForm.query} 
                    onChange={(e) => setQueryForm({...queryForm, query: e.target.value})} 
                    className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30 resize-none" 
                  />
                  <button 
                    onClick={handleQuerySubmit} 
                    className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-xl rounded-2xl font-bold hover:scale-105 hover:from-cyan-600 hover:to-blue-600 transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 border border-white/[0.1]"
                  >
                    Send Query
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ========================================== */}
      {/* FOOTER - Updated to remove kahin.door */}
      {/* ========================================== */}
      <footer className="relative py-12 px-4 border-t border-white/[0.05] bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 mb-4">© 2024 {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            {/* Only show main Instagram and WhatsApp */}
            <a 
              href="https://instagram.com/dhyey.237" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-white/80 transition-all duration-500 hover:scale-110"
              aria-label="Instagram"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a 
              href={`https://wa.me/${PERSONAL_INFO.phone}`} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-white/40 hover:text-white/80 transition-all duration-500 hover:scale-110"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;