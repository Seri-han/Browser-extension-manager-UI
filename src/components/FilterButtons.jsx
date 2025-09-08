export default function FilterButtons({ setFilter }) {
    return (
        <div className="filters">
            <button onClick={() => setFilter('all')}>All</button>
            <button onClick={() => setFilter('active')}>Active</button>
            <button onClick={() => setFilter('inactive')}>Inactive</button>
        </div>
    );
}