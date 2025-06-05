"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Header() {
  const [isCharactersOpen, setIsCharactersOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-content">
        <div className="logo">
          <h1 className="logo-text">Attack on Titan</h1>
          <span className="logo-subtitle">進撃の巨人</span>
        </div>
        <nav className="navigation">
          <a href="#section1" className="nav-link active">
            Characters
          </a>
          {/* <div
            className="nav-dropdown"
          onMouseEnter={() => setIsCharactersOpen(true)}
            onMouseLeave={() => setIsCharactersOpen(false)}
          >
            <button className="nav-link dropdown-trigger">
              Characters
              <ChevronDown className={`chevron ${isCharactersOpen ? "open" : ""}`} />
            </button>
            {isCharactersOpen && (
              <div className="dropdown-menu">
                <a href="#" className="dropdown-item">
                  Eren Jaeger
                </a>
                <a href="#" className="dropdown-item">
                  Mikasa Ackerman
                </a>
                <a href="#" className="dropdown-item">
                  Armin Arlert
                </a>
                <a href="#" className="dropdown-item">
                  Levi Ackerman
                </a>
              </div>
            )}
          </div> */}
          <a href="#section2" className="nav-link">
            Scene
          </a>
          <a href="#section3" className="nav-link">
            Video
          </a>
        </nav>
      </div>
    </header>
  );
}
