"use client";

import { useEffect, useRef } from "react";

export function PageUrlField() {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.value = window.location.href;
    }
  }, []);

  return <input ref={inputRef} type="hidden" name="pagina" defaultValue="" />;
}
