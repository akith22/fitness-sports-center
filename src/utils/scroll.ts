/**
 * Smooth-scroll to a section ID, with a fixed offset to account for the sticky navbar.
 * @param id  The element id to scroll to (without the #)
 * @param offset  Pixel offset from the top (default -80px for the navbar height)
 */
export const scrollToSection = (id: string, offset = -80) => {
  const element = document.getElementById(id);
  if (!element) return;
  const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
  window.scrollTo({ top: y, behavior: 'smooth' });
};
