import React from "react";
import { useFieldArray, Controller } from "react-hook-form";
import { Button, Input, Select } from "antd";

const { Option } = Select;

export default function FieldRow({ control, name, remove }) {
  const { fields: nestedFields, append: appendNested, remove: removeNested } =
    useFieldArray({
      control,
      name: `${name}.children`,
    });

  return (
    <>
      <div
        className="field-row"
        style={{
          borderLeft: "2px solid #ccc",
          margin: "10px 0",
          paddingLeft: 15,
        }}
      >
        <div
          className="field-controls"
          style={{ display: "flex", gap: "10px", marginBottom: 10 }}
        >
          <Controller
            name={`${name}.name`}
            control={control}
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Field name"
                className="field-name-input"
                style={{ width: 200 }}
              />
            )}
          />

          <Controller
            name={`${name}.type`}
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                className="field-type-select"
                style={{ width: 150 }}
              >
                <Option value="String">String</Option>
                <Option value="Number">Number</Option>
                <Option value="boolean">Boolean</Option>
                <Option value="object id">Object ID</Option>
                <Option value="float">Float</Option>
                <Option value="Nested">Nested</Option>
              </Select>
            )}
          />

          <Button danger onClick={remove}>
            Delete
          </Button>
        </div>

        <Controller
          name={`${name}.type`}
          control={control}
          render={({ field: { value } }) =>
            value === "Nested" ? (
              <div style={{ marginLeft: 20 }}>
                {nestedFields.map((nestedField, i) => (
                  <FieldRow
                    key={nestedField.id}
                    control={control}
                    name={`${name}.children.${i}`}
                    remove={() => removeNested(i)}
                  />
                ))}
                <Button
                  type="dashed"
                  onClick={() =>
                    appendNested({ name: "", type: "String", children: [] })
                  }
                >
                  + Add Nested Field
                </Button>
              </div>
            ) : null
          }
        />
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .field-controls {
              flex-direction: column !important;
              gap: 8px !important;
            }
            .field-name-input {
              width: 100% !important;
            }
            .field-type-select {
              width: 100% !important;
            }
            .field-row {
              padding-left: 10px !important;
            }
          }
        `}
      </style>
    </>
  );
}
