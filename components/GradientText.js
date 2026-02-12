export default function GradientText({ children, from = "#3b8eff", to = "#7c3aed", className = "" }) {
  return (
    <span className={"inline-block bg-clip-text text-transparent " + className} style={{ backgroundImage: `linear-gradient(135deg, ${from}, ${to})` }}>
      {children}
    </span>
  );
}
