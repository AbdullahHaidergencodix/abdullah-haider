export default function WaveText({ text, className = "" }) {
  return (
    <span className={className}>
      {text.split("").map((char, i) => (
        <span
          key={i}
          className="inline-block animate-[wave_1.5s_ease-in-out_infinite]"
          style={{ animationDelay: i * 0.05 + "s" }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </span>
  );
}
