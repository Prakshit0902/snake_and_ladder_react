import { useState, useEffect } from "react";



const LadderComponent = ({ startId, endId }) => {
  const [lineStyle, setLineStyle] = useState({})

  useEffect(() => {
    const updateLinePosition = () => {
      const startElement = document.getElementById(startId)
      const endElement = document.getElementById(endId)

      if (!startElement || !endElement) {
        console.error("Element not found:", startId, endId)
        return;
      }

      const startRect = startElement.getBoundingClientRect()
      const endRect = endElement.getBoundingClientRect()

      const x1 = startRect.left + startRect.width / 2;
      const y1 = startRect.top + startRect.height / 2;
      const x2 = endRect.left + endRect.width / 2;
      const y2 = endRect.top + endRect.height / 2;

      const length = Math.hypot(x2 - x1, y2 - y1);
      const angle = Math.atan2(y2 - y1, x2 - x1) * (180 / Math.PI); 
      setLineStyle({
        position: "absolute",
        top: `${y1}px`,
        left: `${x1}px`,
        width: `${length}px`,
        height: "10px",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        transform: `rotate(${angle}deg)`,
        transformOrigin: "0 0",
        zIndex: 1,
        borderRadius:"30px",
      })


    }

    updateLinePosition();
    window.addEventListener("resize", updateLinePosition); 

    return () => window.removeEventListener("resize", updateLinePosition);
  }, [startId, endId]);

  return <div style={lineStyle} />;
}

export default LadderComponent