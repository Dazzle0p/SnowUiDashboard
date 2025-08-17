const tabs = [
  { id: 1, label: "Favorites", isActive: true },
  { id: 2, label: "Recently", isActive: false },
];

function SidebarTabs() {
  return (
    <div className="flex items-center gap-lg">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          className={`${
            tab.isActive
              ? "text-dark-tertiary dark:text-light-tertiary"
              : "text-dark-muted dark:text-light-muted"
          }`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}

export default SidebarTabs; 