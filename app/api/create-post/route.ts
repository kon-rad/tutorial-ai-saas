import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  const { title, content } = await req.json();
  const response = await prisma.post.create({
    data: {
      title,
      content,
      published: false,
      authorId: 1,
    },
  });

  return Response.json({ response: response });
}
