import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useBoolean, useInterval } from "react-use";

export const useRedirect = (pathname, initialCount = 3) => {
  const navigate = useNavigate();
  const [count, setCount] = useState(initialCount);
  const [isRunning, toggleIsRunning] = useBoolean(true);

  const redirect = () => {
    toggleIsRunning();
    navigate(pathname);
  };
  useInterval(
    () => {
      count > 1 ? setCount(count - 1) : redirect();
    },
    isRunning ? 1000 : null
  );

  return count;
};
