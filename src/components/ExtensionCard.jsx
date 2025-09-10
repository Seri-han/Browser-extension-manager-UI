function ExtensionCard({ ext, toggleStatus, removeExtension }) {
  return (
    <div className="extension-card">
      <div className="extension-info">
        <img src={ext.logo} alt={ext.name} className="extension-logo" />
        <div>
          <h3>{ext.name}</h3>
          <p>{ext.description}</p>
        </div>
      </div>

      <div className="extension-actions">
        <button className="remove-btn" onClick={() => removeExtension(ext.id)}>
          Remove
        </button>

        <label className="switch">
          <input
            type="checkbox"
            checked={ext.isActive}
            onChange={() => toggleStatus(ext.id)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  );
}

export default ExtensionCard;
