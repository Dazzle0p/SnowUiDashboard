import Icon from "../sharedComponents/Icon.jsx";

const searchInitialValue = "";

function SearchInput({ searchValue, setSearchValue, onSearch }) {
  const handleSearchChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") onSearch(searchValue);
  };

  const handleClear = () => setSearchValue(searchInitialValue);

  return (
    <div>
      <label
        htmlFor="search-input"
        className="flex justify-between items-center w-full py-xs ps-sm text-dark-muted dark:text-light-tertiary bg-dark-faint dark:bg-light-soft rounded-regular overflow-hidden"
      >
        <div className="flex items-center gap-sm w-full border-e">
          <Icon name="magnifying-glass" className="me-1" />

          <input
            type="text"
            name="search-input"
            id="search-input"
            aria-label="Search input"
            placeholder="Search by username something like omaima, maha or nada. . ."
            className="w-full font-light text-dark-secondary dark:text-light-primary placeholder-dark-tertiary dark:placeholder-light-tertiary outline-none"
            value={searchValue}
            onChange={handleSearchChange}
            onKeyDown={handleKeyDown}
          />
        </div>

        <button
          onClick={handleClear}
          className="px-sm text-dark-muted hover:text-dark-secondary dark:text-light-tertiary hover:dark:text-light-muted duration-300"
        >
          <Icon name="x" size="18" className="" />
        </button>
      </label>
    </div>
  );
}

export default SearchInput; 