import { useEffect } from "react";
import useActiveSection from "../hooks/useActiveSection";
const titles = {
  about: "About Me — Abdullah Haider",
  services: "Services — Abdullah Haider",
  work: "My Work — Abdullah Haider",
  pricing: "Pricing — Abdullah Haider",
  testimonials: "Testimonials — Abdullah Haider",
  process: "Process — Abdullah Haider",
  faq: "FAQ — Abdullah Haider",
  contact: "Contact — Abdullah Haider",
};
export default function DynamicTitle() {
  const active = useActiveSection(Object.keys(titles));
  useEffect(() => {
    document.title = titles[active] || "Abdullah Haider — Web Designer & Developer";
  }, [active]);
  return null;
}
