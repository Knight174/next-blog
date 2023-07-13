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
  const { name, desc, content } = await request.json(); // 获取请求体中的 json 数据
  const data = await prisma.user.create({
    data: {
      name,
      desc,
      content,
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
  const history = await prisma.history.update({
    where: {
      id: data.id,
    },
    data,
  });
  return NextResponse.json({
    code: 200,
    message: "修改成功",
    data: history,
  });
}

export async function DELETE(request: Request) {
  const data = await request.json(); // 获取请求体中的 json 数据
  const history = await prisma.history.delete({
    where: {
      id: data.id,
    },
  });
  return NextResponse.json({
    code: 200,
    message: "删除成功",
    data: history,
  });
}
