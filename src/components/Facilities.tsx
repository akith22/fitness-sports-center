import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const facilities = [
  {
    icon: 'exercise',
    title: 'Modern Gym Equipment',
    desc: 'Premium, ergonomically designed machines for all fitness levels, from beginner to pro.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDrWRPqCn40cDCG_WxLPcDeuugURQxOzmcAS-SHEh228NJ863mjIUwj3SKP3lglm3OHVza8qMNwDuH7Y6XKoSUsEjuhMqfoH3ZIFAq7aSiLjSYWFqXd5BmYaWeuN2IS907COi9wAUqIBwGywgcmJW8ByP68-2zY4mrxczTOFDUhEs2uJMGVytykzLKrHjKdfKheFOQ_kWNjycEnl9yj4FXE3MexUARn4UI0OFYheZh79D-Zrb8bICX9U1ijIFxyVQn_QPdCfoJQjqE',
  },
  {
    icon: 'directions_run',
    title: 'Cardio Zone',
    desc: 'High-end treadmills, rowers, and elliptical trainers equipped with the latest tracking tech.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCf0G0mEbTkcv2U-uWF5uBoL_Mb49bEN1asAsyoWm4R6yTAYUnfw_kIilXn2tu5ETQcX7LRhXGP6kc008LPvkQHKDPaYGhNA8w2ClQz4NqkO1XBI2vuqFFXkw7Oq8iMyryt3gLFUONMENwT0gJw5XA6Yg-1lHp34mOLx4YzrWnN9_8_oFN3Qdl7LdsBJPE_43iSc3mwQmJkCgTtoSUohDo4Gn5BuoFRQbPuNc5ni-JVPT-7sHupllKPDoSHvMEO2hrNGff3dQupVI0',
  },
  {
    icon: 'weight',
    title: 'Strength Training Area',
    desc: 'Dedicated space with Olympic bars, free weights, and power racks for maximum gains.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDn5JvXL6us557fzkw6wgEc5Lk8UiMiDTzWe529684d0SNuzQiGuUEq8c8Q6Li--UThULw51DgKsMSxdLAmC5Vbv6kA4Zu_BZChMKsv4km8eR3jiRRAivfIoRm976k_UAUpOJztPWVlnjzpXL9W53NvJ3OaVdTgpsxi-m1-IPkjMxhkR_PZ-c3WvNaVHaVC0QP2zhiGKkEcjrWC1sI9ja295a50N5hsnrmUPrdns6I5B02UqwQdf3eUDcp2aSBh_6xiHvSAs_W96AE',
  },
  {
    icon: 'co_present',
    title: 'Personal Training Rooms',
    desc: 'Private and semi-private spaces for focused one-on-one sessions with our expert coaches.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBrfce5g-MADEqZV-8KI6qJRUKZ_1pHykztYhwj-i04uXb8B4pTzd2jnyF4cq4TOKplLZ9tXat9iB38GoPYNHG3DBtIdbnrO6kEg64hlnyn8Z3vyDog8WByR5egWTDGVSwRyr_DRG_i0CFu-93BwOvF2xzQGTpA70NGUfRU9-EIbyj_v1UVWvRB3tk-6v2-7a68-4h_WEKPmDKFptji18cTZTBmijANDjzavuznlqZNBtBs_KTWA88Ia3B5yW-IJmXZfva1RQIHIHQ',
  },
  {
    icon: 'shower',
    title: 'Locker Rooms',
    desc: 'Luxury amenities, rain showers, and secure storage to refresh and recharge after your workout.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOCtnlpz4zswbtkp9wIQzsdtmEdArVfW-O4CAIE2U8JDdpu8_9o7vVLS7b8IWkI32dqW2of4E9G2MsvUw8U-NoyB2m8YSMCxj3ZuiIEGwf4GH80WDaO2TzgR2hTnEhgVrQLbwE1dq9npnZ-XP-OYbpxMFKhOh2-MCXXwmc9EG1naypXI1bAU85hQ0bfPcLbtV_tYFS0QixxYG1Jpj-b3NzjrqITpfFnClqz1iFrGOrygflKh1dvHzh9-wLGi0eD4Rlcvm1X16GyYI',
  },
  {
    icon: 'self_improvement',
    title: 'Recovery & Stretch Area',
    desc: 'Dedicated mobility space for post-workout recovery, foam rolling, and flexibility work.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDg-DXE7CqYMPp3YzRHO23i17-Ave4czHFjM-EDYrCfPjI8mkjsaXkslwdwhsnbeGXXp7oXW_IxY6cOzktPDS2rdpVi3axyCQgj5jEOIBsqgUTofuJFiyq_fw1jymTb3iIO5qF1Gh0QyITvsUx5ZGHOMGrtCgN2vzVmjAz3CSibP-TcaDfRyPc9SXkInSrHCGU8ZhK3ZgkdVotxkor2j4-r0W230fCbsZP7wEWrRrnWhk2sB0cdr7VVT5mp2iRWsQXDNni4sM52DIQ',
  },
];

