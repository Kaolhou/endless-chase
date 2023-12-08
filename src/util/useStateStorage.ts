import { useEffect, useState } from "react";

type InitialValueType<T> = T;

export const useStateStorage = <T>(
  key: string,
  initialValue: InitialValueType<T>
): [
  InitialValueType<T>,
  React.Dispatch<React.SetStateAction<InitialValueType<T>>>
] => {
  const storedValue = sessionStorage.getItem(key);
  const initial = storedValue ? JSON.parse(storedValue) : initialValue;
  const [state, setState] = useState<InitialValueType<T>>(initial);

  useEffect(() => {
    sessionStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};
