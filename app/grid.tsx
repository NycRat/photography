"use client";

import Image from "next/image";
import metadata from "@/app/metadata.json";
import placeholders from "@/app/placeholders.json";
import FullImageTrigger from "./fullImage";
import { Collection } from "./types";

export default function Grid({
  tags,
  orientations,
}: {
  tags: Set<string>;
  orientations: boolean[];
}) {
  let n = 0;
  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {metadata.map((collectionData, i) => {
        return Array.from(Array(collectionData.images.length).keys()).map(
          (j) => {
            const isVertical = collectionData.images[j]["vertical"] || false;
            n++;
            const show =
              (tags.has(collectionData.name) || tags.size == 0) &&
              (orientations[isVertical ? 1 : 0] ||
                (!orientations[0] && !orientations[1]));

            const collection = collectionData.name as Collection;

            return (
              <div
                key={i + " " + j}
                className={`relative ${show ? "" : "hidden"}`}
              >
                <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-[#0003] transition-colors ease-in-out">
                  <FullImageTrigger
                    collection={collection}
                    index={j}
                    isVertical={isVertical}
                  >
                    <div className="absolute top-0 bottom-0 left-0 right-0"></div>
                  </FullImageTrigger>
                </div>
                <Image
                  src={`/photography/${String(collection)}/${j}_preview${
                    isVertical ? "_v" : ""
                  }.webp`}
                  alt="photo"
                  className="w-full aspect-[3/2] object-cover"
                  placeholder="blur"
                  blurDataURL={placeholders[collection][j]}
                  // blurDataURL={`/photography/${
                  //   collectionData.name
                  // }/${j}_placeholder${isVertical ? "_v" : ""}.webp`}
                  width={5616 * 0.25} // actual resolution * 0.25 cause preview
                  height={3744 * 0.25}
                />
              </div>
            );
          },
        );
      })}
    </div>
  );
}
