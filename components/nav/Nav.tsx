'use client'
import Link from "next/link";
import React from "react";

export default function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" style={{fontStyle:'italic'}}>
            PageRouter.comm
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item" style={{fontStyle:'italic'}}>
                <Link className="nav-link active" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item" style={{fontStyle:'italic'}}>
                <Link className="nav-link" href="/products">
                  Products
                </Link>
              </li>
              <li className="nav-item" style={{fontStyle:'italic'}}>
                <Link className="nav-link" href={"/cartview"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item" style={{fontStyle:'italic'}}>
                <Link className="nav-link" href={"/about"}>
                  About Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
