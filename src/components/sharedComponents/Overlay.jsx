import { useSearchPanel } from "../../hooks/useSearchPanel.js";

function Overlay() {
  const { isSearchPanelOpen, closeSearchPanel } = useSearchPanel();

  const handleClick = () => {
    if (isSearchPanelOpen) closeSearchPanel();
  };

  return (
    isSearchPanelOpen && (
      <div
        onClick={handleClick}
        className={`${
          isSearchPanelOpen ? "lg:block" : "lg:hidden"
        } absolute top-0 start-0 w-full h-full bg-dark-secondary z-30 transition-opacity duration-300 opacity-80`}
      ></div>
    )
  );
}
export default Overlay; 