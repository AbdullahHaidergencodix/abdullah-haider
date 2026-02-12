export default function Guarantee() {
  return (
    <div className="reveal py-16 max-w-3xl mx-auto px-5 md:px-8">
      <div className="glass rounded-2xl p-8 md:p-10 text-center border border-emerald-500/[0.08]">
        <span className="text-4xl block mb-4">🛡️</span>
        <h3 className="font-display font-bold text-white text-xl mb-3">Triple Guarantee</h3>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div>
            <span className="text-xl block mb-2">⏱️</span>
            <p className="text-[13px] text-white/60 font-medium mb-1">72-Hour Delivery</p>
            <p className="text-[11px] text-white/25 leading-relaxed">Or you get 50% off. No exceptions.</p>
          </div>
          <div>
            <span className="text-xl block mb-2">💰</span>
            <p className="text-[13px] text-white/60 font-medium mb-1">Money-Back</p>
            <p className="text-[11px] text-white/25 leading-relaxed">Not happy? Full refund. Zero questions asked.</p>
          </div>
          <div>
            <span className="text-xl block mb-2">♾️</span>
            <p className="text-[13px] text-white/60 font-medium mb-1">Satisfaction</p>
            <p className="text-[11px] text-white/25 leading-relaxed">I keep revising until you love it. Period.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
