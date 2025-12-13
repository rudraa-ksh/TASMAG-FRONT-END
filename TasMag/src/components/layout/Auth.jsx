import "./Auth.scss"
import Rounded from "../../components/common/rounded/rounded.jsx"

export default function Auth({children, title, subtitle, icon}) {
    return (
        <div className="card-outer">
            <div className="card-inner">
                <div className="card">
                    <header className="card-header">
                        <div>
                            <h1 className="title">{title}</h1>
                            <p className="subtitle">{subtitle}</p>
                        </div>

                        <div>
                            <img src="src/assets/images/Logo.svg" alt="logo" className="top-logo"/>
                        </div>
                    </header>

                    <div className="avatar-area">
                        <Rounded name={icon}/>
                    </div>

                    {children}

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