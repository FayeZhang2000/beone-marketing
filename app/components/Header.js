import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav>
        <Link href="/" legacyBehavior>
          <a>Home</a>
        </Link>{" "}
        |
        <Link href="/about" legacyBehavior>
          <a>About</a>
        </Link>{" "}
        |
        <Link href="/home" legacyBehavior>
          <a>Home Page</a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
