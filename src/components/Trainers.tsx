import { scrollToSection } from '../utils/scroll';

const trainers = [
  {
    name: 'Alex Rivera',
    role: 'Strength Coach',
    desc: '10+ years experience in powerlifting and high-performance strength conditioning.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC00CfuyzXkVAE9XzNujRFQGjzGo3rEOF27t1WGjEl6wmql_ldO1OCeH1OHVD3Vc7zE22_BMpx8M-0QP5_tnWVm39AcWD2xvBd3xZrl0zlPRz56vUzPu6b7r1KqXd6a28ZsUV97OHD94m-SB4ceEdn3jPh5TSCwCSXjtD0LdsZPqx_r7GxXp4JIs31Uy2DORQkHZvuHi_ktmmZ81AMicSpCtDLpFCe-q4Flr-fegi5J7kgMyKRpvScSKVxc6W88zmM5rtKaju2mRuQ',
  },
  {
    name: 'Sarah Jenkins',
    role: 'Nutrition Expert',
    desc: 'Certified clinical nutritionist helping you fuel your athletic performance and daily energy.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB062kAZFlnRdVitPcOGNIFF-BVet305h-5DumEpM-NeuVrmYnA2td6dVap_PgtQ_yDRaHvwAvFrXkhsmzvywxbMyketoP5BVZfVWumBW0WmsLh66ByrhC1Qqpq2EfDmbg8TnPfefxbvY9Ej5WuxJvswHzB73z6QT0-V4bj5yzM_WOvC79QYjKNbUhxDdHnJOotm7nBzyhJKdT20uO_wbW4aWkypIxi4qP6tSrerYGoeZr_BtbRTDjsuAgXHFBJ3BBLA3U55F-s9Q8',
  },
  {
    name: 'Marcus Chen',
    role: 'HIIT Specialist',
    desc: 'High-energy coach focused on explosive movements, fat loss, and cardiovascular endurance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAXsLpjUQyD1FslbNAL6kINP4mugOw4yrtBxGai_Cl-BvhBovnynODUd-c2NYOUCIux7V_kpACGqVart399KUun0KQl_TwKENMHvLA_oxvvjX3eLmmmIhyAVZ4ERsxXfLeCB-wnKuCuF7jsxB3v4xObMviOG6D51bc2KjxWNud7f6CC3EJ-ueEtBVjl_HMH5Y77pvsLt-U4toeIf2ZtYKfIvx1Bv2qC26Y1V46h_TYg0MCHjz-xzB6Da6qw8RIOecJMvGFnPiY2KIw',
  },
  {
    name: 'Elena Rodriguez',
    role: 'Yoga & Mobility',
    desc: 'Specializing in recovery, flexibility, and mind-body balance to enhance your overall movement.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCxuHfyzzxUK7LLcskJXh64RS5tpKlfJqr3s3XpStYgBHlsvaWANDkN_wgeO-xsmxHKJ3PHgGhwKIbjqtwPL9qWuDqQcqttvwfLaqqdoKKI1unfzAnPy8PT8CBh8cxg0G8iH9O8DsZmXFvxqMEWFPKGt_Tz6lfhDFMou-2My5eurRL94S-AWrZ2G8psaupRbKYGxsRU-1lxoZHQt31BQJTxMyD4JoqHNJz-V1ChFSRI1Y56hjd0rVWSvmOsxS1ja7WOg5YKA8QoQc',
  },
];

const Trainers = () => {
  return (
    <section id="trainers" className="w-full bg-[#211d11] border-t border-[#3d3623]">
      <div className="mx-auto w-full max-w-[1280px] px-[24px] py-[64px] lg:px-[40px]">

        {/* Header */}
        <div className="mb-[48px] flex flex-col gap-[16px]">
          <span className="inline-block w-fit px-[12px] py-[4px] rounded-[9999px] bg-[#d49e16]/10 text-[#d49e16] text-[12px] font-bold uppercase tracking-[0.15em]">
            Our Team
          </span>
          <h2 className="text-[36px] font-black tracking-tight text-[#f1f5f9] lg:text-[48px] leading-tight">
            Meet Our Trainers
          </h2>
          <p className="max-w-[672px] text-[18px] text-[#d49e16]/70 leading-relaxed">
            Our world-class instructors are here to guide your fitness journey with expert knowledge and personalized motivation.
          </p>
        </div>

        {/* Trainer Cards Grid */}
        <div className="grid grid-cols-1 gap-[32px] sm:grid-cols-2 lg:grid-cols-4 mb-[80px]">
          {trainers.map((trainer) => (
            <div
              key={trainer.name}
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
                  <a
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[9999px] bg-[#d49e16]/10 text-[#d49e16] hover:bg-[#d49e16] hover:text-[#211d11] transition-all duration-200"
                    href="#"
                    aria-label="Share"
                  >
                    <span className="material-symbols-outlined text-[18px]">share</span>
                  </a>
                  <a
                    className="flex h-[32px] w-[32px] items-center justify-center rounded-[9999px] bg-[#d49e16]/10 text-[#d49e16] hover:bg-[#d49e16] hover:text-[#211d11] transition-all duration-200"
                    href="#"
                    aria-label="Email"
                  >
                    <span className="material-symbols-outlined text-[18px]">mail</span>
                  </a>
                </div>
              </div>
            </div>
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
              <button className="rounded-[8px] bg-[#211d11] px-[32px] py-[16px] text-[13px] font-bold uppercase tracking-[0.1em] text-[#d49e16] shadow-lg transition-transform hover:-translate-y-[2px] hover:shadow-xl">
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
