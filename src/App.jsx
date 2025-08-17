import "./App.css";
import AppLayout from "./layout/AppLayout.jsx";
import useInitTheme from "./hooks/useInitTheme.js";

function App() {
  const { ready } = useInitTheme();

  if (!ready) return null;

  return <AppLayout />;
}

export default App; 