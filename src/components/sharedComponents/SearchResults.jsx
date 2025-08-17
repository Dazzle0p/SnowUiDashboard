import userImage from "../../assets/user2-image.png";

function SearchResults({ filteredList }) {
  const capitalizeFirstChar = (val) => {
    if (!val) return "Unnamed";
    return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
  };

  return (
    <section className="w-full h-3/5 border border-light-tertiary overflow-y-scroll">
      <ul className="p-narrow space-y-tight">
        {filteredList.map((item) => (
          <li
            key={item._id}
            className="flex justify-between items-center py-xs px-sm odd:bg-dark-soft dark:odd:bg-light-faint even:bg-dark-tertiary dark:even:bg-light-soft rounded-md"
          >
            <div className="flex items-center gap-sm">
              <div className="w-8 h-8 rounded-circle overflow-hidden">
                <img
                  src={item.tubeImage || userImage}
                  alt="user image"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="">
                {capitalizeFirstChar(item.clientName ?? "")}
              </div>
            </div>

            <div className="">{item.total}</div>

            <div className="">
              {" "}
              {item.date
                ? new Date(item.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })
                : "-"}
            </div>

            <div className="">{capitalizeFirstChar(item.status)}</div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SearchResults; 