import { Toggle } from "@/components/ui/toggle";

export default function Tag({
  name,
  onClick,
  defaultOn,
  disabled,
}: {
  name: string;
  onClick: (pressed: boolean) => void;
  defaultOn?: boolean;
  disabled?: boolean;
}) {
  return (
    <Toggle
      onPressedChange={onClick}
      defaultPressed={defaultOn}
      disabled={disabled}
    >
      {name}
    </Toggle>
  );
}
