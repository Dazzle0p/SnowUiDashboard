const favorites = [
  {
    id: 1,
    label: "Overview",
  },
  {
    id: 2,
    label: "Projects",
  },
];

function FavoritesList() {
  return (
    <ul className="space-y-md p-2">
      {favorites.map((favItem) => (
        <li key={favItem.id} className="flex items-center gap-[7px]">
          <span className="w-1.5 h-1.5 bg-dark-muted dark:bg-light-muted rounded-circle"></span>
          <span className="">{favItem.label}</span>
        </li>
      ))}
    </ul>
  );
}

export default FavoritesList; 