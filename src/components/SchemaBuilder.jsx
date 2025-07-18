import React from "react";
import { useFieldArray } from "react-hook-form";
import { Button } from "antd";
import FieldRow from "../components/FieldRow";

export default function SchemaBuilder({ control }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "fields",
  });

  return(
    <div>
      {fields.map((field, index) => (
        <FieldRow
          key={field.id}
          control={control}
          name={`fields.${index}`}
          remove={() => remove(index)}
        />
      ))}
      <Button
        type="dashed"
        style={{ marginTop: 10 }}
        onClick={() =>
          append({ name: "", type: "String", children: [] })
        }
      >
        + Add Field
      </Button>
    </div>
  );
}
