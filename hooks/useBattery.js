import { useState, useEffect } from "react";
export default function useBattery() {
  const [battery, setBattery] = useState(null);
  useEffect(() => {
    const get = async () => {
      try {
        if (navigator.getBattery) {
          const b = await navigator.getBattery();
          const update = () => setBattery({ level: b.level, charging: b.charging });
          update();
          b.addEventListener("levelchange", update);
          b.addEventListener("chargingchange", update);
        }
      } catch (e) {}
    };
    get();
  }, []);
  return battery;
}
