import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const trainers = [
  {
    name: 'Vihen Fernando',
    role: 'Strength Coach',
    desc: '10+ years experience in powerlifting and high-performance strength conditioning.',
    image: '/trainers/strength.png',
  },
  {
    name: 'Kenulya Perera',
    role: 'Nutrition Expert',
    desc: 'Certified clinical nutritionist helping you fuel your athletic performance and daily energy.',
    image: '/trainers/nutrition.png',
  },
  {
    name: 'Marcus Jayawardane',
    role: 'HIIT Specialist',
    desc: 'High-energy coach focused on explosive movements, fat loss, and cardiovascular endurance.',
    image: '/trainers/HIT.png',
  },
  {
    name: 'Nuvidi Dissanayake',
    role: 'Yoga & Mobility',
    desc: 'Specializing in recovery, flexibility, and mind-body balance to enhance your overall movement.',
    image: '/trainers/yoga.png',
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="w-full bg-[#211d11] border-t border-[#3d3623]">
      <div className="mx-auto w-full max-w-[1280px] px-[24px] py-[64px] lg:px-[40px]">

        {/* Header */}
        <motion.div
          className="mb-[48px] flex flex-col gap-[16px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block w-fit px-[12px] py-[4px] rounded-[9999px] bg-[#d49e16]/10 text-[#d49e16] text-[12px] font-bold uppercase tracking-[0.15em]">
            Our Team
          </span>
          <h2 className="text-[36px] font-black tracking-tight text-[#f1f5f9] lg:text-[48px] leading-tight">
            Meet Our Trainers
          </h2>
          <p className="max-w-[672px] text-[18px] text-[#d49e16]/70 leading-relaxed">
            Our world-class instructors are here to guide your fitness journey with expert knowledge and personalized motivation.
          </p>
        </motion.div>

        {/* Trainer Cards Grid */}
        <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4 mb-[80px]">
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: trainers.indexOf(trainer) * 0.1 }}
              viewport={{ once: true }}
              className="group flex flex-col overflow-hidden rounded-[12px] bg-[#d49e16]/5 border border-[#d49e16]/10 transition-all duration-300 hover:shadow-xl hover:shadow-[#d49e16]/5 hover:border-[#d49e16]/30"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={trainer.name}
                  src={trainer.image}
                />
              </div>
              <div className="flex flex-1 flex-col p-[24px]">
                <div className="mb-[16px]">
                  <h3 className="text-[20px] font-bold text-[#f1f5f9]">{trainer.name}</h3>
                  <p className="text-[14px] font-semibold text-[#d49e16]">{trainer.role}</p>
                </div>
                <p className="mb-[24px] text-[14px] text-[#94a3b8] leading-relaxed flex-grow">
                  {trainer.desc}
                </p>
                <div className="mt-auto flex gap-[12px]">
                  {/* Mail → scroll to contact section */}
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[9999px] bg-[#d49e16]/10 text-[#d49e16] hover:bg-[#d49e16] hover:text-[#211d11] hover:scale-110 transition-all duration-200"
                    aria-label="Contact us"
                  >
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <section className="rounded-[16px] bg-gradient-to-br from-[#d49e16] to-[#b8880e] p-[32px] lg:p-[64px]">
          <div className="mx-auto max-w-[768px] text-center">
            <h2 className="text-[30px] font-black text-[#211d11] lg:text-[40px] leading-tight">
              Ready to start training?
            </h2>
            <p className="mt-[16px] text-[#211d11]/80 text-[18px] leading-relaxed">
              Book a personal session with one of our experts today and take the first step toward your goals.
            </p>
            <div className="mt-[40px] flex flex-wrap justify-center gap-[16px]">
              <button className="rounded-[8px] bg-[#211d11] px-[32px] py-[16px] text-[13px] font-bold uppercase tracking-[0.1em] text-[#d49e16] shadow-lg transition-transform hover:-translate-y-[2px] hover:shadow-xl"
                onClick={() => scrollToSection('trainers')}
              >
                Book a Session
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="rounded-[8px] border-2 border-[#211d11] px-[32px] py-[16px] text-[13px] font-bold uppercase tracking-[0.1em] text-[#211d11] transition-colors hover:bg-[#211d11]/10"
              >
                Contact Us
              </button>
            </div>
          </div>
        </section>

      </div>
    </section>
  );
};

export default Trainers;
