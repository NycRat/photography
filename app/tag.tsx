import { Toggle } from "@/components/ui/toggle";

export default function Tag({
  name,
  onClick,
  defaultOn,
  disabled,
  pressed,
}: {
  name: string;
  onClick: (pressed: boolean) => void;
  defaultOn?: boolean;
  disabled?: boolean;
  pressed?: boolean;
}) {
  return (
    <Toggle
      onPressedChange={onClick}
      defaultPressed={defaultOn}
      pressed={pressed}
      disabled={disabled}
      data-on={"on"}
    >
      {name}
    </Toggle>
  );
}
