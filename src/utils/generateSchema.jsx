export default function generateSchema(fields) {
  const result = {};
  fields.forEach((field) => {
    if (!field.name) return;
    if (field.type === "Nested") {
      result[field.name] = generateSchema(field.children || []);
    } else if (field.type === "String") {
      result[field.name] = "STRING";
    } else if (field.type === "Number") {
      result[field.name] = "Number";
    }
    else if (field.type === "boolean") {
      result[field.name] = "BOOLEAN";
    }
    else if (field.type === "object id") {
      result[field.name] = "OBJECT ID";
    }
    else if (field.type === "float") {
      result[field.name] = "FLOAT";
    }
  });
  return result;
}
