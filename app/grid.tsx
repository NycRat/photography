import Image from "next/image";
import metadata from "@/public/metadata.json";
import FullImageTrigger from "./fullImage";

export default function Grid() {
  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {metadata.map((collectionData, i) => {
        return Array.from(Array(collectionData.images.length).keys()).map(
          (j) => {
            const isVertical = collectionData.images[j]["vertical"] || false;
            return (
              <FullImageTrigger
                key={i + " " + j}
                collection={collectionData.name}
                index={j}
              >
                <div className="relative">
                  <Image
                    src={`/photography/${collectionData.name}/${j}.jpeg`}
                    alt="photo"
                    className="w-full aspect-[3/2] object-cover"
                    width={1}
                    height={1}
                  />
                  <div className="absolute top-0 bottom-0 left-0 right-0 hover:bg-[#0003] transition-colors ease-in-out"></div>
                  {/* {isVertical && ( */}
                  {/*   <span className="absolute z-10 top-0 mix-blend-difference text-white"> */}
                  {/*     vertical */}
                  {/*   </span> */}
                  {/* )} */}
                </div>
              </FullImageTrigger>
            );
          },
        );
      })}
    </div>
  );
}
