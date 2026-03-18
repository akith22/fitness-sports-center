import { scrollToSection } from '../utils/scroll';

const Hero = () => {
  return (
    <div id="home" className="w-full pt-[64px]">
      <div className="p-[0px] sm:p-[16px] lg:p-[40px]">
        <div
          className="flex min-h-[600px] flex-col gap-[24px] bg-cover bg-center bg-no-repeat rounded-[0px] sm:rounded-[12px] items-center justify-center p-[24px] text-center shadow-2xl relative overflow-hidden"
          style={{ backgroundImage: 'linear-gradient(rgba(33, 29, 17, 0.7) 0%, rgba(33, 29, 17, 0.9) 100%), url("https://lh3.googleusercontent.com/aida-public/AB6AXuBaNBkuqVhbBKT_r7wb9Yw1COvSX5hQaohQhq_o5RXsAz7SQETeF8fMoJ_mR_MykOVBGTM0LG1AfCSER5xmtXm6CBqn3EnSpZLIL5EfRAtk-qfiISI6zDNMuCxc0KXlhXSRIqxBFNUNEIpIxkVbtAXtwYVYJSlI8RBgAcnlRxe276hOoULoqLlL50YPNfRhVMl5f_JevL4qEzVoYsaqoLKBpSCagsmC9khcVJUySZiOzKwItzjFwfo7Y9dnl6620QUQFDuAs3yDMm8")' }}
        >
          <div className="flex flex-col gap-[16px] max-w-[768px] z-10 w-full">
            <span className="text-[#d49e16] font-bold tracking-[0.2em] uppercase text-[14px] leading-[20px]">Push Your Limits</span>
            <h1 className="text-[#f1f5f9] text-[48px] leading-[1] font-black tracking-[-0.033em] sm:text-[72px]">
              Transform Your <span className="text-[#d49e16]">Strength</span>
            </h1>
            <h2 className="text-[#cbd5e1] text-[16px] leading-[24px] font-normal sm:text-[20px] sm:leading-[28px] max-w-[672px] mx-auto">
              Experience professional-grade training and state-of-the-art facilities designed for those who demand elite results.
            </h2>
          </div>
          <div className="flex flex-wrap gap-[16px] justify-center z-10 mt-[16px]">
            {/* Join Now → scrolls to Contact */}
            <button
              onClick={() => scrollToSection('contact')}
              className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] h-[48px] px-[32px] bg-[#d49e16] text-[#211d11] text-[16px] leading-[24px] font-bold tracking-[0.015em] hover:scale-105 transition-transform"
            >
              Join Now
            </button>
            {/* View Programs → scrolls to Services */}
            <button
              onClick={() => scrollToSection('services')}
              className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-[8px] h-[48px] px-[32px] border-2 border-[#d49e16]/50 text-[#f1f5f9] text-[16px] leading-[24px] font-bold tracking-[0.015em] hover:bg-[#d49e16]/10 transition-colors"
            >
              View Programs
            </button>
          </div>
          <div className="absolute bottom-[32px] left-[0px] right-[0px] flex justify-center gap-[40px] text-[#94a3b8] text-[12px] leading-[16px] tracking-[0.1em] uppercase hidden sm:flex">
            <div className="flex flex-col items-center gap-[4px]"><span className="text-[#d49e16] text-[20px] leading-[28px] font-bold">24/7</span><span>Access</span></div>
            <div className="flex flex-col items-center gap-[4px]"><span className="text-[#d49e16] text-[20px] leading-[28px] font-bold">50+</span><span>Coaches</span></div>
            <div className="flex flex-col items-center gap-[4px]"><span className="text-[#d49e16] text-[20px] leading-[28px] font-bold">15k</span><span>Members</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
