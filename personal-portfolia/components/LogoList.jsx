export function LogoList({ items }) {
  return (
    <div class="pt-6 w-11/12 gap-6 flex justify-center flex-wrap">
      {items.map((item) => (
        <img key={item.id} class="h-16 w-auto" src={item.link} alt="tech" />
      ))}
    </div>
  );
}
