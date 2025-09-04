import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  return new ImageResponse(
    <div tw="flex h-full w-full bg-neutral-900">
      <div tw="flex border absolute border-neutral-400 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-neutral-400 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-neutral-400 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-neutral-400 inset-x-0 h-[1px] bottom-16" />
      {(title || description) && (
        <div tw="flex text-white absolute flex-row items-center justify-center bottom-24 right-24 tracking-tight ml-2 text-[32px]">
          {siteConfig.authorName}
        </div>
      )}
      <div tw="flex flex-col absolute justify-center items-center inset-0 p-24 w-full h-full">
        {title || description ? (
          <div tw="flex flex-col items-center justify-center text-center w-full h-full">
            <div tw="tracking-tight flex flex-col justify-center text-white text-balance text-[80px]">
              {title}
            </div>
            <div tw="text-[40px] text-neutral-400 mt-6 text-balance font-normal">
              {description}
            </div>
          </div>
        ) : (
          <div tw="flex flex-col items-center justify-center text-center w-full h-full">
            <div tw="text-white flex text-[80px] tracking-tight">
              {siteConfig.authorName}
            </div>
            <div tw="text-neutral-400 text-2xl flex">
              <p>{siteConfig.shortDescription}</p>
            </div>
          </div>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
    },
  );
}
