import { motion } from 'framer-motion';
import { scrollToSection } from '../utils/scroll';

const plans = [
  {
    name: 'Basic',
    currency: 'LKR',
    amount: '10,000',
    tagline: 'Essential access for beginners',
    highlighted: false,
    features: [
      { text: 'Standard gym access (6am - 9pm)', included: true },
      { text: 'Locker room & shower access', included: true },
      { text: '2 Group classes per month', included: false },
      { text: 'Personal trainer support', included: false },
    ],
  },
  {
    name: 'Pro',
    currency: 'LKR',
    amount: '15,000',
    tagline: 'The perfect balance for regulars',
    highlighted: true,
    features: [
      { text: '24/7 Unlimited Access', included: true },
      { text: 'Unlimited Group Classes', included: true },
      { text: 'Monthly Session with Trainer', included: true },
      { text: 'Sauna & Steam Room Access', included: true },
    ],
  },
  {
    name: 'Elite',
    currency: 'LKR',
    amount: '20,000',
    tagline: 'VIP experience for performance athletes',
    highlighted: false,
    features: [
      { text: 'All Pro Features Included', included: true },
      { text: 'Private Dedicated Locker', included: true },
      { text: 'Weekly Nutrition Coaching', included: true },
      { text: 'Complimentary Monthly Massage', included: true },
    ],
  },
];

const whyCards = [
  {
    icon: 'fitness_center',
    title: 'Modern Equipment',
    desc: 'Brand new cardio machines, heavy lifting areas, and specialized functional training zones.',
  },
  {
    icon: 'groups',
    title: 'Expert Trainers',
    desc: 'Certified professionals with years of experience to help you reach your maximum potential.',
  },
  {
    icon: 'volunteer_activism',
    title: 'Supportive Community',
    desc: 'Join a family of fitness enthusiasts where everyone motivates each other to improve.',
  },
];

const Membership = () => {
  return (
    <section id="membership" className="w-full bg-[#211d11] border-t border-[#3d3623]">
      <div className="max-w-[1200px] w-full mx-auto px-[24px] md:px-[40px] lg:px-[80px] py-[48px] md:py-[72px]">

        {/* Title */}
        <motion.div
          className="flex flex-col gap-[16px] text-center mb-[48px]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-[#f1f5f9] text-[36px] md:text-[48px] font-black leading-tight tracking-[-0.033em]">
            Membership Plans
          </h2>
          <p className="text-[#d49e16]/70 text-[18px] font-normal leading-normal max-w-[672px] mx-auto">
            Choose the plan that fits your fitness goals and lifestyle. Join our community and start your journey today.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[32px] mb-[64px] items-center">
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: plans.indexOf(plan) * 0.1 }}
              viewport={{ once: true }}
              className={`relative flex flex-col gap-[24px] rounded-[12px] border p-[32px] shadow-sm transition-all duration-300 ${
                plan.highlighted
                  ? 'border-2 border-[#d49e16] bg-[#2a2415]/80 shadow-xl lg:scale-105 z-10'
                  : 'border border-[#d49e16]/20 bg-[#211d11]/50 hover:border-[#d49e16]/40'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-[16px] left-1/2 -translate-x-1/2 bg-[#d49e16] text-[#211d11] text-[11px] font-bold uppercase tracking-[0.15em] px-[16px] py-[4px] rounded-[9999px]">
                  Most Popular
                </div>
              )}

              <div className="flex flex-col gap-[8px]">
                <h3 className="text-[#f1f5f9] text-[20px] font-bold">{plan.name}</h3>
                {/* Price: keep currency + amount + /mo on one line — no wrapping */}
                <div className="flex items-baseline gap-[6px] flex-nowrap">
                  <span className="text-[#f1f5f9] text-[16px] font-bold shrink-0">{plan.currency}</span>
                  <span className={`text-[#f1f5f9] font-black tracking-tight shrink-0 ${plan.highlighted ? 'text-[48px] leading-none' : 'text-[40px] leading-none'}`}>
                    {plan.amount}
                  </span>
                  <span className="text-[#94a3b8] text-[16px] font-medium shrink-0">/mo</span>
                </div>
                <p className="text-[14px] text-[#94a3b8]">{plan.tagline}</p>
              </div>

              <div className="space-y-[16px] py-[16px]">
                {plan.features.map((f, i) => (
                  <div key={i} className={`flex items-center gap-[12px] ${!f.included ? 'text-[#4a4a4a]' : ''}`}>
                    <span className={`material-symbols-outlined text-[20px] ${f.included ? 'text-[#d49e16]' : 'text-[#4a4a4a]'}`}>
                      {f.included ? 'check_circle' : 'cancel'}
                    </span>
                    <span className={`text-[14px] ${f.included ? (plan.highlighted ? 'font-semibold text-[#f1f5f9]' : 'text-[#c8b993]') : 'text-[#4a4a4a]'}`}>
                      {f.text}
                    </span>
                  </div>
                ))}
              </div>

              <button
                onClick={() => scrollToSection('contact')}
                className={`mt-auto w-full py-[12px] md:py-[14px] px-[24px] rounded-[8px] font-bold text-[14px] transition-all duration-300 ${
                  plan.highlighted
                    ? 'bg-[#d49e16] hover:bg-[#c49010] text-[#211d11] shadow-lg shadow-[#d49e16]/20 hover:scale-[1.02]'
                    : 'bg-[#d49e16]/10 hover:bg-[#d49e16]/20 text-[#d49e16]'
                }`}
              >
                Join Now
              </button>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div className="border-t border-[#3d3623] pt-[64px]">
          <h2 className="text-[#f1f5f9] text-[30px] font-bold text-center mb-[48px]">
            Why Choose Fitness Sports Center?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[32px]">
            {whyCards.map((card) => (
              <div
                key={card.title}
                className="flex flex-col items-center text-center p-[24px] rounded-[12px] bg-[#d49e16]/5 border border-[#d49e16]/10 hover:border-[#d49e16]/30 transition-all duration-300"
              >
                <div className="w-[64px] h-[64px] rounded-[9999px] bg-[#d49e16]/20 flex items-center justify-center mb-[16px]">
                  <span className="material-symbols-outlined text-[#d49e16] text-[32px]">{card.icon}</span>
                </div>
                <h4 className="text-[#f1f5f9] text-[18px] font-bold mb-[8px]">{card.title}</h4>
                <p className="text-[14px] text-[#94a3b8]">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Membership;
