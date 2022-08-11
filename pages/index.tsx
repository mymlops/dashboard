import React, { useState, useEffect } from "react";
import Link from "next/link";
import type { NextPage } from "next";
import { AppBar, Toolbar, Stack, Typography } from "@mui/material";
import ToolChip from "../components/ToolChip";
import { ITool } from "../api/tool";
import {
  JupyterLogo,
  ApacheAirflowLogo,
  MLflowLogo,
  GrafanaLogo,
  PrometheusLogo,
} from "../public";
import { BsStack } from "react-icons/bs";
import theme, { blueBlack } from "../styles/theme";

const DEFAULT_SEARCH = "?folder=/home/ubuntu/workspace/example-1";

const editor: ITool = { name: "VSCode", port: "8888" };

const apps: ITool[] = [
  { name: "Jupyter", logo: JupyterLogo, port: "8889" },
  { name: "Apache Airflow", logo: ApacheAirflowLogo, port: "8080" },
  { name: "MLflow", logo: MLflowLogo, port: "5000" },
  { name: "Grafana", logo: GrafanaLogo, port: "3000" },
  { name: "Prometheus", logo: PrometheusLogo, port: "9090" },
];

const Home: NextPage = () => {
  const [protocol, setProtocol] = useState<string | undefined>();
  const [hostname, setHostname] = useState<string | undefined>();

  useEffect(() => {
    setProtocol(window.location.protocol);
    setHostname(window.location.hostname);
  }, []);

  const handleToolClick = (tool: ITool) => {
    window.open(`${protocol}//${hostname}:${tool.port}`);
  };

  return (
    <>
      <AppBar elevation={0} sx={{ backgroundColor: blueBlack }}>
        <Toolbar variant="dense">
          <Stack
            direction="row"
            alignItems="center"
            gap={2}
            component="a"
            target="_blank"
            href="https://mymlops.com"
            rel="noopener noreferrer"
          >
            <BsStack color={theme.palette.primary.light} size={25} />
            <Typography color="white" variant="h5">
              MyMLOps
            </Typography>
          </Stack>
          <Stack direction="row" justifyContent="flex-end" flexGrow={1} gap={2}>
            {apps.map((app, index) => (
              <ToolChip
                key={index}
                tool={app}
                size="small"
                onClick={() => handleToolClick(app)}
              />
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
