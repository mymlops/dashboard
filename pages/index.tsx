import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";

const DEFAULT_SEARCH = "?folder=/home/ubuntu/workspace/example-1";

interface IApp {
  name: string;
  port: string;
}

const editor: IApp = { name: "VSCode", port: "8888" };

const apps: IApp[] = [
  { name: "Jupyter", port: "8889" },
  { name: "Apache Airflow", port: "8080" },
  { name: "MLflow", port: "5000" },
  { name: "Grafana", port: "3000" },
  { name: "Prometheus", port: "9090" },
];

const Home: NextPage = () => {
  const [protocol, setProtocol] = useState<string | undefined>();
  const [hostname, setHostname] = useState<string | undefined>();

  useEffect(() => {
    setProtocol(window.location.protocol);
    setHostname(window.location.hostname);
  }, []);

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: "#1b1e2e" }}>
        <Toolbar variant="dense">
          <Stack direction="row" justifyContent="flex-end" flexGrow={1} gap={2}>
            {apps.map((app, index) => (
              <Button
                key={index}
                variant="outlined"
                size="small"
                component="a"
                href={`${protocol}//${hostname}:${app.port}`}
                target="_blank"
                sx={{
                  borderColor: "#e83a74",
                  color: "#e83a74",
                  ":hover": {
                    borderColor: "#e83a74",
                  },
                  fontWeight: 700,
                }}
              >
                {app.name}
              </Button>
            ))}
          </Stack>
        </Toolbar>
      </AppBar>
      <iframe
        src={`${protocol}//${hostname}:${editor.port}/${DEFAULT_SEARCH}`}
        width="100%"
        style={{
          position: "fixed",
          height: "calc(100vh - 48px)",
          top: 48,
          border: "none",
        }}
      />
    </>
  );
};

export default Home;
