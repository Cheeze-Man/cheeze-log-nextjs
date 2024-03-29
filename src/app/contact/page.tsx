import { Metadata } from "next";
import { SiGithub, SiNaver } from "react-icons/si";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Me",
  description: "CheezeMan에게 메일 보내기",
};

const LINKS = [
  {
    title: "github",
    icon: <SiGithub />,
    url: "https://github.com/Cheeze-Man",
  },
  {
    title: "naverblog",
    icon: <SiNaver />,
    url: "https://blog.naver.com/cheeze-man",
  },
];

export default function ContactPage() {
  return (
    <section className="flex flex-col items-center">
      <h2 className="text-3xl font-bold my-2">Contact Me</h2>
      <p className="italic text-lg tracking-tighter">tumgh1324@gmail.com</p>
      <ul className="flex gap-6 my-2">
        {LINKS.map(({ title, icon, url }, i) => (
          <a
            className={`text-5xl transition-all hover:scale-110 ${
              title === "naverblog"
                ? "hover:text-green-500"
                : "hover:text-amber-500"
            }`}
            key={`${i}${url}`}
            href={url}
            target="_blank"
            rel="noreferrer"
          >
            {icon}
          </a>
        ))}
      </ul>
      <h2 className="text-3xl font-bold my-8">Or Send me an email</h2>
      <ContactForm />
    </section>
  );
}
