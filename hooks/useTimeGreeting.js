import { useState, useEffect } from "react";
export default function useTimeGreeting() {
  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    const h = new Date().getHours();
    if (h < 6) setGreeting("Working late?");
    else if (h < 12) setGreeting("Good morning");
    else if (h < 17) setGreeting("Good afternoon");
    else if (h < 21) setGreeting("Good evening");
    else setGreeting("Night owl?");
  }, []);
  return greeting;
}
