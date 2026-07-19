"use client";

import Link from "next/link";
import { useEffect } from "react";

export function NotFoundRedirect({
  title,
  text,
  link,
}: {
  title: string;
  text: string;
  link: string;
}) {
  useEffect(() => {
    window.location.replace("/");
  }, []);

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4 py-20">
      <div className="max-w-xl text-center">
        <h1 className="text-3xl font-bold text-gray-950">{title}</h1>
        <p className="mt-4 text-lg text-gray-600">{text}</p>
        <Link
          className="mt-8 inline-flex min-h-11 items-center rounded-xl bg-blue-600 px-6 py-3 font-bold text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
          href="/"
        >
          {link}
        </Link>
      </div>
    </div>
  );
}
