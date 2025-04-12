import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";

export default function FullImageTrigger({
  children,
  collection,
  index,
  isVertical,
}: {
  children: React.ReactNode;
  collection: string;
  index: number;
  isVertical: boolean;
}) {
  const fitDivClass = isVertical
    ? "h-[min(100vh-40px,calc(100vw*3/2-40px))] w-[min(100vw-40px,calc(100vh*2/3-40px))]"
    : "h-[min(100vh-40px,calc(100vw*2/3-40px))] w-[min(100vw-40px,calc(100vh*3/2-40px))]";
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className={fitDivClass}>
        <DialogTitle></DialogTitle>
        <Image
          src={`/photography/${collection}/${index}_full.webp`}
          placeholder="blur"
          blurDataURL={`/photography/${collection}/${index}_preview.webp`}
          alt="photo"
          className=""
          width={isVertical ? 3744 : 5616}
          height={isVertical ? 5616 : 3744}
        />
      </DialogContent>
    </Dialog>
  );
}
