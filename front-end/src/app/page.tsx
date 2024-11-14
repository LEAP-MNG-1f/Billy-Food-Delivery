"use client";
import Image from "next/image";
import { useEffect } from "react";
import Alert from "@mui/material/Alert";
import CheckIcon from "@mui/icons-material/Check";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AnchorTemporaryDrawer from "./_components/Drawer";

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

  return (
    <div>
      <Alert
        severity="success"
        icon={<AcUnitIcon fontSize="inherit" className="  text-indigo-600" />}
      >
        Here is a gentle confirmation that your action was successful.
      </Alert>
      <AnchorTemporaryDrawer />
    </div>
  );
}
