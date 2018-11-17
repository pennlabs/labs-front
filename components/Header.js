import Link from 'next/link';
import { Spring, Keyframes, config } from 'react-spring'

const Header = () => (
  <div>
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Penn Labs</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <link rel="stylesheet" href="styles/style.css" />
      <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
    </head>

    <nav className="navbar is-info" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="/">
        <img
          src="/static/img/beaker-only.png"
          alt="Penn Labs"
          width="auto"
          height="100" />
        </a>

        <div className="button navbar-burger is-info" data-target="navMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <div className="navbar-menu" id="navMenu">
        <div className="navbar-start"></div>
        <div className="navbar-end">
          <a className="navbar-item" href="/team">
            Team
          </a>
          <a className="navbar-item" href="/products">
            Products
          </a>
          <a className="navbar-item" href="/guides">
            Guides
          </a>
          <a className="navbar-item" href="/documentation">
            Documentation
          </a>
          <a className="navbar-item" href="https://medium.com/@pennappslabs">
            Blog
          </a>
        </div>
      </div>
    </nav>
  </div>
);

export default Header;