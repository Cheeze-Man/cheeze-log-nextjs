"use client";
import { useState } from "react";
import Banner, { BannerData } from "./Banner";

type Form = {
  from: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<Form>({
    from: "",
    subject: "",
    message: "",
  });
  const [banner, setBanner] = useState<BannerData | null>(null);

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(form);
    setBanner({ message: "이메일이 전송됐습니다.", state: "success" });
    setTimeout(() => {
      setBanner(null);
    }, 3000);
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
          className="rounded-sm"
          required
          autoFocus
          type="email"
          id="from"
          name="from"
          value={form.from}
          onChange={handleFormChange}
        />
        <label className="font-semibold" htmlFor="subject">
          Subject
        </label>
        <input
          className="rounded-sm"
          required
          type="text"
          id="subject"
          name="subject"
          value={form.subject}
          onChange={handleFormChange}
        />
        <label className="font-semibold" htmlFor="message">
          Message
        </label>
        <textarea
          className="text-black rounded-sm"
          required
          rows={10}
          id="message"
          name="message"
          value={form.message}
          onChange={handleFormChange}
        />
        <button className="rounded-sm bg-amber-300 text-black font-bold hover:bg-amber-400">
          Submit
        </button>
      </form>
    </section>
  );
}
