import generateSchema from "../utils/generateSchema";
import { useTheme } from "../contexts/ThemeContext";

export default function JsonPreview({ schema }) {
  const { colors } = useTheme();

  return (
    <div
      style={{
        width: "100%",
        background: colors.secondary,
        padding: "10px",
        borderRadius: "5px",
        overflow: "auto",
        border: `1px solid ${colors.border}`,
      }}
    >
      <h3 style={{ color: colors.text }}>JSON Preview</h3>
      <pre
        style={{
          margin: 0,
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
          color: colors.text,
          background: colors.input,
          padding: "10px",
          borderRadius: "4px",
        }}
      >
        {JSON.stringify(generateSchema(schema), null, 2)}
      </pre>
    </div>
  );
}
