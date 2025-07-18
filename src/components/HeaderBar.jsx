import React from "react";
import { Button } from "antd";

export default function HeaderBar({ onReset }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 10 }}>
      <h2 style={{ margin: 0, textAlign: "center" }}>JSON Schema Builder</h2>
      <Button danger onClick={onReset}>
        Reset
      </Button>
    </div>
  );
}
