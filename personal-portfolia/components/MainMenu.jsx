export function MainMenu({ items }) {
  return (
    <div class="flex gap-4">
      {items.map((item) => (
        <a key={item.id} class="font-inter text-slate-600" href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
