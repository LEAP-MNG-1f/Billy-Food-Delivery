"use client";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AnchorTemporaryDrawer from "./_components/Drawer";
import { Card } from "./_components/Card";

export default function Home() {
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/");
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  const price: number = 1000;
  let str: string = "Hello";
  let bool: boolean = true;

  return (
    <div>
      <Card img="Zurag" title="Burger" price={5500} discount={20} />
      <Card img="Zurag" title="Burger" price={5500} />
      {/* <AcUnitIcon /> */}
    </div>
  );
}
