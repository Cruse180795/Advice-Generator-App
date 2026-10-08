import DiceIcon from "./icons/DiceIcon";
import PatternDividerMobile from "../assets/images/pattern-divider-mobile.svg";
import PatternDividerDesktop from "../assets/images/pattern-divider-desktop.svg";

type AdviceCardProps = {
  adviceId?: number;
  adviceText?: string;
  isLoading: boolean;
  error?: string | null;
  onClick: () => void;
};

export default function AdviceCard({ adviceId, adviceText, isLoading, error, onClick }: AdviceCardProps) {
  return (
    <section className="bg-blue-900 rounded-10 py-10 px-5 relative md:max-w-135 md:px-12 md:py-12">
      {/** Advice Output */}
      <div className="text-center space-y-4 md:space-y-6">
        <h2 className="text-13 tracking-wide text-green-300 uppercase">Advice #{adviceId}</h2>

        {error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <blockquote className="text-blue-200 text-2xl tracking-tight md:text-28">
            {isLoading && !adviceText ? "Loading...." : `"${adviceText}"`}
          </blockquote>
        )}
      </div>

      {/** Divider */}
      <div className="my-8">
        <picture>
          <source srcSet={PatternDividerDesktop} media="(min-width: 768px)" />
          <img src={PatternDividerMobile} alt="Pattern Divider" className="mx-auto" />
        </picture>
      </div>

      <button
        disabled={isLoading}
        aria-label="Get new advice"
        onClick={onClick}
        className="bg-green-300 rounded-full size-16 flex items-center justify-center absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 lg:cursor-pointer hover:shadow-[0_0_40px_0_#53FFAA] transition-all ease-in-out duration-300 disabled:cursor-not-allowed disabled:opacity-50"
      >
        <DiceIcon className="size-6" />
      </button>
    </section>
  );
}
