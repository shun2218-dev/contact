import { Container, Typography } from "@mui/material";
import React from "react";
import { useRedirect } from "../hooks/useRedirect";

const NotFound = () => {
  const count = useRedirect("/form");
  return (
    <>
      <Container>
        <Typography variant="h1">404</Typography>
        <Typography variant="h2">Not Found</Typography>
        <Typography variant="h2">{count}</Typography>
      </Container>
    </>
  );
};

export default NotFound;
