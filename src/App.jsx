import { useState } from "react";
import data from "./data/data.json";
import Header from "./components/Header";
import FilterButtons from "./components/FilterButtons";
import ExtensionCard from "./components/ExtensionCard";
import Footer from "./components/Footer";

function App() {
  const [extensions, setExtensions] = useState(data);
  const [filter, setFilter] = useState('all');
  const [darkMode, setDarkMode] = useState(false);

  const filteredExtensions = extensions.filter((ext) => {
    if (filter === 'all') return true;
    return ext.status === filter;
  });

  const toggleStatus = (id) => {
    setExtensions((prev) =>
      prev.map((ext) =>
      ext.id === id
    ? {...ext, status: ext.status === 'active' ? 'inactive' : 'active'
    } 
    : ext
  )
  );
  }

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode}/>
      <main>
      <h1>Extensions List</h1>
      <FilterButtons setFilter={setFilter}/>
      <section className="layout">
        {filteredExtensions.map((ext) => {
          <ExtensionCard key={ext.id} ext={ext} toggleStatus={toggleStatus}/>

        })}
      </section>
      </main>
      <Footer />
    </div>
  );
}

export default App
