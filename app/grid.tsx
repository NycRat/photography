import Image from "next/image";
import metadata from "@/public/metadata.json";

export default function Grid() {
  const thing = metadata.map((collectionData, i) => {
    return Array.from(Array(collectionData.images.length).keys()).map((j) => (
      <Image
        key={i + " " + j}
        src={`/photography/${collectionData.name}/${j}.jpeg`}
        alt="photo"
        className="w-full aspect-[3/2]" // FIX vertical images are stretched
        width={1}
        height={1}
      />
    ));
  });
  console.log(thing);
  return (
    <div className="grid grid-cols-4">
      {thing}
      {/* {Array.from(Array(9).keys()).map((i) => ( */}
      {/*   <Image */}
      {/*     key={i} */}
      {/*     src={`/photography/steveston/${i}.jpeg`} */}
      {/*     alt="photo" */}
      {/*     className="w-full aspect-[3/2]" // FIX vertical images are stretched */}
      {/*     width={1} */}
      {/*     height={1} */}
      {/*   /> */}
      {/* ))} */}
      {/* {Array.from(Array(9).keys()).map((i) => ( */}
      {/*   <Image */}
      {/*     key={i} */}
      {/*     src={`/photography/steveston/${i}.jpeg`} */}
      {/*     alt="photo" */}
      {/*     className="w-full aspect-[3/2]" // FIX vertical images are stretched */}
      {/*     width={1} */}
      {/*     height={1} */}
      {/*   /> */}
      {/* ))} */}
    </div>
  );
}
