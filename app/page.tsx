import { ClientComponent } from "./client-component";
import prisma from "@/lib/prisma";
import { CreatePostForm } from "@/components/CreatePostForm";

export default async function Home() {
  const posts = await prisma.post.findMany({});

  return (
    <div className="max-w-screen-xl mx-auto my-12 ">
      <h1 className="text-2xl mb-6">posts:</h1>
      <div className="flex flex-col space-y-2">
        {posts.map((post: any) => {
          return (
            <div
              className="flex flex-col p-4 border rounded-xl"
              key={`${post.id}`}
            >
              <h3 className="mb-2 font-bold">{post.title}</h3>
              <p className="text-xs">{post.content}</p>
            </div>
          );
        })}
      </div>
      <CreatePostForm />
      <ClientComponent />
    </div>
  );
}
