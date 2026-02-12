export default function HighlightText({ children, className = "" }) {
  return (
    <span className={"relative inline-block group " + className}>
      <span className="relative z-10">{children}</span>
      <span className="absolute bottom-0 left-0 w-full h-[30%] bg-accent-500/10 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left rounded-sm" />
    </span>
  );
}
