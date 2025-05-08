import { IoPerson } from "react-icons/io5";

const LinkItem = ({name, Icon}) => {
  return(
    <> 
      {/* Desktop navigation */}
      <div class="hover:bg-[#F9FAFB] hover:dark:bg-[#0F172A] text-[#111827] dark:text-[#F1F5F9] h-10 w-full rounded-lg mb-2 flex justify-center items-center text-lg cursor-pointer">
        <Icon className="ml-3 text-[#111827] dark:text-[#F1F5F9]"/>
        <h1 className="ml-3 text-lg mr-auto"> {name}</h1>
      </div>
    </>
  )
}

export default LinkItem;
