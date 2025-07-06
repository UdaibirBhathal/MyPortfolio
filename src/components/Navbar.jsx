// Navbar.jsx
const Navbar = () => {
  return (
    <nav className="bg-white dark:bg-olive text-bark dark:text-ivory px-6 py-4 shadow-md border-b border-paleWood dark:border-darkMoss">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <div className="text-xl font-bold tracking-tight">Udaibir</div>
        <div className="space-x-6">
          <a href="#home" className="hover:text-wood dark:hover:text-moss transition">Home</a>
          <a href="#projects" className="hover:text-wood dark:hover:text-moss transition">Projects</a>
          <a href="#about" className="hover:text-wood dark:hover:text-moss transition">About</a>
          <a href="#contact" className="hover:text-wood dark:hover:text-moss transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


