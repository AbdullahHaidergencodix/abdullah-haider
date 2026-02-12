module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        accent: {
          50: "#eef7ff",
          100: "#d9edff",
          200: "#bce0ff",
          300: "#8eceff",
          400: "#59b0ff",
          500: "#3b8eff",
          600: "#1e6bf5",
          700: "#1755e1",
          800: "#1945b6",
          900: "#1a3d8f",
          950: "#152757",
        },
        bg: {
          primary: "#09090b",
          secondary: "#0c0c0f",
          tertiary: "#111114",
          card: "#131316",
          elevated: "#18181b",
        },
        text: {
          primary: "#fafafa",
          secondary: "#a1a1aa",
          muted: "#52525b",
          accent: "#3b8eff",
        },
      },
      fontFamily: {
        display: ['"Inter"', 'system-ui', 'sans-serif'],
        body: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      fontSize: {
        hero: ["clamp(2.8rem, 7vw, 5.5rem)", { lineHeight: "1.05", letterSpacing: "-0.035em", fontWeight: "800" }],
        "section-title": ["clamp(2rem, 4vw, 3.2rem)", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
      },
      animation: {
        "fade-up": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-up-d1": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.1s forwards",
        "fade-up-d2": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.2s forwards",
        "fade-up-d3": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.3s forwards",
        "fade-up-d4": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.4s forwards",
        "fade-up-d5": "fadeUp 0.8s cubic-bezier(0.16,1,0.3,1) 0.5s forwards",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "float-d": "float 6s ease-in-out 3s infinite",
        "marquee": "marquee 25s linear infinite",
        "shimmer": "shimmer 2.5s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
    },
  },
  plugins: [],
};
