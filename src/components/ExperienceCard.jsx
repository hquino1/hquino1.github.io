import testPhoto from '../assets/utaLogo.png';

export function ExperienceCard({company, role, date, image, points}){
    return (
        <div className='flex gap-10 sm:w-full lg:w-8/10 lg:h-auto dark:bg-[#1E293B] border border-gray-500 flex-col md:flex-row bg-[#E5E7EB] rounded-2xl p-7 md:p-10 transition duration-300 ease-in-out hover:scale-101 shadow-lg mx-auto'>
            {/* Company Logo */}
            <div className='h-full w-auto items-center justify-center flex text-center'>
                <div className='h-[100px] w-[100px]'>
                    <img src={image} className='rounded-xl'/> 
                    <h2 className='font-[Montserrat] text-xs italic mt-3'>{date}</h2>
                </div>
            </div>

            {/* Info Section */}
            <div className='mr-auto md:ml-10'>
                {/* Company Name */}
                <h1 class="text-lg md:text-xl mb-1 font-[Montserrat] font-bold">{company}</h1>
                {/* Role Title */}
                <h2 className='font-[Montserrat] font-bold mb-1 italic'>{role}</h2>
                {/* Role Description */}
                <ul className='list-disc ml-5'>
                    {points.map((bulletPoint, index) => (
                        <li className='font-[Outfit] mb-2 text-lg text-gray-600 dark:text-gray-400' key={index}>{bulletPoint}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
}