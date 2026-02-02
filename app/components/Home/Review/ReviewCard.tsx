import Image from 'next/image'
import React from 'react'
import { BsQuote } from 'react-icons/bs'

type Props = {
    image: string
    name: string
    role: string
}

const ReviewCard = ({ image, name, role }: Props) => {
    return (
        /* Додаємо padding для всієї картки (p-4 для мобільних, p-8 для десктопа) */
        <div className='p-4 md:p-8 flex flex-col items-center h-full'>
            
            <div className='flex flex-col items-center'>
                <Image 
                    src={image} 
                    alt={name} 
                    width={100} 
                    height={100}
                    className='object-cover rounded-full border-2 border-yellow-500 shadow-md' 
                />
                {/* mt-4 на мобільних, mt-6 на великих екранах */}
                <h2 className='text-lg md:text-xl font-bold text-center mt-4 md:mt-6 text-gray-800 dark:text-gray-200'>
                    {name}
                </h2>
                <p className='text-sm text-center text-gray-500 mt-1'>{role}</p>
            </div>
          
            {/* Адаптивний відступ зверху: my-6 (моб) -> my-10 (десктоп) */}
            <BsQuote className='w-10 h-10 md:w-14 md:h-14 text-yellow-500 my-6 md:my-10 opacity-50' />
            
            <div className="text-center text-sm md:text-base text-gray-950 dark:text-gray-200 
                max-h-48 overflow-y-auto pr-2 custom-scrollbar leading-relaxed">
                Founder Codex shapes the founders' thinking, strategies for value growth
                solutions, innovation, leadership...
                {/* Твій довгий текст */}
            </div>
        </div>
    )
}

export default ReviewCard
