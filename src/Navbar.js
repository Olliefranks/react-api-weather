export default function Navbar() {
  return (
    <nav className="nav">
      <a href="/" className="site-title">
        Weather App
      </a>
      <ul>
        <li className="active">
          <a href="/about">About</a>
        </li>
      </ul>
    </nav>
  );
}
