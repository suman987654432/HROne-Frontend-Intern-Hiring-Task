import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Card, ConfigProvider, theme } from "antd";
import Layout from "./components/Layout";
import HeaderBar from "./components/HeaderBar";
import SchemaBuilder from "./components/SchemaBuilder";
import JsonPreview from "./components/JsonPreview";
import { ThemeProvider, useTheme } from "./contexts/ThemeContext";

function AppContent() {
  const { control, watch, reset } = useForm({
    defaultValues: { fields: [{ name: "", type: "String", children: [] }] },
  });

  const schema = watch("fields");
  const { isDark, colors } = useTheme();

  useEffect(() => {
    const savedSchema = localStorage.getItem("schemaData");
    if (savedSchema) reset(JSON.parse(savedSchema));
  }, [reset]);

  useEffect(() => {
    localStorage.setItem("schemaData", JSON.stringify({ fields: schema }));
  }, [schema]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
      }}
    >
      <Layout
        left={
          <>
            <HeaderBar onReset={() => reset({ fields: [] })} />
            <Card style={{ background: colors.card }}>
              <SchemaBuilder control={control} />
            </Card>
          </>
        }
        right={
          <Card style={{ background: colors.card }}>
            <JsonPreview schema={schema} />
          </Card>
        }
      />
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}
