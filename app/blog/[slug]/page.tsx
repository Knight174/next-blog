import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";
import { Mdx } from "@/app/components/mdx";
import { Header } from "./header";
import "./mdx.css";
import { ReportView } from "./view";
import { Redis } from "@upstash/redis";

export const revalidate = 60;

type Props = {
  params: {
    slug: string;
  };
};

const redis = Redis.fromEnv();

export async function generateStaticParams(): Promise<Props["params"][]> {
  return allPosts
    .filter((p) => p.published)
    .map((p) => ({
      slug: p.slug,
    }));
}

export default async function PostPage({ params }: Props) {
  const slug = params?.slug;
  const post = await allPosts.find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }

  const views =
    (await redis.get<number>(["pageviews", "posts", slug].join(":"))) ?? 0;

  // const views = 0;
  // console.log("singe views", views);

  return (
    <div className="bg-zinc-50 min-h-screen">
      <Header post={post} views={views} />
      <ReportView slug={post.slug} />

      <article className="px-4 py-12 mx-auto prose prose-zinc prose-quoteless">
        <Mdx code={post.body.code} />
      </article>
    </div>
  );
}
