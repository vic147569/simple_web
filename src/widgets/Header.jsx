import Logo from '../assets/react.svg'
function Header() {
  return (
    <header className=" flex justify-between items-center h-20">
      <img src={Logo} alt="" className=" w-8 h-8" />
      <nav className=" flex items-center">
        <a href="#">Login</a>
        <a
          href="#"
          className=" ml-8 bg-gray-900 px-4 py2 rounded text-blue-50 flex items-center"
        >
          Sign Up
        </a>
      </nav>
    </header>
  )
}

export default Header
