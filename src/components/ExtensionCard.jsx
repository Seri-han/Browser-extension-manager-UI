export default function ExtensionCard({ ext, toggleStatus }) {
    return (
        <div className='extension__card'>
            <img src={ext.icon} alt={ext.name }/>
            <h2>{ext.name</h2>
            <button onClick={() => toggleStatus(ext.id)}>
                {ext.status === 'active' ? 'Deactivate' : 'Activate'}
            </button>
        </div>
    );
}