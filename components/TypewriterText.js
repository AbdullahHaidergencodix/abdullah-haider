import useTypewriter from "../hooks/useTypewriter";
export default function TypewriterText({ text, delay = 0, speed = 40, className = "" }) {
  const displayed = useTypewriter(text, delay, speed);
  return <span className={className}>{displayed}<span className="inline-block w-[2px] h-[1em] bg-accent-400 ml-0.5 animate-pulse align-middle" /></span>;
}
