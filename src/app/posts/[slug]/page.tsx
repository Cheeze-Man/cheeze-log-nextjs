import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { AiTwotoneCalendar } from "react-icons/ai";
import { getPostData } from "@/service/posts";
import MarkDownViewer from "@/components/MarkdownViewer";
import Image from "next/image";

type Props = {
  params: {
    slug: string;
  };
};
export default async function PostPage({ params: { slug } }: Props) {
  const { title, description, date, path, content } = await getPostData(slug);

  return (
    <article className="rounded-2xl overflow-hidden bg-amber-100 shadow-lg m-4">
      <Image
        className="w-full h-1/5 max-h-[500px]"
        src={`/images/posts/${path}.png`}
        alt={title}
        width={760}
        height={420}
      />
      <section className="flex flex-col p-4">
        <div className="flex items-center self-end text-amber-600">
          <AiTwotoneCalendar />
          <p className="text-xl font-semibold ml-2">{date.toString()}</p>
        </div>
        <h1 className="text-4xl font-bold">{title}</h1>
        <p className="text-xl font-bold">{description}</p>
        <div className="w-full border-2 border-amber-600 mt-4 mb-8" />
        <MarkDownViewer content={content} />
      </section>
    </article>
  );
}