const Facilities = () => {
  return (
    <section id="facilities" className="w-full bg-[#211d11] border-t border-[#3d3623]">
      <div className="max-w-[1200px] mx-auto px-[24px] md:px-[40px] py-[48px] md:py-[80px]">

        {/* Header */}
        <motion.div
          className="flex flex-col gap-[16px] mb-[48px]"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#f1f5f9] text-[36px] md:text-[56px] font-black leading-tight tracking-tight">
            Our <span className="text-[#d49e16]">Facilities</span>
          </h2>
          <p className="text-[#c8b993] text-[18px] md:text-[20px] font-normal max-w-[672px] leading-relaxed">
            State-of-the-art training environments designed for peak performance. Experience the pinnacle of fitness technology and luxury comfort.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[64px]">
          {facilities.map((facility, i) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group flex flex-col gap-[16px] bg-[#2b1e0f]/40 p-[16px] rounded-[12px] border border-[#d49e16]/10 hover:border-[#d49e16]/40 transition-all duration-300 hover:shadow-lg hover:shadow-[#d49e16]/5"
            >
              {/* Image */}
              <div
                className="w-full aspect-[16/10] rounded-[8px] overflow-hidden relative bg-center bg-cover bg-no-repeat"
                style={{ backgroundImage: `url("${facility.image}")` }}
              >
                <div className="absolute inset-[0px] bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
              </div>
              {/* Text */}
              <div className="flex flex-col gap-[8px]">
                <div className="flex items-center gap-[8px] text-[#d49e16]">
                  <span className="material-symbols-outlined text-[22px]">{facility.icon}</span>
                  <h3 className="text-[#f1f5f9] text-[20px] font-bold leading-tight">{facility.title}</h3>
                </div>
                <p className="text-[#c8b993] text-[14px] font-normal leading-relaxed">{facility.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          className="bg-[#2b1e0f]/20 border-y border-[#d49e16]/10 rounded-[12px] px-[24px] py-[64px] flex flex-col items-center gap-[32px] text-center"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col gap-[12px]">
            <h2 className="text-[#f1f5f9] text-[30px] md:text-[48px] font-black tracking-tight">Ready to experience it?</h2>
            <p className="text-[#c8b993] text-[16px] md:text-[18px]">Join the elite training environment today and transform your journey.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-[16px]">
            <button
              onClick={() => scrollToSection('membership')}
              className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-[8px] h-[48px] px-[24px] bg-[#d49e16] text-[#211d11] text-[15px] font-bold transition-transform hover:scale-[1.02] active:scale-[0.98]"
            >
              View Memberships
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-[8px] h-[48px] px-[24px] border border-[#d49e16] text-[#d49e16] text-[15px] font-bold hover:bg-[#d49e16]/10 transition-colors"
            >
              Schedule a Tour
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Facilities;
