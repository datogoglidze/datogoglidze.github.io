import { useState } from "react";
import { useTheme } from "@/components/theme-provider.tsx";
import "./snow.css";

export function Snow() {
  const { theme } = useTheme();

  const month = new Date().getMonth();
  const isWinterSeason = month === 11 || month === 0;

  const isDarkMode =
    theme === "dark" ||
    (theme === "system" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches);

  const [snowflakes] = useState(() =>
    Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      animationDuration: (Math.random() * 4 + 3) * 1.3 + "s",
      animationDelay: Math.random() * 10 + "s",
      opacity: Math.random() * 0.5 + 0.5,
      size: Math.random() * 3 + 2 + "px",
    }))
  );

  if (!isWinterSeason || !isDarkMode) {
    return null;
  }

  return (
    <div className="snow-container">
      {snowflakes.map((flake) => (
        <div
          key={flake.id}
          className="snowflake"
          style={{
            left: `${flake.left}%`,
            animationDuration: flake.animationDuration,
            animationDelay: flake.animationDelay,
            opacity: flake.opacity,
            width: flake.size,
            height: flake.size,
          }}
        />
      ))}
    </div>
  );
}
