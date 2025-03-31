import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import Button from "../components/Button";
import Dialog from "../components/Dialog";

export const Route = createFileRoute("/")({
  component: Page,
});

function Page() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <h1 className="text-xl text-teal-400">Home</h1>
      <input className="px-2 py-1 border-2 border-gray-200 rounded-lg w-full"/>
      <input type="file" className="w-full px-2 py-1 border-2 border-gray-200 rounded-lg file:bg-amber-300 file:px-1 file:rounded"/>
      <Button onClick={() => setCount(count + 1)}>Count: {count}</Button>
      <Dialog />
    </section>
  );
}

export default Page;
