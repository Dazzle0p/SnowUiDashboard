import Icon from "../sharedComponents/Icon.jsx";

const sidebarSections = [
  {
    title: "Dashboard",
    items: [
      { label: "Overview", icon: "chartpie-slice" },
      { label: "eCommerce", icon: "shopping-bag-open" },
      { label: "Projects", icon: "folder" },
    ],
  },

  {
    title: "Pages",
    items: [
      {
        label: "User Profile",
        icon: "identification-badge",
        children: [
          { label: "Overview" },
          { label: "Projects" },
          { label: "Campaigns" },
          { label: "Documents" },
          { label: "Followers" },
        ],
      },
      { label: "Account", icon: "identification-card" },
      { label: "Corporate", icon: "users-three" },
      { label: "Blog", icon: "notebook" },
      { label: "Social", icon: "chats-teardrop" },
    ],
  },
];

function SidebarNavigation() {
  return (
    <nav className="space-y-spaced">
      {sidebarSections.map((section) => (
        <section key={section.title} className="text-start">
          <h2 className="mb-sm text-dark-tertiary dark:text-light-tertiary">
            {section.title}
          </h2>

          <ul className="">
            {section.items.map((item) => (
              <li key={item.label}>
                <button
                  className={`flex items-center gap-1.5 w-full p-sm ${
                    item.label === "Overview" &&
                    "bg-dark-low dark:bg-light-soft"
                  } hover:bg-dark-faint hover:dark:bg-light-low rounded-medium cursor-pointer duration-400`}
                >
                  <Icon
                    name="chevron-right"
                    className="text-dark-faint dark:text-light-muted"
                  />

                  <div className="flex items-center gap-0.5 text-dark-primary dark:text-light-primary">
                    <Icon name={item.icon} />
                    <p className="">{item.label}</p>
                  </div>
                </button>

                {item.children && (
                  <ul className="w-3/4 my-compact ms-auto ps-xs">
                    {item.children.map((subItem) => (
                      <li
                        key={subItem.label}
                        className="mb-2 hover:bg-dark-faint hover:dark:bg-light-low rounded-medium duration-400"
                      >
                        <button className="p-1.5 text-start cursor-pointer">
                          <p className="">{subItem.label}</p>
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </nav>
  );
}

export default SidebarNavigation; 