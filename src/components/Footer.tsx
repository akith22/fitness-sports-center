import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const Footer = () => {
  return (
    <footer className="border-t border-[#3d3623] bg-[#211d11] pt-[64px] pb-[32px] mt-auto w-full">
      <motion.div
        className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] grid grid-cols-1 md:grid-cols-4 gap-[48px] mb-[48px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <div className="col-span-1 md:col-span-2 flex flex-col gap-[16px]">
          <div className="flex items-center gap-[12px] text-[#d49e16] mb-[24px]">
            <span className="material-symbols-outlined text-[30px] leading-[36px]">fitness_center</span>
            <h2 className="text-[#f1f5f9] text-[20px] leading-[28px] font-bold tracking-tight">Fitness Sports Center</h2>
          </div>
          <p className="text-[#c8b993] max-w-[448px]">
            The ultimate destination for those who demand excellence from their training. Elite coaching, premium equipment, and a results-driven environment.
          </p>
        </div>
        <div>
          <h4 className="text-[#f1f5f9] font-bold mb-[24px]">Quick Links</h4>
          <ul className="space-y-[16px] text-[#c8b993] text-[14px] leading-[20px]">
            <li>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#d49e16] transition-colors text-left">Our Programs</button>
            </li>
            <li>
              {/* Coaches → #trainers */}
              <button onClick={() => scrollToSection('trainers')} className="hover:text-[#d49e16] transition-colors text-left">Coaches</button>
            </li>
            <li>
              {/* Pricing Plans → #membership */}
              <button onClick={() => scrollToSection('membership')} className="hover:text-[#d49e16] transition-colors text-left">Pricing Plans</button>
            </li>
            <li>
              <button onClick={() => scrollToSection('about')} className="hover:text-[#d49e16] transition-colors text-left">Gym Gallery</button>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-[#f1f5f9] font-bold mb-[24px]">Support</h4>
          <ul className="space-y-[16px] text-[#c8b993] text-[14px] leading-[20px]">
            <li><a className="hover:text-[#d49e16] transition-colors" href="#">Privacy Policy</a></li>
            <li><a className="hover:text-[#d49e16] transition-colors" href="#">Terms of Service</a></li>
            <li><a className="hover:text-[#d49e16] transition-colors" href="#">Member Rules</a></li>
            <li>
              {/* Contact Us → #contact */}
              <button onClick={() => scrollToSection('contact')} className="hover:text-[#d49e16] transition-colors text-left">Contact Us</button>
            </li>
          </ul>
        </div>
      </motion.div>
      <div className="max-w-[1280px] mx-auto px-[16px] md:px-[40px] pt-[32px] border-t border-[#3d3623]/50 flex flex-col md:flex-row justify-between items-center gap-[16px]">
        <p className="text-[#c8b993] text-[12px] leading-[16px]">© 2026 Fitness Sports Center. All rights reserved. Built for performance.</p>
        <div className="flex gap-[24px]">
          <a className="text-[#c8b993] hover:text-[#d49e16] transition-colors" href="#"><span className="material-symbols-outlined">social_leaderboard</span></a>
          <a className="text-[#c8b993] hover:text-[#d49e16] transition-colors" href="#"><span className="material-symbols-outlined">camera_enhance</span></a>
          <a className="text-[#c8b993] hover:text-[#d49e16] transition-colors" href="#"><span className="material-symbols-outlined">smart_display</span></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
