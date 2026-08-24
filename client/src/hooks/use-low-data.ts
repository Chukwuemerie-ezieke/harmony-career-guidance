import { useState, useEffect } from "react";

export function useLowDataMode() {
  const [isLowData, setIsLowData] = useState(() => {
    return localStorage.getItem("pathverge_low_data") === "true";
  });

  useEffect(() => {
    if (isLowData) {
      document.body.classList.add("low-data-mode");
      localStorage.setItem("pathverge_low_data", "true");
    } else {
      document.body.classList.remove("low-data-mode");
      localStorage.setItem("pathverge_low_data", "false");
    }
  }, [isLowData]);

  return { isLowData, setIsLowData };
}
