export default function VideoBackground({ src, className = "" }) {
  return (
    <div className={"absolute inset-0 overflow-hidden " + className}>
      <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-10">
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}
