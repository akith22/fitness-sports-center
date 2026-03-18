import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="grid grid-cols-1 lg:grid-cols-2 gap-[48px] items-center mb-[96px] max-w-[1280px] mx-auto px-[16px] md:px-[40px] py-[48px]">
      <motion.div
        className="order-2 lg:order-1"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="inline-block px-[12px] py-[4px] rounded-[9999px] bg-[#d49e16]/10 border border-[#d49e16]/20 text-[#d49e16] text-[12px] leading-[16px] font-bold uppercase tracking-[0.1em] mb-[16px]">
          Our Mission
        </div>
        <h1 className="text-[36px] leading-[40px] md:text-[48px] md:leading-[1] font-extrabold text-[#f1f5f9] mb-[24px]">
          Pushing Limits, <span className="text-[#d49e16]">Defining Strength</span>
        </h1>
        <p className="text-[#c8b993] text-[18px] leading-[28px] mb-[32px]">
          At Fitness Sports Center, our mission is to empower individuals to reach their peak physical potential through elite coaching, state-of-the-art facilities, and a community driven by strength and discipline. We don't just provide a gym; we provide a high-performance environment where athletes and enthusiasts alike transform their ambition into reality.
        </p>
        <div className="flex flex-wrap gap-[24px]">
          <div className="flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#d49e16]">verified</span>
            <span className="text-[#f1f5f9] font-medium">Certified Elite Coaches</span>
          </div>
          <div className="flex items-center gap-[12px]">
            <span className="material-symbols-outlined text-[#d49e16]">precision_manufacturing</span>
            <span className="text-[#f1f5f9] font-medium">Pro-Grade Equipment</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="order-1 lg:order-2"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        <div className="relative group">
          <div className="absolute -inset-[4px] bg-gradient-to-r from-[#d49e16] to-[#b45309] rounded-[12px] blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative aspect-video lg:aspect-square overflow-hidden rounded-[12px] bg-[#3d3623]">
            <img
              className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
              alt="Athletes training intensely in a high-end gym"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3WuPzxNgY8L5NDzXn3HF7C7wp66E1ZGjOOQVkNerO6TvG7_k0cN7PAjm-xhZ80gfJF8Fr4o-bjCgZtKEMafvBufXJsRIOYSLFxdptutjf594ZLqH1dfHb7Ue8fvPPKtnXhpLDQk442eLOOPvhwoQfG7A918dHI1q3ePQeOwdVa69GG_vjU6Ny2NyljGUJ0XMOKgDGdGSH7UR4F_R31DZQe8544YYLShkf5XIjPwKTHJK0lWsqZjpdzS3DS2uC3k_Oc3YpmGjuPys"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
