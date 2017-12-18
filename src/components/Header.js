import React from "react";
import { Logo } from "./Logo";

export class Header extends React.Component {
    render() {
        return(
            <nav className="navbar nav-default">
            
                <div className="container">
                    
                    <div className="navbar-header">
                        <ul className="nav navbar-nav">
                            <li><a href="/">Home</a></li>
                            <li><a href="#">About</a></li>
                        </ul>
                    </div>
                
                </div>
            
            </nav>
        );
    }
}