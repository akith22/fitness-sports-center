import { useState } from 'react';
import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

interface ServiceModalData {
  title: string;
  description: string;
  details: string;
  image: string;
  icon: string;
}

const services: ServiceModalData[] = [
  {
    icon: 'person',
    title: 'Personal Training',
    description: 'One-on-one elite coaching focused on your specific mechanical needs and performance goals.',
    details: 'Our certified personal trainers design customized workout plans tailored to your body type, goals, and fitness level. Each session includes technique coaching, progressive overload programming, and regular performance assessments. You\'ll receive full accountability, nutrition advice, and access to pro-grade equipment throughout your journey.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiMjMeT6_Dy7MheyaLt66asCoHrHJyuyr1z1IAQn292vsUOJ2M7r28oP7xLWkWbeLxsq2Od9r0M67uP7pofsHQT-v6czSVwHJeuu_eadtvUt3xqBy6onam5xaK8mdguAtManmcfniMSa10M2v2DGgRNBfMVatgZOMSq26UakbCRqbZvk_-U7yi67egjQPwpXLTKv7Ok_IRxgX72-563uJrmBQJoZgqwoyDz2KWEqaUaln8HpQBviWZCYnbtxWJ1egooU_t9clEkns',
  },
  {
    icon: 'fitness_center',
    title: 'Strength Training',
    description: 'Advanced weightlifting and powerlifting programs designed to build raw power and solid foundation.',
    details: 'Our strength programs are built around the fundamental compound lifts — squat, bench, deadlift, and overhead press. Whether you\'re a beginner or elite powerlifter, we scale intensity through periodization cycles. Our facility houses competition-grade barbells, bumper plates, and adjustable racks to support your heaviest lifts safely.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBFtpqsSnHBUf7NXKJrUbxLgqjMJIHetdhTSLVbNUu2ipjJYi8683p9SqC53vC2xHG0dsYZYiK8WVhcI0v2LjovavnsIjG1FMlROjfCjMGNIjeSir89gy6sPib4AjhnUkavUosiJwxobVzqjcUpKpk6WLdGrJM9htLTJPDKufZus47QRcq9FOXX0HBMpBsWYLYFUGsnDfnILlNDI_HpYBxGgK5Pvczx0OACS36z7Hx1aBKxbgZ9dG5MB5sIOEoX55lLu5tKfbmfK8',
  },
  {
    icon: 'speed',
    title: 'Cardio Programs',
    description: 'High-intensity endurance training to maximize metabolic rate and improve cardiovascular efficiency.',
    details: 'From HIIT sprint intervals to zone-2 aerobic conditioning, our cardio programs are designed using VO2 max and heart rate zone principles. You\'ll work with coaches to build a sustainable endurance base, improve recovery speed, and burn fat efficiently. Equipment includes treadmills, assault bikes, rowing machines, and ski ergs.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBigvyxiHhxeOucWF7sni2Tsfo34g8rES0xBMSyHLK2fd7kwEj9DHv8kCqzrkm2OUkj87Px2Qa6l8XEgSr5PrAeLX539WQnYqIZy7M6QHr0q3-ifm71DYL3Wr6ayex2QW4L0nqiLlqjwv0nhKdI6z58NZcE-m3ko4ZGE0e77aXyJcF1rh-1TDzGCux5_dcqIHOyEE9eyXD4yqfhFh4RKcxeth-bdMa3NdYCKXY-miry-K6dGAzG2UoW4F_VI__5QNFcWulUAZEV_oU',
  },
  {
    icon: 'nutrition',
    title: 'Nutrition Guidance',
    description: 'Custom meal and fuel plans tailored to your biometric data and training volume.',
    details: 'Our in-house nutrition specialists create personalized meal plans based on your body composition, metabolic rate, and training intensity. We cover macronutrient timing, pre/post-workout fueling, supplementation, and habit-based behavioral coaching. Includes bi-weekly check-ins and meal prep sessions to keep you on track.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnJpp3oZGPO5khVAkrabFFTP6vkciWUbmCVUFHDk8QmM3qjkcaJF0Nxq8aNwHcCJbmb9NrjYpJuCPPhdzhGKqDFwP8gpS9tq8L02d0owDpgYXwkpazLAwVwvWCxgdZ1CY9UMQ9RI5RzTkGwYOBBs9unXfesWL1phNGzPjYow9fghoIMBHcWluAVdgK5_J4DHMtgZxHucczeRURSdbVbH012yfJCvO-tM8qPAG0ID-z4lR6z6bwYts8pDssY-dk8SIM8VStUFb5G5Q',
  },
];

