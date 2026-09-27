function DashboardNav({ activeSection, onNavigate }) {
  return (
    <nav className="topbar" aria-label="Main navigation">
      <div className="brand" aria-label="ProgTrack brand">
        <span className="brand-mark">PT</span>
        <span>ProgTrack</span>
      </div>

      <div className="nav-links">
        <button type="button" className={activeSection === 'dashboard' ? 'active' : ''} onClick={() => onNavigate('dashboard')}>
          Dashboard
        </button>
        <button type="button" className={activeSection === 'profile' ? 'active' : ''} onClick={() => onNavigate('profile')}>
          Profile
        </button>
      </div>
    </nav>
  )
}

export default DashboardNav
