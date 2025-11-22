import React, { useState, useEffect } from 'react';
import { Camera, Film, Palette, Aperture, Instagram, MessageCircle, Mail, ExternalLink, Sparkles, Zap, Star, Award, Video, FileImage, Monitor, Heart } from 'lucide-react';

// Local image imports (from `src/Images`)
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

// Centralized image references so you can change them in one place
const IMAGES = {
  heroBackground: heroBg,
  heroAvatar: heroAvatar,
  skillBackgrounds: [skill1, skill2, skill3, skill4],
  gallery: [g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14, g15, g16, g17, g18]
};

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [hoveredTool, setHoveredTool] = useState(null);
  const [scrollY, setScrollY] = useState(0);
  const [clientForm, setClientForm] = useState({ name: '', email: '', message: '' });
  const [queryForm, setQueryForm] = useState({ name: '', query: '' });
  const [hoveredNav, setHoveredNav] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    // only track scroll for now — remove mouse/click visual effects which looked cheap

    window.addEventListener('scroll', handleScroll);
    // no mousemove/click handlers anymore
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // cleaned up
    };
  }, []);

  const scrollToSection = (id) => {
    setActiveSection(id);
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 100);
  };

  const handleClientSubmit = () => {
    const message = `New Client Inquiry:\nName: ${clientForm.name}\nEmail: ${clientForm.email}\nMessage: ${clientForm.message}`;
    window.open(`https://wa.me/919879672277?text=${encodeURIComponent(message)}`, '_blank');
    setClientForm({ name: '', email: '', message: '' });
  };

  const handleQuerySubmit = () => {
    const message = `Quick Query:\nName: ${queryForm.name}\nQuery: ${queryForm.query}`;
    window.open(`https://wa.me/919879672277?text=${encodeURIComponent(message)}`, '_blank');
    setQueryForm({ name: '', query: '' });
  };

  const skills = [
    { id: 1, title: 'Skills', items: ['Video Editing', 'Color Grading', 'Storytelling', 'Photography', 'Cinematography', 'Motion Graphics', 'Audio Design'], icon: Sparkles, gradient: 'from-blue-500/20 via-cyan-500/20 to-blue-600/20' },
    { id: 2, title: 'Services', items: ['Corporate Videos', 'Wedding Films', 'Product Photography', 'Social Media Content', 'Brand Storytelling', 'Event Coverage'], icon: Star, gradient: 'from-purple-500/20 via-pink-500/20 to-purple-600/20' },
    { id: 3, title: 'Gears', items: ['Sony A7 III', 'DJI Ronin', 'Godox Lighting', 'Rode Mic', 'MacBook Pro', 'Color Grading Monitor'], icon: Camera, gradient: 'from-emerald-500/20 via-teal-500/20 to-green-600/20' },
    { id: 4, title: 'Tools', items: ['Adobe Premiere Pro', 'After Effects', 'Photoshop', 'Lightroom', 'DaVinci Resolve', 'Final Cut Pro', 'CapCut', 'VN Editor'], icon: Monitor, gradient: 'from-orange-500/20 via-amber-500/20 to-red-500/20' }
  ];

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

  const socialLinks = [
    { name: 'Instagram @dhyey.237', icon: Instagram, link: 'https://instagram.com/dhyey.237', gradient: 'from-purple-600/30 to-pink-700/30' },
    { name: 'Instagram @kahin.door', icon: Instagram, link: 'https://instagram.com/kahin.door', gradient: 'from-orange-600/30 to-red-700/30' },
    { name: 'Upwork', icon: ExternalLink, link: '#', gradient: 'from-green-600/30 to-emerald-700/30' },
    { name: 'Stock Images', icon: FileImage, link: '#', gradient: 'from-blue-600/30 to-cyan-700/30' },
    { name: 'WhatsApp', icon: MessageCircle, link: 'https://wa.me/919879672277', gradient: 'from-green-700/30 to-green-600/30' }
  ];

  const keywords = [
    { name: 'Video Editing', icon: Video },
    { name: 'Color Grading', icon: Palette },
    { name: 'Storytelling', icon: Film },
    { name: 'Photography', icon: Camera },
    { name: 'Cinematography', icon: Aperture },
    { name: 'Motion Graphics', icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      <style>{`
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* decorative blobs behind content; push them behind everything so hero BG is visible */}
      <div className="fixed inset-0 opacity-5 -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-600 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl" />
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-3xl" />
      </div>

      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 px-4 md:px-6 py-2.5 bg-white/[0.05] backdrop-blur-2xl rounded-full border border-white/[0.1] shadow-[0_0_30px_rgba(0,0,0,0.3)] max-w-[95vw] overflow-x-auto before:absolute before:inset-0 before:rounded-full before:bg-gradient-to-b before:from-white/[0.12] before:to-transparent before:pointer-events-none before:z-0">
        <div className="flex gap-3 md:gap-6 items-center whitespace-nowrap relative z-10">
          {[{ id: 'hero', label: 'Home' }, { id: 'skills', label: 'Skills' }, { id: 'tools', label: 'Handles' }, { id: 'gallery', label: 'Gallery' }, { id: 'contact', label: 'Contact' }].map((item) => (
            <button key={item.id} onClick={() => scrollToSection(item.id)} onMouseEnter={() => setHoveredNav(item.id)} onMouseLeave={() => setHoveredNav(null)} className={`relative px-3 md:px-5 py-2 rounded-full transition-all duration-500 group overflow-hidden ${activeSection === item.id ? 'bg-white/[0.12] text-white shadow-inner' : hoveredNav === item.id ? 'bg-white/[0.08] text-white/90' : 'text-white/70 hover:text-white'}`}>
              <div className={`absolute inset-0 bg-gradient-to-b from-white/[0.15] to-transparent backdrop-blur-xl rounded-full transition-all duration-500 ${hoveredNav === item.id ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} />
              <span className="relative z-10 text-xs md:text-sm font-medium">{item.label}</span>
            </button>
          ))}
        </div>
      </nav>

  <section id="hero" className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden z-10 pt-32"> {/* top padding for navbar spacing */}
          <div className="absolute inset-0 z-0">
            {/* hero background sits above decorative blobs (-z) but below navbar and main content */}
            <img src={IMAGES.heroBackground} alt="Background" className="w-full h-full object-cover" loading="lazy" decoding="async" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
            <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black" />
          </div>
        
        <div className="relative z-10 max-w-6xl w-full mx-auto text-center flex flex-col items-center">
            <div className="w-full max-w-3xl relative">
            {/* Avatar overlaps the top of the card for an aesthetic look */}
            <div className="absolute left-1/2 -translate-x-1/2 -top-28">
              <div className="w-40 h-40 md:w-72 md:h-72 rounded-full overflow-hidden border border-white/[0.08] backdrop-blur-3xl shadow-2xl bg-black">
                <img src={IMAGES.heroAvatar} alt="Dhyey Patel" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              </div>
            </div>

            <div className="pt-32 px-6 pb-8 bg-white/[0.05] backdrop-blur-2xl rounded-3xl border border-white/[0.1] shadow-[0_0_50px_rgba(0,0,0,0.3)] mb-12 mx-auto relative z-20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-b before:from-white/[0.12] before:to-transparent before:pointer-events-none overflow-hidden group hover:bg-white/[0.08] transition-all duration-700" style={{ backdropFilter: 'saturate(120%) blur(6px)' }}>
              {/* iOS 16 style light effect */}
              <div className="absolute -inset-[500px] bg-gradient-radial from-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl"/>
              <div className="absolute -inset-[500px] bg-gradient-radial from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-3xl" style={{ transform: 'translate(50%, 0)' }}/>
              
              <div className="relative z-10">
                <h1 className="text-5xl md:text-7xl font-bold mb-2 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">Dhyey Patel</h1>
                <p className="text-lg md:text-2xl mb-6 text-white/80 font-light">Video Editor | Photographer | Storyteller</p>
                <p className="text-base leading-relaxed text-white/70">Crafting visual stories that captivate and inspire. With a passion for cinematography and an eye for detail, I transform moments into timeless memories through the art of video editing and photography.</p>
                <p className="text-sm leading-relaxed text-white/60 mt-4">Specializing in color grading, motion graphics, and creative storytelling. Every frame tells a story, and I'm here to make yours unforgettable.</p>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-8 relative z-30">
            {keywords.map((keyword, idx) => (
              <div key={idx} className="group px-6 py-3 bg-white/[0.03] backdrop-blur-3xl rounded-full border border-white/[0.08] hover:bg-white/[0.06] hover:backdrop-blur-2xl hover:scale-110 hover:border-white/[0.15] transition-all duration-500 cursor-pointer relative overflow-hidden">
                <div className="absolute inset-0 bg-white/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center gap-2 relative z-10">
                  <keyword.icon className="w-5 h-5 group-hover:scale-125 transition-transform duration-500" />
                  <span className="font-medium text-sm">{keyword.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {activeSection === 'skills' && (
        <section id="skills" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 animate-in fade-in slide-in-from-right duration-700 bg-black z-20">
          <div className="w-full max-w-[1800px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">What I Do</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 px-2">
              {skills.map((skill) => {
                const SkillIcon = skill.icon;
                return (
                  <div key={skill.id} className="relative group cursor-pointer w-full" onMouseEnter={() => setHoveredSkill(skill.id)} onMouseLeave={() => setHoveredSkill(null)}>
                    <div className="relative h-[60vh] min-h-[380px] rounded-3xl overflow-hidden border border-white/[0.05]" style={{ backgroundImage: `url(${IMAGES.skillBackgrounds[(skill.id - 1) % IMAGES.skillBackgrounds.length]})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                      <div className={`absolute inset-0 bg-gradient-to-t ${skill.gradient} ${hoveredSkill === skill.id ? 'opacity-55' : 'opacity-30'} transition-all duration-500`} />
                      <div className={`absolute inset-0 ${hoveredSkill === skill.id ? 'backdrop-blur-md' : 'backdrop-blur-sm'} transition-all duration-500`} />
                      <div className={`absolute bottom-0 inset-x-0 p-4 md:p-6 ${hoveredSkill === skill.id ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'} transition-all duration-700 ease-out`}>
                        <div className="flex flex-col items-center gap-2 md:gap-3 bg-black/30 backdrop-blur-2xl rounded-2xl p-3 md:p-4 border border-white/[0.08]">
                          <SkillIcon className="w-6 h-6 md:w-8 md:h-8" />
                          <h3 className="font-bold text-lg md:text-xl lg:text-2xl">{skill.title}</h3>
                        </div>
                      </div>
                      <div className={`absolute inset-0 flex flex-col items-center justify-center p-4 md:p-6 ${hoveredSkill === skill.id ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-95 translate-y-6'} transition-all duration-500 ease-out`}>
                        <div className="bg-black/40 backdrop-blur-md rounded-3xl p-4 md:p-6 border border-white/[0.12] shadow-2xl w-full transform transition-all duration-500">
                          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                            <SkillIcon className="w-8 h-8 md:w-10 md:h-10 animate-pulse" />
                            <h3 className="font-bold text-xl md:text-2xl lg:text-3xl">{skill.title}</h3>
                          </div>
                          <div className="space-y-2">
                            {skill.items.map((item, idx) => (
                              <div key={idx} className="text-xs md:text-sm bg-white/[0.06] rounded-xl px-3 md:px-4 py-2 md:py-3 border border-white/[0.08] text-center font-medium hover:bg-white/[0.12] hover:scale-102 transition-all duration-300" style={{ transitionDelay: `${idx * 40}ms`, animation: hoveredSkill === skill.id ? `slideUp 0.45s ease-out ${idx * 40}ms both` : 'none' }}>{item}</div>
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

      {activeSection === 'tools' && (
        <section id="tools" className="relative min-h-screen flex items-center justify-center py-20 md:py-32 px-4 animate-in fade-in slide-in-from-right duration-700 bg-black z-20">
          <div className="w-full max-w-[1800px] mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">My Tools</h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-16 md:mb-20">
              {tools.map((tool, idx) => (
                <div key={idx} className="group relative px-6 md:px-8 py-4 md:py-6 bg-white/[0.03] backdrop-blur-3xl rounded-2xl border border-white/[0.08] cursor-pointer transition-all duration-500 hover:scale-110 md:hover:scale-125 hover:bg-white/[0.06] hover:backdrop-blur-2xl hover:shadow-2xl hover:z-10 hover:border-white/[0.15] overflow-hidden" onMouseEnter={() => setHoveredTool(tool.name)} onMouseLeave={() => setHoveredTool(null)}>
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500`} />
                  <div className="text-4xl md:text-5xl mb-2 group-hover:scale-110 transition-transform duration-500 relative z-10">{tool.icon}</div>
                  <div className={`text-xs md:text-sm font-medium text-center transition-all duration-500 relative z-10 ${hoveredTool === tool.name ? 'text-base md:text-lg' : ''}`}>{tool.name}</div>
                </div>
              ))}
            </div>
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Social Handles</h2>
            <div className="grid grid-cols-5 gap-2 md:gap-4 lg:gap-6 px-2">
              {socialLinks.map((social, idx) => (
                <a key={idx} href={social.link} target="_blank" rel="noopener noreferrer" className="group relative p-3 md:p-6 lg:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-2xl md:rounded-3xl border border-white/[0.08] hover:bg-white/[0.06] hover:backdrop-blur-2xl hover:scale-105 hover:border-white/[0.15] transition-all duration-500 text-center overflow-hidden w-full">
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                  <social.icon className="w-6 h-6 md:w-10 md:h-10 lg:w-12 lg:h-12 mx-auto mb-2 md:mb-3 lg:mb-4 group-hover:scale-110 transition-transform duration-500 relative z-10" />
                  <div className="text-[8px] md:text-xs lg:text-sm font-medium relative z-10 leading-tight">{social.name}</div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'gallery' && (
        <section id="gallery" className="relative min-h-screen py-20 md:py-32 px-4 bg-black z-20 animate-in fade-in slide-in-from-right duration-700">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-12 md:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">My Work</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {Array.from({ length: 24 }).map((_, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden cursor-pointer border border-white/[0.05] hover:border-white/[0.15] transition-all duration-500">
                  {/* Use portrait ratio: 3:4 (height greater than width) */}
                  <div className="w-full" style={{ paddingTop: '133%' }}>
                    <img src={`${IMAGES.gallery[idx % IMAGES.gallery.length]}?w=800`} alt={`Gallery ${idx + 1}`} loading="lazy" decoding="async" className="absolute inset-0 w-full h-full object-cover" style={{ position: 'absolute', top: 0, left: 0 }} />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute inset-0 backdrop-blur-0 group-hover:backdrop-blur-md transition-all duration-500" />
                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="bg-white/[0.08] backdrop-blur-xl rounded-xl px-4 py-2 border border-white/[0.1]">
                      <p className="text-sm font-medium">Photo {idx + 1}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {activeSection === 'contact' && (
        <section id="contact" className="relative min-h-screen py-20 md:py-32 px-4 bg-black z-20 animate-in fade-in slide-in-from-right duration-700">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-bold text-center mb-8 md:mb-12 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Let's Create Together</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 md:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 group">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                  <MessageCircle className="group-hover:scale-110 transition-transform duration-500" />
                  Client Inquiry
                </h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" value={clientForm.name} onChange={(e) => setClientForm({...clientForm, name: e.target.value})} className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30" />
                  <input type="email" placeholder="Your Email" value={clientForm.email} onChange={(e) => setClientForm({...clientForm, email: e.target.value})} className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30" />
                  <textarea placeholder="Tell me about your project..." rows="4" value={clientForm.message} onChange={(e) => setClientForm({...clientForm, message: e.target.value})} className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30 resize-none" />
                  <button onClick={handleClientSubmit} className="w-full px-6 py-4 bg-gradient-to-r from-purple-600/80 to-pink-600/80 backdrop-blur-xl rounded-2xl font-bold hover:scale-105 hover:from-purple-600 hover:to-pink-600 transition-all duration-500 shadow-lg hover:shadow-purple-500/30 border border-white/[0.1]">Send via WhatsApp</button>
                </div>
              </div>

              <div className="p-6 md:p-8 bg-white/[0.03] backdrop-blur-3xl rounded-3xl border border-white/[0.08] hover:bg-white/[0.05] hover:border-white/[0.12] transition-all duration-500 group">
                <h3 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6 flex items-center gap-3">
                  <Mail className="group-hover:scale-110 transition-transform duration-500" />
                  Quick Query
                </h3>
                <div className="space-y-4">
                  <input type="text" placeholder="Your Name" value={queryForm.name} onChange={(e) => setQueryForm({...queryForm, name: e.target.value})} className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30" />
                  <textarea placeholder="What would you like to know?" rows="6" value={queryForm.query} onChange={(e) => setQueryForm({...queryForm, query: e.target.value})} className="w-full px-6 py-4 bg-white/[0.03] backdrop-blur-2xl rounded-2xl border border-white/[0.08] focus:border-white/[0.2] focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/[0.1] transition-all duration-500 placeholder-white/30 resize-none" />
                  <button onClick={handleQuerySubmit} className="w-full px-6 py-4 bg-gradient-to-r from-cyan-600/80 to-blue-600/80 backdrop-blur-xl rounded-2xl font-bold hover:scale-105 hover:from-cyan-600 hover:to-blue-600 transition-all duration-500 shadow-lg hover:shadow-cyan-500/30 border border-white/[0.1]">Send Query</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <footer className="relative py-12 px-4 border-t border-white/[0.05]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-white/40 mb-4">© 2024 Dhyey Patel. All rights reserved.</p>
          <div className="flex justify-center gap-6">
            <a href="https://instagram.com/dhyey.237" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/80 transition-all duration-500 hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://instagram.com/kahin.door" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/80 transition-all duration-500 hover:scale-110">
              <Instagram className="w-6 h-6" />
            </a>
            <a href="https://wa.me/919879672277" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white/80 transition-all duration-500 hover:scale-110">
              <MessageCircle className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;