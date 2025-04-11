import { Button } from "@/components/ui/button";

export default function Tag({ name }: { name: string }) {
  return (
    <Button variant={"outline"}>
      <span className="">{name}</span>
    </Button>
  );
}
