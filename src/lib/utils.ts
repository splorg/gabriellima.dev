import { type ClassValue, clsx } from "clsx";
import type { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path: string) {
  return `${process.env.NEXT_PUBLIC_APP_URL}${path}`;
}

export function constructMetadata({
  title,
  description,
  image,
  ...props
}: {
  title: string;
  description: string;
  image: string;
  [key: string]: Metadata[keyof Metadata];
}): Metadata {
  return {
    title,
    description,
    keywords: [
      "Gabriel Lima",
      "Developer",
      "Engineer",
      "Full Stack",
      "Frontend",
      "Backend",
      "TypeScript",
      "React",
      "Next.js",
    ],
    openGraph: {
      title,
      description,
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
        },
      ],
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@_lima_b",
    },
    icons: "/favicon.ico",
    metadataBase: new URL("https://gabriellima.dev"),
    authors: [
      {
        name: "Gabriel Lima",
        url: "https://linkedin.com/in/limabs002",
      },
    ],
    creator: "Gabriel Lima",
    ...props,
  };
}
