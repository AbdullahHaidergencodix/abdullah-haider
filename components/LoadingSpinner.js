export default function LoadingSpinner({ size = 40 }) {
  return (
    <div className="flex items-center justify-center" style={{ width: size, height: size }}>
      <div className="w-full h-full rounded-lg border-2 border-accent-500/20 border-t-accent-500 animate-spin" />
    </div>
  );
}
