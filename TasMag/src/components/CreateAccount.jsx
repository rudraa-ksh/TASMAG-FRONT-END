import "./CreateAccount.css"

export default function CreateAccount() {
    return (
        <div className="signup-outer">
            <div className="signup-inner">
                <div className="signup-card">
                    <header className="card-header">
                        <div>
                            <h1 className="title">Create Account</h1>
                            <p className="subtitle">Get Started with TasMag!</p>
                        </div>

                        <div>
                            <img src="src/assets/Logo.svg" alt="logo" className="top-logo"/>
                        </div>
                    </header>

                    <div className="avatar-area">
                        <div className="avatar-outer">
                            <div className="avatar-inner">
                                <span class="material-symbols-outlined">person_add</span>
                            </div>
                        </div>
                    </div>

                    <form className="form">
                        <label className="label">Name:</label>
                        <input className="input" placeholder="Enter your name" />

                        <label className="label">Email:</label>
                        <input className="input" placeholder="Enter your email" />

                        <label className="checkbox">
                            <input type="checkbox" />
                            <span className="checkbox-text">I agree to <b>Term of Service</b> and <b>Privacy Policy</b></span>
                        </label>

                        <button type="button" className="btn-continue">Continue</button>
                    </form>

                    <div className="divider">
                        <hr/>
                        <span>OR</span>
                        <hr/>
                    </div>

                    <div className="google-signin">
                        <div className="google-icon" aria-hidden> 
                            <img src="https://www.gstatic.com/marketing-cms/assets/images/d5/dc/cfe9ce8b4425b410b49b7f2dd3f3/g.webp=s96-fcrop64=1,00000000ffffffff-rw" width="40px" height="40px"/>
                        </div>
                    </div>

                    <div className="pager">
                        <div className="pager-dot active" />
                        <div className="pager-dot" />
                        <div className="pager-dot" />
                        <div className="pager-dot" />
                    </div>

                    <div className="corner green"></div>
                    <div className="corner yellow"></div>
                    
                </div>
            </div>
        </div>
    );
}