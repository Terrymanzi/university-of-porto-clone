import { headerLogo } from '../assets/img';
import { search_icon } from '../assets/img';
import { navLinks } from '../pages';


const Nav = () => {
  return (
    <hearder className="
    fixed 
    padding-x 
    py-2 
    z-10 
    w-full
    bg-zinc-200
    ">
    
    <nav className="
    flex 
    justify-between 
    items-center
    max-container">
        
        <a href="./">
          <img src={headerLogo} alt='Logo' width={350} height={50}/>
        </a>
        
        <ul className="
        flex-1
        flex
        justify-around
        items-center
        gap-1
        max-lg:hidden">

          {/*for dynamic nav links generated from pages folder */}
          {navLinks.map((item) => (
            <li key={item.label} >
              
              <a 
                href={item.href}
                className= "font-montserrat font-bold leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </a>

            </li>
          ))}

        </ul>

        <div className="flex items-stretch">
          <p className="text-black text-lg underline">Search</p>
          <img src={search_icon}
          alt="Seach"
          width={55}
          height={55}
          />
        </div>
      </nav>

    </hearder>
  )
}

export default Nav