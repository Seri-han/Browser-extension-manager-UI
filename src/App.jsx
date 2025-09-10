import { useState, useMemo, useEffect } from "react";
import rawData from "./data/data.json";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import ExtensionCard from "./components/ExtensionCard";
import Footer from "./components/Footer";


const initialData = rawData.map((ext, index) => ({
  id: index + 1,
  ...ext,
}));

function App() {
  const [extensions, setExtensions] = useState(initialData);
  const [filter, setFilter] = useState("all");
  const [darkMode, setDarkMode] = useState(false);

  const filteredExtensions = useMemo(() => {
    if (filter === "all") return extensions;
    return extensions.filter((e) =>
      filter === "active" ? e.isActive : !e.isActive
    );
  }, [extensions, filter]);

  const toggleStatus = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
        ext.id === id ? { ...ext, isActive: !ext.isActive } : ext
      )
    );
  };

  const restoreAll = () => {
    setExtensions(initialData);
  };

  const removeExtension = (id) => {
    setExtensions((prev) => prev.filter((ext) => ext.id !== id));
  };

    useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);


  return (
    <div className={darkMode ? "dark" : "light"}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <div className="extensions-list">
        <h1>Extensions List</h1>
        <FilterButtons
          setFilter={setFilter}
          filter={filter}
          onRestore={restoreAll}
        />
        </div>
        <section className="layout">
          {filteredExtensions.map((ext) => (
            <ExtensionCard
              key={ext.id}
              ext={ext}
              toggleStatus={toggleStatus}
              removeExtension={removeExtension}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;
