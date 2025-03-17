import AnimateIn from './AnimateIn';
import Link from './Link';

export default function Header() {
  return (
    <div className="mb-4 flex flex-col items-center justify-between md:flex-row">
      <AnimateIn
        className="w-full text-center text-[50px] font-medium md:w-[250px] md:text-[42px] lg:w-[288px] lg:text-[50px]"
        direction="down"
        baseDelay={0}
      >
        Vinam Arora
      </AnimateIn>
      <AnimateIn className="flex gap-10 text-lg font-medium" direction="down" baseDelay={0.1}>
        <Link href="/#/" newTab={false}>
          Home
        </Link>
        <Link href="/#/career" newTab={false}>
          Career
        </Link>
      </AnimateIn>
    </div>
  );
}
