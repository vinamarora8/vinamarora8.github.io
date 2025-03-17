import AnimateIn from './AnimateIn';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <AnimateIn direction="up" className="pt-16 text-center text-sm" duration={0.5}>
      <p>© {currentYear} Vinam Arora</p>
    </AnimateIn>
  );
}
