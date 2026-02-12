import { Toaster } from "react-hot-toast";
export default function ToastProvider() {
  return <Toaster position="top-center" toastOptions={{ style: { background: "#18181b", color: "#fafafa", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "12px", fontSize: "13px" }, duration: 3000 }} />;
}
