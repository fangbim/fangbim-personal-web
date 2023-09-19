'use client'
import { useEffect } from "react";
import TextReavel from "./components/textReavel";

export default function Home() {

  useEffect(() => {
    document.addEventListener("contextmenu", handleContextMenu)
    return() => {
      document.removeEventListener("contextmenu", handleContextMenu)
    }
  },[])

  const handleContextMenu = (e : any) => {
    e.preventDefault();
  };
  return (
    <main>
        <TextReavel/>
    </main>
  );
};
