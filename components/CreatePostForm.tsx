"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import axios from "axios";

export const CreatePostForm = () => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/create-post", { title, content });
    } catch (e: any) {
      console.error(e);
    }
  };
  return (
    <div className="p-6 flex flex-col">
      <h2 className="text-xl mb-2">create a post</h2>
      <Input
        className="mb-4"
        value={title}
        onChange={(e: any) => setTitle(e.target.value)}
      />
      <Textarea
        className="mb-4"
        value={content}
        onChange={(e: any) => setContent(e.target.value)}
      ></Textarea>
      <Button className="m-2" onClick={handleSubmit}>
        submit
      </Button>
    </div>
  );
};
