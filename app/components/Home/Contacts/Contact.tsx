import React from 'react'
import { FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="pt-16 pb-16 flex flex-col items-center">
      {/* Заголовок */}
      <h1 className="text-2xl sm:text-3xl text-center text-gray-800 dark:text-white font-bold">
        Get In Touch
      </h1>

      {/* Неонова лінія */}
      <div className="relative w-32 h-1.5 mt-4 rounded-full bg-amber-400 neon-line overflow-hidden">
        <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/90 to-transparent animate-shimmer" />
      </div>

      {/* Опис */}
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-6 max-w-2xl">
        Let’s connect, collaborate, and start a conversation — reach out anytime to discuss ideas,
        questions, or opportunities.
      </p>
      <p className="text-center text-sm sm:text-base text-gray-700 dark:text-gray-200 mt-2">
        Feel free to get in touch to share thoughts, ask questions, or begin collaboration today.
      </p>

      {/* Форма */}
      <div className="w-[90%] sm:w-[80%] lg:w-[60%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 mt-16">
        {/* Ліва колонка */}
        <div>
          <input
            type="text"
            placeholder="Name"
            className="placeholder:text-gray-500 w-full mb-4 border px-6 py-3.5 rounded-md bg-gray-300 text-black dark:text-white shadow-md outline-none"
          />

          <input
            type="email"
            placeholder="Email"
            className="placeholder:text-gray-500 w-full mb-4 border px-6 py-3.5 rounded-md bg-gray-300 text-black dark:text-white shadow-md outline-none"
          />

          <input
            type="text"
            placeholder="Subject"
            className="placeholder:text-gray-500 w-full mb-4 border px-6 py-3.5 rounded-md bg-gray-300 text-black dark:text-white shadow-md outline-none"
          />
        </div>

        {/* Права колонка */}
        <div>
          <textarea
            placeholder="Message"
            className="
    w-full min-h-45 bg-gray-300
    border px-6 py-3.5 rounded-md
    text-black dark:text-white
    placeholder:text-gray-500
    placeholder:italic
    shadow-md outline-none resize-none
  "
          />

        </div>
      </div>

      {/* Кнопка */}
      <button
        className="button-bg button-bg--reverse mt-8 mb-8 flex items-center gap-2
        px-6 py-4 rounded-md shadow-md bg-gray-500 text-white
        hover:bg-gray-600 hover:scale-105 transition-all duration-200"
      >
        <FaPaperPlane size={18} />
        Send Message
      </button>
    </section>
  )
}

export default Contact
