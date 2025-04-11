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
}: {
  children: React.ReactNode;
  collection: string;
  index: number;
}) {
  return (
    <Dialog>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="max-w-4/5 bg-transparent">
        <DialogTitle></DialogTitle>
        <Image
          src={`/photography/${collection}/${index}.jpeg`}
          alt="photo"
          className="w-full aspect-[3/2] object-cover rounded"
          width={1}
          height={1}
        />
      </DialogContent>
    </Dialog>
  );
}
