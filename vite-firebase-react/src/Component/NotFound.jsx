import { Container, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const [count, setCount] = useState(3);

  useEffect(() => {
    setTimeout(() => {
      setCount(count - 1);
      count === 0 && navigate("/form");
    }, 1000);
  }, [count]);
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
