import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className="w-2/3 mx-auto pt-28">
      <h1 className="font-bold text-2xl">Arif Dogan</h1>
      <h3 onClick={() => router.push(`/blog`)} className="mt-1 underline cursor-pointer hover:no-underline">
        Blog
      </h3>
      <a href="https://github.com/doganarif" target="blank">
        <h3 className="mt-1 underline cursor-pointer hover:no-underline">Code</h3>
      </a>
      <h3 className="mt-1 courier-font">arif@10lift.com</h3>
    </div>
  );
};

export default Home;
