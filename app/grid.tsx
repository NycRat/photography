import Image from "next/image";
import metadata from "@/public/metadata.json";

export default function Grid() {
  return (
    <div className="grid 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1">
      {metadata.map((collectionData, i) => {
        return Array.from(Array(collectionData.images.length).keys()).map(
          (j) => (
            <Image
              key={i + " " + j}
              src={`/photography/${collectionData.name}/${j}.jpeg`}
              alt="photo"
              className="w-full aspect-[3/2]" // FIX vertical images are stretched
              width={1}
              height={1}
            />
          ),
        );
      })}
    </div>
  );
}
