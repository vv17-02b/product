import Image from "next/image"
import React from "react"
import { FaCheck } from "react-icons/fa"

type Props = {
  imageOrder?: string
  textOrder?: string
  title?: string
  linkText?: string
}

const About = ({
  imageOrder = "",
  textOrder = "",
  title = "",
  linkText = "",
}: Props) => {
  return (
    <section className="py-20">
      {/* container дає padding зліва/справа */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* TEXT */}
          <div className={textOrder}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
              {title}
            </h2>

            <div className="mt-8 space-y-6">
              {[
                "High-Resolution Audio compatible",
                "High quality wireless audio with BLUETOOTH",
                "Smart listening experience by Adaptive Sound Control",
                "Ergonomic, enfolding design earpads",
              ].map((text) => (
                <div key={text} className="flex items-center gap-4">
                  <span className="w-6 h-6 flex items-center justify-center rounded-full bg-amber-600 text-white">
                    <FaCheck size={12} />
                  </span>
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                    {text}
                  </p>
                </div>
              ))}

              <p className="mt-6 font-semibold text-yellow-600 cursor-pointer hover:underline w-fit">
                {linkText}
              </p>
            </div>
          </div>

          {/* IMAGE */}
          <div className={imageOrder}>
            <Image
              src="/images/hero1.png"
              alt="About product"
              width={380}
              height={380}
              className="mx-auto "
            />
          </div>

        </div>
      </div>
    </section>
  )
}

export default About
