import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import { AppBar, Toolbar, Stack, Button } from "@mui/material";

interface IApp {
  name: string;
  port: string;
}

const apps: IApp[] = [
  {
    name: "VSCode",
    port: "8888",
  },
  { name: "Jupyter", port: "8889" },
  { name: "Apache Airflow", port: "8080" },
  { name: "MLflow", port: "5000" },
  { name: "Grafana", port: "3000" },
  { name: "Prometheus", port: "9090" },
];

const Home: NextPage = () => {
  const ports = apps.map((app) => app.port);

  const [protocol, setProtocol] = useState("http");
  const [hostname, setHostname] = useState("0.0.0.0");
  const [currentPort, setCurrentPort] = useState("8888");

  useEffect(() => {
    setProtocol(window.location.protocol);
    setHostname(window.location.hostname);
  }, []);

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: "#1b1e2e" }}>
        <Toolbar>
          <Stack direction="row" justifyContent="flex-end" flexGrow={1} gap={2}>
            {apps.map((app, index) => (
              <Button
                key={index}
                variant="outlined"
                onClick={() => setCurrentPort(app.port)}
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
      {ports.map((port, index) => (
        <object
          key={index}
          data={`${protocol}//${hostname}:${port}`}
          width="100%"
          style={{
            position: "fixed",
            height: "calc(100vh - 64px)",
            top: 64,
            display: currentPort === port ? undefined : "none",
          }}
        />
      ))}
    </>
  );
};

export default Home;
