import useNetworkStatus from "../hooks/useNetworkStatus";
export default function NetworkStatus() {
  const online = useNetworkStatus();
  if (online) return null;
  return (
    <div className="fixed top-0 left-0 right-0 z-[100002] bg-red-500/90 text-white text-center py-2 text-[12px] font-medium">
      You&rsquo;re offline. Some features may not work.
    </div>
  );
}
