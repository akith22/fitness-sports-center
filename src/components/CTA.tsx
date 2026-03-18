import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const CTA = () => {
  return (
    <motion.section
      className="bg-[#d49e16] rounded-[16px] p-[32px] md:p-[64px] text-center max-w-[1280px] mx-auto px-[16px] md:px-[40px] mb-[96px] mt-[48px]"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <h2 className="text-[30px] leading-[36px] md:text-[48px] md:leading-[1] font-extrabold text-[#211d11] mb-[24px]">Ready to start your transformation?</h2>
      <p className="text-[#211d11]/80 text-[18px] leading-[28px] max-w-[672px] mx-auto mb-[40px]">
        Join our elite community today and get a complimentary 1-on-1 performance assessment with our head coach.
      </p>
      <div className="flex flex-col sm:flex-row gap-[16px] justify-center">
        <button
          onClick={() => scrollToSection('membership')}
          className="bg-[#211d11] text-[#ffffff] px-[32px] py-[16px] rounded-[8px] font-bold hover:bg-[#000000] transition-colors"
        >
          Join Membership
        </button>
        <button
          onClick={() => scrollToSection('facilities')}
          className="bg-transparent border-2 border-[#211d11] text-[#211d11] px-[32px] py-[16px] rounded-[8px] font-bold hover:bg-[#211d11] hover:text-[#ffffff] transition-all"
        >
          Tour Facilities
        </button>
      </div>
    </motion.section>
  );
};

export default CTA;
