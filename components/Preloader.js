import { useEffect, useState } from "react";
export default function Preloader() {
  const [p, setP] = useState(0);
  const [done, setDone] = useState(false);
  useEffect(() => {
    let v = 0;
    const i = setInterval(() => {
      v += Math.random()*18+6;
      if (v>=100) { v=100; clearInterval(i); setTimeout(()=>setDone(true),300); }
      setP(Math.min(v,100));
    },100);
    return () => clearInterval(i);
  },[]);
  return (
    <div className={"preloader "+(done?"done":"")}>
      <span className="text-2xl font-display font-black tracking-tight text-white">
        Abdullah<span className="accent-text"> Haider</span>
      </span>
      <div className="loader-bar-bg">
        <div className="loader-bar" style={{width:p+"%"}} />
      </div>
    </div>
  );
}
