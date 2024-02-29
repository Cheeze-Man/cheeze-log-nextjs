import Image from "next/image";
import profileImage from "../../public/images/profile_img.gif";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center shadow-lg pb-4">
      <Image
        className="mx-auto rounded-full"
        src={profileImage}
        alt="Profile Image"
        width={250}
        height={250}
        priority
      />
      <h2 className="text-3xl font-bold mt-2 tracking-tight">
        {"👋Hi, I'm CheezeMan🧀"}
      </h2>
      <h3 className="text-xl font-semibold">Front-end Developer</h3>
      <p>a challenging developer, CheezeMan</p>
      <Link href="/contact">
        <button className="bg-amber-500 font-bold rounded-lg py-1 px-4 mt-2 tracking-tight">
          Contact Me
        </button>
      </Link>
    </section>
  );
}
