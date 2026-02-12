const socials = [
  { name: "GitHub", url: "#", icon: "🐙" },
  { name: "LinkedIn", url: "#", icon: "💼" },
  { name: "Twitter", url: "#", icon: "🐦" },
  { name: "Instagram", url: "#", icon: "📸" },
  { name: "Dribbble", url: "#", icon: "🏀" },
];
export default function SocialLinks() {
  return (
    <div className="flex items-center gap-3">
      {socials.map((s) => (
        <a
          key={s.name}
          href={s.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 rounded-full glass flex items-center justify-center hover:border-accent-500/20 transition-all duration-300 group cursor-none"
          aria-label={s.name}
        >
          <span className="text-sm group-hover:scale-110 transition-transform">{s.icon}</span>
        </a>
      ))}
    </div>
  );
}
