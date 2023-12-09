"use client";
import { fetchTest } from "@/serveraction";
import { useState } from "react";

export default function Home() {
  const [value, setValue] = useState();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {JSON.stringify(value)}
      <button
        onClick={() => {
          fetchTest().then(setValue);
        }}
      >
        click to refresh
      </button>
    </main>
  );
}
