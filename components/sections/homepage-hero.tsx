import { Button, Highlight } from "../button";
import { Hero, HeroTitle, HeroSubtitle } from "../hero";
import { HeroImage } from "../hero-image";
import { ChevronIcon } from "../icons/chevron";

export const HomepageHero = () => (
  <Hero>
    <HeroTitle className="translate-y-[-1rem] animate-fade-in font-extrabold opacity-0 [--animation-delay:200ms]">
      Desarrollamos
      <br />
      aplicaciones que conectan.
    </HeroTitle>
    <HeroSubtitle className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
      Nos enfocamos en ofrecer soluciones personalizadas y a medida
      <br className="hidden md:block" /> para satisfacer las necesidades
      específicas de tu negocio y tu audiencia.
    </HeroSubtitle>
    <a
      href="/#clients"
      className="hover:text-shadow translate-y-[-1rem] animate-fade-in bg-primary-gradient px-6 py-4 rounded-full text-lg opacity-0 transition-[shadow,text-shadow] [--animation-delay:600ms] hover:shadow-primary "
    >
      Iniciar
    </a>
    {/* <Button
      className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]"
      href="#clients"
      variant="primary"
      size="large"
    >
      <span>Iniciar </span>
      <Highlight>
        <ChevronIcon />
      </Highlight>
    </Button> */}
    <HeroImage />
  </Hero>
);
