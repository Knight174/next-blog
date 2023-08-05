"use client";

import { useEffect } from "react";
// 用于上传查看数量
export const ReportView: React.FC<{ slug: string }> = ({ slug }) => {
  useEffect(() => {
    fetch("/api/v1/postview", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ slug }),
    });
  }, [slug]);

  return null;
};
