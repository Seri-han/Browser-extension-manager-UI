export default function FilterButtons({ setFilter, onRestore }) {
  return (
    <div className="filters">
      <button onClick={() => setFilter("all")}>All</button>
      <button onClick={() => setFilter("active")}>Active</button>
      <button onClick={() => setFilter("inactive")}>Inactive</button>
      <button onClick={onRestore}>Restore</button>
    </div>
  );
}
