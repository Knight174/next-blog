import { Navigation } from "../components/nav";
const BlogPage: React.FC = () => {
  return (
    <div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
      <Navigation />
      <div className="container min-h-screen px-4 mx-auto pt-20">
        <h3>Blog</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maiores
          expedita nostrum, asperiores officiis, voluptate quasi similique
          repellat laudantium laborum quisquam iste consequatur temporibus? Et,
          modi officia. Sequi rerum ex voluptas.
        </p>
      </div>
    </div>
  );
};

export default BlogPage;
