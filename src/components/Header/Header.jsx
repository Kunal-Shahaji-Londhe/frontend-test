import logo from '../../assets/logo.png'
const Header = () => {
  return (
    <header className="p-6 bg-white shadow">
    <div className="container mx-auto flex justify-between items-center">
      <div className="text-xl font-bold h-[100px] w-[172px]">  
        <img src={logo}/>
      </div>
      <nav>
        <a href="#contact" className="border-2 border-black rounded-full px-12 py-2.5 text-black font-bold h-[44px] w-[216px]">Contact us</a>
      </nav>
    </div>
  </header>
  
  );
}

export default Header;
