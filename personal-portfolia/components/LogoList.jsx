export function LogoList({ items }) {
  return (
    <div class="dark:hidden pt-6 w-11/12 gap-6 flex justify-center flex-wrap">
      {items.map((item) => (
        <img key={item.id} class="h-16 w-auto" src={item.link} alt="tech" />
      ))}
    </div>
  );
}

export function LogoListDark({ items }) {
  return (
    <div class="hidden dark:flex pt-6 w-11/12 gap-6 justify-center flex-wrap">
      {items.map((item) => (
        <img key={item.id} class="h-16 w-auto" src={item.link} alt="tech" />
      ))}
    </div>
  );
}
