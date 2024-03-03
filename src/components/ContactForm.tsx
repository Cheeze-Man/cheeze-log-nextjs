"use client";
import { useState } from "react";
import Banner, { BannerData } from "./Banner";
import { sendContactEmail } from "@/service/contact";

type Form = {
  from: string;
  subject: string;
  message: string;
};

const DEFAULT_DATA = {
  from: "",
  subject: "",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>(DEFAULT_DATA);
  const [banner, setBanner] = useState<BannerData | null>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendContactEmail(form) //
      .then(() => {
        setBanner({ message: "이메일이 전송됐습니다.", state: "success" });
        setForm(DEFAULT_DATA);
      }) //
      .catch(() => {
        setBanner({ message: "이메일 전송에 실패했습니다.", state: "error" });
      }) //
      .finally(() => {
        setTimeout(() => {
          setBanner(null);
        }, 3000);
      });
  };

  return (
    <section className="w-full max-w-md">
      {banner && <Banner banner={banner} />}
      <form
        className="w-full flex flex-col gap-2 my-4 p-4 bg-slate-700 rounded-xl text-white"
        onSubmit={handleSubmit}
      >
        <label className="font-semibold" htmlFor="from">
          Your Email
        </label>
        <input
          className="text-black rounded-sm p-2 italic mb-2"
          required
          autoFocus
          type="email"
          id="from"
          name="from"
          placeholder="이메일을 입력해주세요."
          value={form.from}
          onChange={handleFormChange}
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="text-black rounded-sm p-2 font-semibold mb-2"
          required
          type="text"
          id="subject"
          name="subject"
          placeholder="제목을 입력해주세요."
          value={form.subject}
          onChange={handleFormChange}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="text-black rounded-sm p-2"
          required
          rows={10}
          id="message"
          name="message"
          placeholder="내용을 입력해주세요."
          value={form.message}
          onChange={handleFormChange}
        />
        <button className="rounded-sm bg-amber-300 text-black font-bold transition-all hover:bg-amber-400 p-2">
          Submit
        </button>
      </form>
    </section>
  );
}
