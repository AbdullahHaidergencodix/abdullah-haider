import { useState, useEffect } from "react";
const quotes = [
  { text: "Design is not just what it looks like and feels like. Design is how it works.", author: "Steve Jobs" },
  { text: "Simplicity is the ultimate sophistication.", author: "Leonardo da Vinci" },
  { text: "Good design is obvious. Great design is transparent.", author: "Joe Sparano" },
  { text: "The details are not the details. They make the design.", author: "Charles Eames" },
  { text: "Content precedes design. Design in the absence of content is not design.", author: "Jeffrey Zeldman" },
];
export default function RandomQuote() {
  const [quote, setQuote] = useState(null);
  useEffect(() => { setQuote(quotes[Math.floor(Math.random() * quotes.length)]); }, []);
  if (!quote) return null;
  return (
    <div className="reveal text-center py-16 max-w-2xl mx-auto px-5">
      <p className="text-lg md:text-xl text-white/15 font-light italic leading-relaxed">&ldquo;{quote.text}&rdquo;</p>
      <p className="text-[11px] text-white/10 mt-3 font-medium">&mdash; {quote.author}</p>
    </div>
  );
}
