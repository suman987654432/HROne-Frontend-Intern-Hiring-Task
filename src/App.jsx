import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card } from "antd";
import Layout from "./components/Layout";
import HeaderBar from "./components/HeaderBar";
import SchemaBuilder from "./components/SchemaBuilder";
import JsonPreview from "./components/JsonPreview";

export default function App() {
  const { control, watch, reset } = useForm({
    defaultValues: { fields: [{ name: "", type: "String", children: [] }] },
  });

  const schema = watch("fields");


  useEffect(() => {
    const savedSchema = localStorage.getItem("schemaData");
    if (savedSchema) reset(JSON.parse(savedSchema));
  }, [reset]);

  
  useEffect(() => {
    localStorage.setItem("schemaData", JSON.stringify({ fields: schema }));
  }, [schema]);

  return (
    <Layout
      left={
        <>
          <HeaderBar onReset={() => reset({ fields: [] })} />
          <Card>
            <SchemaBuilder control={control} />
          </Card>
        </>
      }
      right={
        <Card>
          <JsonPreview schema={schema} />
        </Card>
      }
    />
  );
}
