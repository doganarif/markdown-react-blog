import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";

export async function getStaticProps() {
  const files = fs.readdirSync("blogs");

  const blogs = files.map((fileName) => {
    const slug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(`blogs/${fileName}`, "utf-8");
    const { data: frontmatter } = matter(readFile);
    return {
      slug,
      frontmatter,
    };
  });

  return {
    props: {
      blogs,
    },
  };
}

const Blog = ({ blogs }) => {
  return (
    <div className="w-2/3 mx-auto md:grid-cols-3 lg:grid-cols-4 p-4 md:p-0">
      {blogs.map(({ slug, frontmatter }) => (
        <Link href={`/blog/${slug}`}>
          <h1 className="p-4 font-bold text-xl cursor-pointer hover:text-gray-500 hover:underline">{frontmatter.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Blog;
