import { create } from "zustand";
const useStore = create((set) => ({
  accentColor: "#3b8eff",
  setAccentColor: (c) => set({ accentColor: c }),
  soundEnabled: false,
  toggleSound: () => set((s) => ({ soundEnabled: !s.soundEnabled })),
  cursorStyle: "default",
  setCursorStyle: (s) => set({ cursorStyle: s }),
  visitCount: 0,
  incrementVisit: () => set((s) => ({ visitCount: s.visitCount + 1 })),
  navOpen: false,
  setNavOpen: (v) => set({ navOpen: v }),
  modalOpen: null,
  setModalOpen: (v) => set({ modalOpen: v }),
  theme: "dark",
  toggleTheme: () => set((s) => {
    const next = s.theme === "dark" ? "light" : "dark";
    if (next === "light") document.documentElement.classList.add("light-mode");
    else document.documentElement.classList.remove("light-mode");
    return { theme: next };
  }),
}));
export default useStore;
