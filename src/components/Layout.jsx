import React from "react";

export default function Layout({ left, right }) {
  return (
    <>
      <div
        className="layout-container"
        style={{ display: "flex", height: "100vh", overflow: "hidden" }}
      >
        {/* left side */}
        <div
          className="left-panel"
          style={{
            flex: 1,
            padding: 20,
            overflowY: "auto",
            borderRight: "1px solid #ddd",
            background: "#fff",
          }}
        >
          {left}
        </div>

        {/* right side */}
        <div
          className="right-panel"
          style={{
            flex: 1,
            padding: 20,
            background: "#fafafa",
            overflowY: "auto",
          }}
        >
          {right}
        </div>
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .layout-container {
              flex-direction: column !important;
            }
            .left-panel {
              border-right: none !important;
              border-bottom: 1px solid #ddd !important;
            }
          }
        `}
      </style>
    </>
  );
}
