const Navbar = ({ cartCount }) => {
  return (
    <nav>
      <h2>🌿 Paradise Nursery</h2>
      <div>🛒 Cart ({cartCount})</div>
    </nav>
  );
};

export default Navbar;
