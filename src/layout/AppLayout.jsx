import { SearchPanelProvider } from "../contexts/SearchPanelProvider.jsx";
import { SidebarProvider } from "../contexts/SidebarProvider.jsx";
import { UtilitiesPanelProvider } from "../contexts/UtilitiesPanelProvider.jsx";
import LayoutGrid from "./LayoutGrid.jsx";

function AppLayout() {
  return (
    <SearchPanelProvider>
      <SidebarProvider>
        <UtilitiesPanelProvider>
          <LayoutGrid />
        </UtilitiesPanelProvider>
      </SidebarProvider>
    </SearchPanelProvider>
  );
}

export default AppLayout; 