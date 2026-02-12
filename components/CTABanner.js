export default function CTABanner() {
  return (
    <div className="reveal mx-5 md:mx-8 max-w-6xl lg:mx-auto my-8">
      <div className="relative rounded-2xl overflow-hidden p-8 md:p-12 text-center gradient-border" style={{ background: "linear-gradient(135deg, rgba(59,142,255,0.06) 0%, rgba(124,58,237,0.04) 50%, rgba(59,142,255,0.06) 100%)" }}>
        <h3 className="font-display font-bold text-white text-xl md:text-2xl mb-3">Your Competitor&rsquo;s Website Is Better Than Yours.</h3>
        <p className="text-white/30 text-sm mb-6 max-w-md mx-auto">That&rsquo;s not an insult. It&rsquo;s a problem with a 72-hour solution.</p>
        <a href="#contact" className="btn-main text-sm py-3 px-8 rounded-lg inline-flex">Fix It Now &rarr;</a>
      </div>
    </div>
  );
}
