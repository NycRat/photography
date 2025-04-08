import Image from "next/image";

export default function Grid() {
  return (
    <div className="grid grid-cols-4">
      {Array.from(Array(7).keys()).map((i) => (
        <Image
          key={i}
          src={`/photography/nature/${i}.jpeg`}
          alt="photo"
          className="w-full aspect-[3/2]" // FIX vertical images are stretched
          width={1}
          height={1}
        />
      ))}
      {Array.from(Array(9).keys()).map((i) => (
        <Image
          key={i}
          src={`/photography/steveston/${i}.jpeg`}
          alt="photo"
          className="w-full aspect-[3/2]" // FIX vertical images are stretched
          width={1}
          height={1}
        />
      ))}
    </div>
  );
}
