import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Full Name is required';
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format';
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    }
  };

  return (
    <section id="contact" className="w-full bg-[#211d11] border-t border-[#3d3623]">
      <motion.div
        className="flex flex-col items-center py-[64px] px-[24px]"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        viewport={{ once: true }}
      >
        {/* Section label */}
        <div className="w-full max-w-[960px] mb-[48px]">
          <span className="inline-block text-[#d49e16] font-semibold text-[13px] uppercase tracking-[0.2em] mb-[8px]">Get In Touch</span>
          <h2 className="text-[36px] leading-[40px] md:text-[48px] md:leading-[1] font-black tracking-tight text-[#f1f5f9]">
            Contact <span className="text-[#d49e16]">Us</span>
          </h2>
        </div>

        <div className="max-w-[960px] w-full grid grid-cols-1 lg:grid-cols-2 gap-[48px]">
          {/* Left Side: Info */}
          <div className="flex flex-col gap-[32px]">
            <p className="text-[#94a3b8] text-[18px] leading-[28px]">
              Ready to start your fitness journey or have a question about our facilities? We'd love to hear from you. Our team typically responds within 24 hours.
            </p>
            <div className="space-y-[24px]">
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#d49e16]/10 p-[12px] rounded-[8px] text-[#d49e16] shrink-0">
                  <span className="material-symbols-outlined">location_on</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-[28px] text-[#f1f5f9]">Visit Us</h3>
                  <p className="text-[#94a3b8]">51/52, Sector 12<br/>Colombo 07, Sri Lanka</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#d49e16]/10 p-[12px] rounded-[8px] text-[#d49e16] shrink-0">
                  <span className="material-symbols-outlined">call</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-[28px] text-[#f1f5f9]">Call Us</h3>
                  <p className="text-[#94a3b8]">+91 9876543210</p>
                </div>
              </div>
              <div className="flex items-start gap-[16px]">
                <div className="bg-[#d49e16]/10 p-[12px] rounded-[8px] text-[#d49e16] shrink-0">
                  <span className="material-symbols-outlined">mail</span>
                </div>
                <div>
                  <h3 className="font-bold text-[18px] leading-[28px] text-[#f1f5f9]">Email Us</h3>
                  <p className="text-[#94a3b8]">hello@fitnesscenter.com</p>
                </div>
              </div>
            </div>
            {/* Success Message */}
            {isSubmitted && (
              <div className="p-[16px] rounded-[8px] bg-[#10b981]/10 border border-[#10b981]/30 flex items-center gap-[12px] animate-fade-in">
                <span className="material-symbols-outlined text-[#10b981]">check_circle</span>
                <p className="text-[14px] leading-[20px] font-medium text-[#34d399]">Your message has been sent successfully. We'll get back to you soon!</p>
              </div>
            )}
          </div>

          {/* Right Side: Form */}
          <div className="bg-[#2a2415]/60 p-[32px] rounded-[12px] border border-[#3d3623] shadow-xl shadow-black/30">
            <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-semibold uppercase tracking-wider text-[#94a3b8]" htmlFor="contact-name">Full Name</label>
                <input
                  className={`w-full rounded-[8px] border ${errors.name ? 'border-[#ef4444]' : 'border-[#3d3623]'} bg-[#211d11] text-[#f1f5f9] placeholder-[#4a4030] focus:outline-none focus:ring-2 focus:ring-[#d49e16]/60 focus:border-[#d49e16] p-[16px] transition-all duration-200`}
                  id="contact-name"
                  name="name"
                  placeholder="e.g. Alex Johnson"
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(s => ({ ...s, name: e.target.value }))}
                />
                {errors.name && <span className="text-[#ef4444] text-[12px]">{errors.name}</span>}
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-semibold uppercase tracking-wider text-[#94a3b8]" htmlFor="contact-email">Email Address</label>
                <input
                  className={`w-full rounded-[8px] border ${errors.email ? 'border-[#ef4444]' : 'border-[#3d3623]'} bg-[#211d11] text-[#f1f5f9] placeholder-[#4a4030] focus:outline-none focus:ring-2 focus:ring-[#d49e16]/60 focus:border-[#d49e16] p-[16px] transition-all duration-200`}
                  id="contact-email"
                  name="email"
                  placeholder="alex@example.com"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData(s => ({ ...s, email: e.target.value }))}
                />
                {errors.email && <span className="text-[#ef4444] text-[12px]">{errors.email}</span>}
              </div>
              <div className="flex flex-col gap-[8px]">
                <label className="text-[13px] font-semibold uppercase tracking-wider text-[#94a3b8]" htmlFor="contact-message">Your Message</label>
                <textarea
                  className={`w-full rounded-[8px] border ${errors.message ? 'border-[#ef4444]' : 'border-[#3d3623]'} bg-[#211d11] text-[#f1f5f9] placeholder-[#4a4030] focus:outline-none focus:ring-2 focus:ring-[#d49e16]/60 focus:border-[#d49e16] p-[16px] resize-none transition-all duration-200`}
                  id="contact-message"
                  name="message"
                  placeholder="How can we help you achieve your goals?"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData(s => ({ ...s, message: e.target.value }))}
                ></textarea>
                {errors.message && <span className="text-[#ef4444] text-[12px]">{errors.message}</span>}
              </div>
              <button
                className="w-full bg-[#d49e16] hover:bg-[#c49010] text-[#211d11] font-extrabold py-[16px] px-[24px] rounded-[8px] transition-all duration-300 flex items-center justify-center gap-[8px] shadow-lg shadow-[#d49e16]/20 hover:shadow-[#d49e16]/30 hover:scale-[1.01] active:scale-[0.98]"
                type="submit"
              >
                <span>SUBMIT MESSAGE</span>
                <span className="material-symbols-outlined text-[18px]">send</span>
              </button>
            </form>
          </div>
        </div>
      </motion.div>


    </section>
  );
};

export default Contact;
