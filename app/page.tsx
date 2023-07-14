import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

const navigation = [
  { name: "Blog", href: "/posts" },
  { name: "Contact", href: "/contact" },
];
// const skills = [
//   { alt: "html5", label: "HTML5", color: "f16334", logo: "html5" },
//   { alt: "css3", label: "CSS3", color: "3664F8", logo: "css3" },
//   { alt: "js", label: "JavaScript", color: "EEDA4D", logo: "JavaScript" },
//   { alt: "React", label: "React.js", color: "0a7ea3", logo: "react" },
//   { alt: "Vue.js", label: "Vue.js", color: "31a06f", logo: "vue.js" },
//   {
//     alt: "TypeScript",
//     label: "TypeScript",
//     color: "3077c6",
//     logo: "typescript",
//   },
//   { alt: "Sass", label: "Sass", color: "CC6699", logo: "sass" },
//   {
//     alt: "TailwindCSS",
//     label: "TailwindCSS",
//     color: "37bcf8",
//     logo: "tailwindcss",
//   },
//   { alt: "Pug", label: "Pug", color: "A86454", logo: "pug" },
//   { alt: "Axios", label: "Axios", color: "671CDE", logo: "axios" },
//   { alt: "Webpack", label: "Webpack", color: "2b3a42", logo: "webpack" },
//   { alt: "Vite", label: "Vite", color: "906cfe", logo: "vite" },
//   { alt: "Rollup", label: "Rollup", color: "FE3333", logo: "rollup.js" },
//   { alt: "Docker", label: "Docker", color: "003f8c", logo: "docker" },
//   { alt: "Git", label: "Git", color: "ec5135", logo: "git" },
//   { alt: "ESLint", label: "ESLint", color: "7d7ef1", logo: "eslint" },
//   { alt: "Prettier", label: "Prettier", color: "f8bb45", logo: "prettier" },
//   { alt: "Node.js", label: "Node.js", color: "7fb901", logo: "node.js" },
//   { alt: "Next.js", label: "Next.js", color: "2f2f2f", logo: "next.js" },
//   { alt: "Vercel", label: "Vercel", color: "000000", logo: "vercel" },
//   { alt: "Ruby", label: "Ruby", color: "ab1201", logo: "ruby" },
//   {
//     alt: "postgresql",
//     label: "PostgreSQL",
//     color: "326593",
//     logo: "postgresql",
//   },
//   { alt: "prisma", label: "Prisma", color: "4C51BE", logo: "prisma" },
//   { alt: "postman", label: "Postman", color: "FE6C37", logo: "postman" },
//   { alt: "figma", label: "Figma", color: "2C2D33", logo: "figma" },
// ];

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1 className="z-10 text-4xl text-transparent duration-500 bg-white cursor-default text-edge-outline animate-title font-display sm:text-6xl md:text-9xl whitespace-nowrap bg-clip-text ">
        Eric
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 animate-fade-in">
        <h2 className="text-sm text-zinc-500 text-center">
          Hi, I'm Eric, frontend developer from China, currently living in
          Shanghai, China.
        </h2>
        {/* <p className="my-16 flex max-w-lg border-2 overflow-auto">
          {skills.map((skill) => (
            <img
              className="m-2"
              key={skill.color}
              alt={skill.alt}
              src={`https://img.shields.io/badge/-${skill.label}-${skill.color}?style=flat-square&logo=${skill.logo}&logoColor=white`}
            />
          ))}
        </p> */}
      </div>
    </div>
  );
}
