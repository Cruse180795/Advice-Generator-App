import DiceIcon from "./icons/DiceIcon";
import PatternDividerMobile from "../assets/images/pattern-divider-mobile.svg";
import PatternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";

export default function AdviceCard() {
  return (
    <section className="bg-blue-900 rounded-10 py-10 px-5 relative md:max-w-135 md:px-12 md:py-12">
      {/** Advice Output */}
      <div className="text-center space-y-4 md:space-y-6">
        <h2 className="text-13 tracking-wide text-green-300 uppercase">Advice #117</h2>
        <p className="text-blue-200 text-2xl tracking-tight md:text-28">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, hic!
        </p>
      </div>

      {/** Divider */}
      <div className="my-8">
        <picture>
          <source srcSet={PatternDividerDesktop} media="(min-width: 768px)" />
          <img src={PatternDividerMobile} alt="Pattern Divider" className="mx-auto" />
        </picture>
      </div>

      <button className="bg-green-300 rounded-full size-16 flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2">
        <DiceIcon className="size-6" />
      </button>
    </section>
  );
}
