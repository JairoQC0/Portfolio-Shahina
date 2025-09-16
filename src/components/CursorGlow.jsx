import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const cursorRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed w-40 h-40 rounded-full bg-purple-500/30 blur-3xl mix-blend-screen z-[9999] -translate-x-1/2 -translate-y-1/2"
    />
  );
}
