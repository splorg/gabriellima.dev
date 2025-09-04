import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title");
  const description = searchParams.get("description");

  const [regular, bold] = await Promise.all([
    readFile(join(process.cwd(), "./src/app/og/PTSerif-Regular.ttf")),
    readFile(join(process.cwd(), "./src/app/og/PTSerif-Bold.ttf")),
  ]);

  return new ImageResponse(
    <div
      tw="flex h-full w-full bg-neutral-900"
      style={{ fontFamily: "PTSerif" }}
    >
      <div tw="flex border absolute border-neutral-400 border-dashed inset-y-0 left-16 w-[1px]" />
      <div tw="flex border absolute border-neutral-400 border-dashed inset-y-0 right-16 w-[1px]" />
      <div tw="flex border absolute border-neutral-400 inset-x-0 h-[1px] top-16" />
      <div tw="flex border absolute border-neutral-400 inset-x-0 h-[1px] bottom-16" />
      {(title || description) && (
        <div tw="flex text-white absolute flex-row items-center justify-center bottom-24 right-24 tracking-tight ml-2 text-[32px] font-bold">
          Gabriel Lima
        </div>
      )}
      <div tw="flex flex-col absolute justify-center items-center inset-0 p-24 w-full h-full">
        {title || description ? (
          <div tw="flex flex-col items-center justify-center text-center w-full h-full">
            <div tw="tracking-tight flex flex-col justify-center text-white text-balance font-semibold text-[80px]">
              {title}
            </div>
            <div tw="text-[40px] text-neutral-400 mt-6 text-balance font-normal">
              {description}
            </div>
          </div>
        ) : (
          <div tw="flex flex-col items-center justify-center text-center w-full h-full">
            <div tw="text-white flex text-[80px] font-semibold tracking-tight">
              Gabriel Lima
            </div>
            <div tw="text-neutral-400 text-2xl flex">
              <p>Full-stack software engineer and developer.</p>
            </div>
          </div>
        )}
      </div>
    </div>,
    {
      width: 1200,
      height: 628,
      fonts: [
        { name: "PTSerif", data: regular, weight: 400, style: "normal" },
        { name: "PTSerif", data: bold, weight: 700, style: "normal" },
      ],
    },
  );
}