const Services = () => {
  const [activeModal, setActiveModal] = useState<ServiceModalData | null>(null);

  return (
    <>
      <section id="services" className="mb-[96px] max-w-[1280px] mx-auto px-[16px] md:px-[40px] py-[48px]">
        <motion.div
          className="flex flex-col md:flex-row md:items-end justify-between mb-[48px] gap-[24px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="max-w-[672px]">
            <h2 className="text-[30px] leading-[36px] font-bold text-[#f1f5f9] mb-[16px]">Our Premium Services</h2>
            <p className="text-[#c8b993]">Tailored performance programs designed to help you dominate your fitness goals. From heavy lifts to precision nutrition, we have everything you need to succeed.</p>
          </div>
          <button className="flex items-center gap-[8px] text-[#d49e16] font-bold hover:underline transition-all duration-300">
            View All Services <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[24px]">
          {services.map((service) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: services.indexOf(service) * 0.1 }}
              viewport={{ once: true }}
              className="group bg-[#3d3623]/30 border border-[#3d3623] rounded-[12px] p-[4px] transition-all duration-300 hover:border-[#d49e16]/50 hover:scale-[1.02] hover:shadow-lg hover:shadow-[#d49e16]/10"
            >
              <div className="aspect-square w-full rounded-[8px] overflow-hidden mb-[16px] relative">
                <img
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  alt={service.title}
                  src={service.image}
                />
                <div className="absolute inset-[0px] bg-gradient-to-t from-[#211d11]/80 to-transparent opacity-60"></div>
              </div>
              <div className="p-[16px]">
                <div className="flex items-center gap-[8px] mb-[8px]">
                  <span className="material-symbols-outlined text-[#d49e16] text-[20px] leading-[28px]">{service.icon}</span>
                  <h3 className="text-[#f1f5f9] font-bold text-[18px] leading-[28px]">{service.title}</h3>
                </div>
                <p className="text-[#c8b993] text-[14px] leading-[20px] mb-[16px]">{service.description}</p>
                <button
                  onClick={() => setActiveModal(service)}
                  className="text-[#d49e16] text-[12px] leading-[16px] font-bold uppercase tracking-[0.1em] flex items-center gap-[4px] group-hover:gap-[8px] transition-all duration-300 hover:text-[#f1c44a]"
                >
                  Learn More <span className="material-symbols-outlined text-[14px] leading-[20px]">chevron_right</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Modal */}
      {activeModal && (
        <div
          className="fixed inset-[0px] bg-black/70 flex items-center justify-center z-50 p-[16px] animate-fade-in"
          onClick={() => setActiveModal(null)}
        >
          <div
            className="bg-[#1a1611] border border-[#3d3623] rounded-[16px] max-w-[560px] w-full overflow-hidden shadow-2xl animate-slide-up"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal image */}
            <div className="relative h-[220px] overflow-hidden">
              <img src={activeModal.image} alt={activeModal.title} className="w-full h-full object-cover" />
              <div className="absolute inset-[0px] bg-gradient-to-t from-[#1a1611] to-transparent"></div>
              {/* Close button */}
              <button
                onClick={() => setActiveModal(null)}
                className="absolute top-[16px] right-[16px] w-[36px] h-[36px] rounded-full bg-black/50 flex items-center justify-center text-[#f1f5f9] hover:bg-[#d49e16] hover:text-[#211d11] transition-all duration-300"
              >
                <span className="material-symbols-outlined text-[20px] leading-[28px]">close</span>
              </button>
            </div>
            {/* Modal content */}
            <div className="p-[28px]">
              <div className="flex items-center gap-[12px] mb-[16px]">
                <div className="w-[44px] h-[44px] rounded-[10px] bg-[#d49e16]/15 border border-[#d49e16]/30 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[#d49e16] text-[22px]">{activeModal.icon}</span>
                </div>
                <h3 className="text-[#f1f5f9] text-[22px] leading-[28px] font-bold">{activeModal.title}</h3>
              </div>
              <p className="text-[#c8b993] text-[15px] leading-[24px] mb-[24px]">{activeModal.details}</p>
              <div className="flex gap-[12px]">
                <button
                  onClick={() => { setActiveModal(null); scrollToSection('membership'); }}
                  className="flex-1 py-[12px] rounded-[8px] bg-[#d49e16] text-[#211d11] font-bold text-[14px] leading-[20px] hover:bg-[#f1c44a] transition-colors duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started
                </button>
                <button
                  onClick={() => setActiveModal(null)}
                  className="flex-1 py-[12px] rounded-[8px] border border-[#3d3623] text-[#c8b993] font-bold text-[14px] leading-[20px] hover:border-[#d49e16]/40 hover:text-[#f1f5f9] transition-all duration-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;
