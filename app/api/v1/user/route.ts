import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: Request) {
  // 根据创建时间倒叙排列，查询数据
  const data = await prisma.user.findMany({
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
  const { username, password_digest } = await request.json(); // 获取请求体中的 json 数据
  const data = await prisma.user.create({
    data: {
      username,
      password_digest,
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
  const user = await prisma.user.update({
    where: {
      id: data.id,
    },
    data,
  });
  return NextResponse.json({
    code: 200,
    message: "修改成功",
    data: user,
  });
}

export async function DELETE(request: Request) {
  const data = await request.json(); // 获取请求体中的 json 数据
  const user = await prisma.user.delete({
    where: {
      id: data.id,
    },
  });
  return NextResponse.json({
    code: 200,
    message: "删除成功",
    data: user,
  });
}
