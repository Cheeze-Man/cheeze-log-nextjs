type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};

export default function Categories({ categories, selected, onClick }: Props) {
  return (
    <section className="text-center p-4 ml-8">
      <h2 className="text-xl font-bold tracking-tight cursor-default border-b-2 border-amber-500 pb-2 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`font-semibold tracking-tighter cursor-pointer transition ease-in-out hover:scale-105 hover:text-amber-500 ${
              category === selected && "text-amber-600"
            }`}
            key={category}
            onClick={() => onClick(category)}
          >
            {category}
          </li>
        ))}
      </ul>
    </section>
  );
}
