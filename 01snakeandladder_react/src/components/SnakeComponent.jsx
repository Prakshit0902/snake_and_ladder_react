import { useState,useEffect } from "react";

const SnakeComponent = ({ startId, endId }) => {
  const [pathD, setPathD] = useState(""); 

  useEffect(() => {
    const updatePath = () => {
      const startElement = document.getElementById(startId);
      const endElement = document.getElementById(endId);

      if (!startElement || !endElement) {
        console.error("Element not found:", startId, endId);
        return;
      }

      const startRect = startElement.getBoundingClientRect();
      const endRect = endElement.getBoundingClientRect();

      const x1 = startRect.left + startRect.width / 2;
      const y1 = startRect.top + startRect.height / 2;
      const x2 = endRect.left + endRect.width / 2;
      const y2 = endRect.top + endRect.height / 2;


  const d = `M ${x1} ${y1}
            C ${x1 + 100} ${y1}, ${x2 - 100} ${y2}, ${x2} ${y2}`
      setPathD(d)
    }

    updatePath()
    window.addEventListener("resize", updatePath)

    return () => window.removeEventListener("resize", updatePath);
  }, [startId, endId])

  return (
    <svg className="absolute top-0 left-0 w-full h-full pointer-events-none">
      <path d={pathD} stroke="rgba(255, 0, 0, 0.5)" strokeWidth="5" strokeLinecap='round' fill="none" />
    </svg>
  )
}

export default SnakeComponent