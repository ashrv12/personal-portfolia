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

export function MainMenuCol({ items }) {
  return (
    <div class="flex flex-col gap-y-4">
      {items.map((item) => (
        <a
          key={item.id}
          class="text-xl font-inter text-slate-600"
          href={item.link}
        >
          {item.label}
        </a>
      ))}
    </div>
  );
}
