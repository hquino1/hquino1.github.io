import { IoPerson } from "react-icons/io5";
import { NavLink } from 'react-router-dom';

const NavigationItem = ({name, Icon, to}) => {
  return(
    <NavLink
      to={to}
      className={({isActive}) => `text-[#111827] dark:text-[#F1F5F9] h-10 w-full rounded-lg mb-5 flex justify-center items-center text-lg cursor-pointer hover:bg-[#F9FAFB] hover:dark:bg-[#0F172A] ${isActive ? 'border border-gray-500 bg-[#F9FAFB] dark:bg-[#0F172A]' : 'border border-gray-700'}`}
    > 
      {/* Desktop navigation */}
        <Icon className="ml-3 text-[#111827] dark:text-[#F1F5F9]"/>
        <h1 className="ml-3 text-lg mr-auto"> {name}</h1>
    </NavLink>
  )
}

export default NavigationItem;
