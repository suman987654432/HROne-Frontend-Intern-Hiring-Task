import generateSchema from "../utils/generateSchema";

export default function JsonPreview({ schema }) {
  return (
    <div
      style={{
        width: "100%",
        background: "#f5f5f5",
        padding: "10px",
        borderRadius: "5px",
        overflow: "auto",
      }}
    >
      <h3>JSON Preview</h3>
      <pre
        style={{
          margin: 0,
          wordWrap: "break-word",
          whiteSpace: "pre-wrap",
        }}
      >
        {JSON.stringify(generateSchema(schema), null, 2)}
      </pre>
    </div>
  );
}
