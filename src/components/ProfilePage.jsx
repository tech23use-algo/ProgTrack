import { useState } from 'react'
import DashboardNav from './DashboardNav'

function ProfilePage({ onNavigate, user, onUpdateUser, theme, onChangeTheme }) {
    const [activeOption, setActiveOption] = useState(null)
    const [draftUser, setDraftUser] = useState(user)

    function openPersonalInformation() {
        setDraftUser({ ...user, password: '' })
        setActiveOption('personal-information')
    }

    function handleSaveChanges(event) {
        event.preventDefault()
        onUpdateUser({
            ...user,
            name: draftUser.name,
            email: draftUser.email,
            password: draftUser.password || user.password,
        })
        setActiveOption(null)
    }

    return (
        <main className={`profile-shell theme-${theme}`}>
            <DashboardNav activeSection="profile" onNavigate={onNavigate} />

            <section className="profile-content" aria-labelledby="profile-title">
                <h1 id="profile-title">Profile</h1>

                <div className="profile-card">
                    <div className="profile-identity">
                        <div className="profile-avatar" role="img" aria-label={`${user.name} profile picture`}>u</div>
                        <div>
                            <h2>{user.name}</h2>
                        </div>
                    </div>

                    <div className="profile-options" aria-label="Profile settings">
                        <button type="button" className="profile-option" onClick={openPersonalInformation}>
                            <span className="option-icon">01</span>
                            <span>
                                <strong>Personal information</strong>
                                <small>Manage your name and account details</small>
                            </span>
                            <span className="option-arrow" aria-hidden="true">&rarr;</span>
                        </button>

                        <button type="button" className="profile-option" onClick={() => setActiveOption('appearance')}>
                            <span className="option-icon">02</span>
                            <span>
                                <strong>Appearance</strong>
                                <small>Choose how ProgTrack looks to you</small>
                            </span>
                            <span className="option-arrow" aria-hidden="true">&rarr;</span>
                        </button>

                    </div>

                </div>
            </section>

            {activeOption === 'personal-information' && (
                <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveOption(null)}>
                    <section
                        className="personal-information-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="personal-information-title"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2 id="personal-information-title">Personal information</h2>
                            <button type="button" className="modal-close" aria-label="Close personal information" onClick={() => setActiveOption(null)}>
                                &times;
                            </button>
                        </div>

                        <form className="personal-information-form" onSubmit={handleSaveChanges}>
                            <label className="personal-information-field">
                                <span>Name</span>
                                <input
                                    type="text"
                                    value={draftUser.name}
                                    onChange={(event) => setDraftUser({ ...draftUser, name: event.target.value })}
                                    required
                                />
                            </label>

                            <label className="personal-information-field">
                                <span>Email address</span>
                                <input
                                    type="email"
                                    value={draftUser.email}
                                    onChange={(event) => setDraftUser({ ...draftUser, email: event.target.value })}
                                    required
                                />
                            </label>

                            <label className="personal-information-field">
                                <span>Password</span>
                                <input
                                    type="password"
                                    value={draftUser.password}
                                    placeholder="Enter a new password"
                                    onChange={(event) => setDraftUser({ ...draftUser, password: event.target.value })}
                                />
                            </label>

                            <div className="modal-actions">
                                <button type="button" className="modal-cancel" onClick={() => setActiveOption(null)}>Cancel</button>
                                <button type="submit" className="modal-submit">Save changes</button>
                            </div>
                        </form>
                    </section>
                </div>
            )}

            {activeOption === 'appearance' && (
                <div className="modal-backdrop" role="presentation" onMouseDown={() => setActiveOption(null)}>
                    <section
                        className="appearance-modal"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="appearance-title"
                        onMouseDown={(event) => event.stopPropagation()}
                    >
                        <div className="modal-header">
                            <h2 id="appearance-title">Appearance</h2>
                            <button type="button" className="modal-close" aria-label="Close appearance settings" onClick={() => setActiveOption(null)}>
                                &times;
                            </button>
                        </div>

                        <div className="theme-options" role="group" aria-label="Choose theme">
                            <button type="button" className={`theme-choice${theme === 'dark' ? ' selected' : ''}`} onClick={() => { onChangeTheme('dark'); setActiveOption(null) }} aria-pressed={theme === 'dark'}>
                                <span className="theme-preview dark-preview" aria-hidden="true" />
                                <span><strong>Dark theme</strong><small>Focused and low-light</small></span>
                            </button>
                            <button type="button" className={`theme-choice${theme === 'light' ? ' selected' : ''}`} onClick={() => { onChangeTheme('light'); setActiveOption(null) }} aria-pressed={theme === 'light'}>
                                <span className="theme-preview light-preview" aria-hidden="true" />
                                <span><strong>Light theme</strong><small>Bright and open</small></span>
                            </button>
                        </div>
                    </section>
                </div>
            )}
        </main>
    )
}

export default ProfilePage