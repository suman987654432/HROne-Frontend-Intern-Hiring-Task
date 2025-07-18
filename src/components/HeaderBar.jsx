import React from "react";
import { Button } from "antd";
import { useTheme } from "../contexts/ThemeContext";

export default function HeaderBar({ onReset }) {
  const { isDark, toggleTheme, colors } = useTheme();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
        color: colors.text,
      }}
    >
      <h2 style={{ margin: 0, textAlign: "center", color: colors.text }}>
        JSON Schema Builder
      </h2>
      <div style={{ display: "flex", gap: "10px" }}>
        <Button onClick={toggleTheme}>
          {isDark ? "🌞" : "🌙"} {isDark ? "Light" : "Dark"}
        </Button>
        <Button danger onClick={onReset}>
          Reset
        </Button>
      </div>
    </div>
  );
}
