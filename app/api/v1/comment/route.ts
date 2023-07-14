import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // 根据创建时间倒叙排列，查询数据
  const data = await prisma.comment.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return NextResponse.json({
    code: 200,
    message: "获取成功",
    data,
  });
}

export async function POST(request: Request) {
  const { content, userId, postId } = await request.json(); // 获取请求体中的 json 数据
  const data = await prisma.comment.create({
    data: {
      content,
      user: { connect: { id: userId } },
      post: { connect: { id: postId } },
    },
  });
  return NextResponse.json({
    code: 200,
    message: "创建成功",
    data,
  });
}

export async function PUT(request: Request) {
  const data = await request.json(); // 获取请求体中的 json 数据
  const comment = await prisma.comment.update({
    where: {
      id: data.id,
    },
    data,
  });
  return NextResponse.json({
    code: 200,
    message: "修改成功",
    data: comment,
  });
}

export async function DELETE(request: Request) {
  const data = await request.json(); // 获取请求体中的 json 数据
  const comment = await prisma.comment.delete({
    where: {
      id: data.id,
    },
  });
  return NextResponse.json({
    code: 200,
    message: "删除成功",
    data: comment,
  });
}
