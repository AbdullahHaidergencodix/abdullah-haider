import useCursor from "../hooks/useCursor";
export default function Cursor() {
  const { ring, dot } = useCursor();
  return (<><div ref={ring} className="cursor-ring"/><div ref={dot} className="cursor-dot"/></>);
}
