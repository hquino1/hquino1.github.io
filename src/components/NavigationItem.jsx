import { IoPerson } from "react-icons/io5";

const NavigationItem = ({name, Icon}) => {
  return(
    <> 
      {/* Desktop navigation */}
      <div class="bg-[#F9FAFB] dark:bg-[#0F172A] text-[#111827] dark:text-[#F1F5F9] h-10 w-full rounded-lg mb-5 flex justify-center items-center text-lg cursor-pointer font-semibold">
        <Icon className="ml-3 text-[#111827] dark:text-[#F1F5F9]"/>
        <h1 className="ml-3 text-lg mr-auto"> {name}</h1>
      </div>
    </>
  )
}

export default NavigationItem;
