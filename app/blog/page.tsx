import { Github, Mail, Pencil } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";
import { Article } from "./article";

const socials = [
  {
    icon: <Mail size={20} />,
    href: "mailto:eric@ericchenart.com",
    label: "Email",
    handle: "eric@ericchenart.com",
  },
  {
    icon: <Github size={20} />,
    href: "https://github.com/Knight174",
    label: "Github",
    handle: "Knight174",
  },
  {
    icon: <Pencil size={20} />,
    href: "https://juejin.cn/user/2154698521972423/posts",
    label: "稀土掘金",
    handle: "Eric_见嘉",
  },
];

const fetchBlogList = async () => {
  const res = await fetch("http://localhost:3000/api/v1/post");
  const data = res.json();
  return data;
};

interface Post {
  id: number;
  title: string;
  content: string;
  published: boolean;
  createdAt: string;
}

export default async function BlogPage() {
  const { data } = await fetchBlogList().catch((err) => console.error);
  console.log(data);
  const sorted: Post[] = data.map((post: Post) => ({
    // id: post.id,
    // title: post.title,
    // content: post.content,
    ...post,
  }));

  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="px-6 pt-16 mx-auto space-y-8 max-w-7xl lg:px-8 md:space-y-16 md:pt-24 lg:pt-32">
        <div className="max-w-2xl mx-auto lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl">
            Blog
          </h2>
          <p className="mt-4 text-zinc-400">
            Some of the posts are from work and some are on my own time.
          </p>
        </div>
        <div className="w-full h-px bg-zinc-800" />

        <div className="grid grid-cols-1 gap-4 mx-auto lg:mx-0 md:grid-cols-3">
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 0)
              .map((post) => (
                <Card key={post.id}>
                  <Article post={post} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 1)
              .map((post) => (
                <Card key={post.id}>
                  <Article post={post} views={0} />
                </Card>
              ))}
          </div>
          <div className="grid grid-cols-1 gap-4">
            {sorted
              .filter((_, i) => i % 3 === 2)
              .map((post) => (
                <Card key={post.id}>
                  <Article post={post} views={0} />
                </Card>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}
