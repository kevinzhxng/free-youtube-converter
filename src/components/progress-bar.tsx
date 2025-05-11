"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function ProgressBar() {
  const pathname = usePathname();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    setProgress(30);
    const inc = setTimeout(() => setProgress(80), 200);
    const finish = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setVisible(false);
        setProgress(0);
      }, 300);
    }, 600);
    return () => {
      clearTimeout(inc);
      clearTimeout(finish);
    };
  }, [pathname]);

  if (!visible) return null;
  return (
    <div className="fixed top-0 left-0 w-full z-[100]">
      <div
        className="h-1 bg-blue-500 transition-all duration-300"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
} 