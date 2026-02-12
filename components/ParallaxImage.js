import useViewportProgress from "../hooks/useViewportProgress";
export default function ParallaxImage({ src, alt, className = "" }) {
  const { ref, progress } = useViewportProgress();
  const y = (progress - 0.5) * -40;
  return (
    <div ref={ref} className={"overflow-hidden " + className}>
      <img src={src} alt={alt} className="w-full h-full object-cover" style={{ transform: `translateY(${y}px) scale(1.1)` }} loading="lazy" />
    </div>
  );
}
