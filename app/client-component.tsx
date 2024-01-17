"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export const ClientComponent = () => {
  const [counter, setCounter] = useState(1);

  return (
    <div className="my-14 flex h-full w-full flex-col items-center justify-center">
      <h1 className="text-2xl font-bold my-24">{counter}</h1>
      <div>
        <Button onClick={() => setCounter((prev: number) => prev + 1)}>
          increment
        </Button>
      </div>
    </div>
  );
};
