import { useState } from "react";
import Chip from "./Chip";
const filters = ["All", "Landing Page", "Full Website", "Web App UI"];
export default function ProjectFilter({ onChange }) {
  const [active, setActive] = useState("All");
  const handleClick = (f) => { setActive(f); if (onChange) onChange(f); };
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {filters.map((f) => <Chip key={f} active={active === f} onClick={() => handleClick(f)}>{f}</Chip>)}
    </div>
  );
}
