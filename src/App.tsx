/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Coffee, MapPin, Clock, Instagram, Mail, ChevronRight } from "lucide-react";
import { useEffect, useState } from "react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-glass-ink/10 relative overflow-x-hidden">
      {/* Decorative background element */}
      <div className="fixed -bottom-24 -right-24 w-[500px] h-[500px] bg-glass-deco rounded-full opacity-30 blur-3xl pointer-events-none z-0" />

      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-8 py-6 flex justify-between items-center ${
          scrolled ? "bg-white/40 backdrop-blur-xl py-4 shadow-sm border-b border-white/30" : "bg-transparent"
        }`}
      >
        <div className="flex items-center space-x-2">
          <span className="text-xl font-serif tracking-[0.2em] font-light border-b border-glass-ink pb-1">和寂咖啡</span>
          <span className="text-[10px] tracking-[0.3em] uppercase text-glass-clay mt-1 ml-2">Wa-Ji Coffee</span>
        </div>
        
        <div className="hidden md:flex space-x-12">
          {["品牌理念", "特選菜單", "空間預約", "聯絡我們"].map((item) => (
            <a 
              key={item} 
              href={`#${item}`} 
              className="text-sm tracking-widest text-glass-ink/80 hover:text-glass-ink transition-colors"
            >
              {item}
            </a>
          ))}
        </div>

        <button className="border border-glass-ink px-6 py-2 text-xs tracking-[0.2em] hover:bg-glass-ink hover:text-white transition-all uppercase">
          Menu
        </button>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center px-8 md:px-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.9, scale: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-[120px] right-[5%] md:right-[10%] w-[40%] md:w-[450px] aspect-[4/5] z-0 hidden lg:block"
        >
          <div className="w-full h-full glass-panel overflow-hidden border-2 border-white/30">
            <img 
              src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=800" 
              alt="Artisan Coffee" 
              className="w-full h-full object-cover opacity-80 mix-blend-multiply transition-transform duration-[3s] hover:scale-110"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>

        <div className="relative z-10 w-full max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="glass-panel p-10 md:p-16 border-white/60"
          >
            <h1 className="text-5xl md:text-7xl font-serif text-glass-ink-focus mb-8 leading-tight italic">
              Quiet<br />Moments
            </h1>
            <p className="text-glass-clay text-lg tracking-[0.1em] font-light max-w-md leading-relaxed mb-10">
              在繁雜的城市角落，
              <br />
              尋找一份屬於自己的寧靜。
              <br />
              原味、質樸、溫暖。
            </p>
            <a href="#特選菜單" className="inline-block border border-glass-ink px-10 py-4 text-xs tracking-[0.3em] hover:bg-glass-ink hover:text-white transition-all uppercase">
              探索菜單 EXPLORE
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-12"
        >
          <div className="w-[1px] h-16 bg-glass-ink/30 animate-pulse" />
        </motion.div>
      </section>

      {/* Philosophy Section */}
      <section id="品牌理念" className="py-32 px-8 max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass-panel p-2 overflow-hidden rotate-[-2deg]"
          >
            <img 
              src="https://images.unsplash.com/photo-1447933630913-bb79912e47b5?auto=format&fit=crop&q=80&w=800" 
              alt="Philosophy" 
              className="w-full h-[500px] object-cover rounded-[2px]"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div variants={fadeIn}>
              <span className="text-glass-tertiary text-xs tracking-[0.4em] uppercase block mb-4">Our Essence</span>
              <h2 className="text-4xl font-serif tracking-[0.1em] leading-relaxed text-glass-ink-focus italic">
                恰到好處的豐富，
                <br />
                來自極簡。
              </h2>
            </motion.div>
            
            <motion.p variants={fadeIn} className="text-glass-clay leading-loose tracking-[0.05em] text-sm italic border-l-2 border-glass-deco pl-6">
              「和寂」取自日本美學中「侘寂」的精神，強調不完美中的美，以及歲月痕跡裡的力量。
              在我們這裡，咖啡不只是飲品，而是一段靜下心來的旅程。
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Menu Highlight */}
      <section id="特選菜單" className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <span className="text-glass-clay text-xs tracking-[0.4em] uppercase block mb-4">The Selection</span>
            <h2 className="text-4xl font-serif tracking-[0.2em] italic">特選系列</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                title: "手沖原豆",
                desc: "嚴選衣索比亞、哥倫比亞等單一產區豆，呈現迷人的原始風味層次。",
                image: "https://images.unsplash.com/photo-1544787210-282aa305bc61?auto=format&fit=crop&q=80&w=600",
                price: "NT$ 180"
              },
              {
                title: "和寂經典",
                desc: "我們秘製的淺深烘焙比例，入口溫潤帶有深邃的可可香氣與柔和酸度。",
                image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&q=80&w=600",
                price: "NT$ 160"
              },
              {
                title: "手作菓實",
                desc: "依時令食材製作的日式甜點，甜度適中，完美襯托咖啡的韻味。",
                image: "https://images.unsplash.com/photo-1579372781878-66848607dbad?auto=format&fit=crop&q=80&w=600",
                price: "NT$ 140"
              }
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2, duration: 0.8 }}
                className="glass-panel p-4 group"
              >
                <div className="aspect-square overflow-hidden mb-6 rounded-sm">
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex justify-between items-baseline mb-4 px-2">
                  <h3 className="text-lg font-serif tracking-widest text-glass-ink-focus">{item.title}</h3>
                  <span className="text-glass-tertiary text-xs font-light">{item.price}</span>
                </div>
                <p className="text-glass-clay text-xs leading-relaxed tracking-wide px-2 italic">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <footer id="聯絡我們" className="py-24 px-8 border-t border-glass-ink/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-16">
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] font-bold text-glass-ink uppercase mb-6">Location</h4>
            <p className="text-sm text-glass-clay leading-loose">
              台北市中山區民生東路三段 12 號<br />
              <span className="text-[11px] opacity-60 uppercase">12nd Minsheng E. Rd, Taipei</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] font-bold text-glass-ink uppercase mb-6">Hours</h4>
            <p className="text-sm text-glass-clay leading-loose">
              平日 08:30 — 18:00<br />
              週末 10:00 — 19:00
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-xs tracking-[0.2em] font-bold text-glass-ink uppercase mb-6">Contact</h4>
            <p className="text-sm text-glass-clay leading-loose">
              +886 2 2712 0000<br />
              <span className="border-b border-glass-deco italic lowercase transition-colors hover:text-glass-ink">hello@muji-coffee.tw</span>
            </p>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto mt-24 flex justify-between items-center text-[10px] tracking-[0.2em] text-glass-tertiary">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-serif tracking-widest font-light">和寂咖啡</span>
          </div>
          <p>© 2026 WA-JI COFFEE. ALL RIGHTS RESERVED.</p>
        </div>
      </footer>
    </div>
  );
}

