import { useState } from "react";
export default function CopyEmail({ email = "Aboodiprofessional@gmail.com" }) {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try { await navigator.clipboard.writeText(email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch {}
  };
  return (
    <button onClick={copy} className="btn-outline text-[14px] py-4 px-10 rounded-lg cursor-none inline-flex items-center gap-2">
      {copied ? (<><span className="text-emerald-400">&#10003;</span><span>Copied!</span></>) : (<><span>&#128203;</span><span>Copy Email</span></>)}
    </button>
  );
}
