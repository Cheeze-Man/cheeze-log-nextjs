import Hero from "@/components/Hero";

const TITLE_CLASS = "text-4xl font-bold text-gray-800 mb-1 cursor-default";
const DIV_CLASS = "transition-all hover:scale-110";
const P_CLASS = "text-lg font-semibold text-gray-700 tracking-tight";

export default function aboutPage() {
  return (
    <article className="flex flex-col h-full">
      <Hero />
      <section className="flex flex-col bg-amber-100 shadow-lg p-8 m-8 text-center justify-evenly grow">
        <div className={DIV_CLASS}>
          <h2 className={TITLE_CLASS}>Who Am I?</h2>
          <p className={P_CLASS}>
            도전적인 프론트엔드 개발자
            <br />
            나와 서비스의 끝없는 발전을 갈구하는 개발자
          </p>
        </div>
        <div className={DIV_CLASS}>
          <h2 className={TITLE_CLASS}>My Career</h2>
          <p className={P_CLASS}>
            {"Amber Road <internship> (2023.09 - 2023.10)"}
          </p>
        </div>
        <div className={DIV_CLASS}>
          <h2 className={TITLE_CLASS}>My Skills</h2>
          <p className={P_CLASS}>
            HTML, CSS, JavaScript
            <br />
            React, Next.js, TypeScript
            <br />
            Sass, SCSS, TailwindCSS
            <br />
            axios, ReactQuery
            <br />
            Zustand, Redux-Toolkit
            <br />
            OAuth2.0, MongoDB, FireBase
            <br />
            Git, GitHub, Jira, Trello, Slack, Notion
          </p>
        </div>
      </section>
    </article>
  );
}
