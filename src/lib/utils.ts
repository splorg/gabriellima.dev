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
  title = "Gabriel Lima",
  description = "Gabriel Lima is a full-stack software engineer and developer based in Brazil.",
  image = absoluteUrl("/og"),
  ...props
}: {
  title?: string;
  description?: string;
  image?: string;
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
        url: "https://github.com/splorg",
      },
    ],
    creator: "Gabriel Lima",
    ...props,
  };
}
