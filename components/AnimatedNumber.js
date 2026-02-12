import useCounter from "../hooks/useCounter";
export default function AnimatedNumber({ target, suffix = "", prefix = "", className = "" }) {
  const { ref, count } = useCounter(target, 2000);
  return <span ref={ref} className={className}>{prefix}{count}{suffix}</span>;
}
