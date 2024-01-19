import { Chip } from "../components/Chip";

export function ChipList({ items }) {
  return (
    <div class="mt-4 flex flex-wrap w-5/6 gap-1">
      {items.map((item) => (
        <Chip label={item.label} />
      ))}
    </div>
  );
}
