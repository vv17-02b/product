import React from 'react'
import { featureData } from '@/data/features.data'

const Features = () => {
  return (
    <div className="pt-16 pb-26">
      <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {featureData.map((feature, index) => {
          const Icon = feature.icon

          return (
            <div key={index} className="text-center mx-auto">
              <Icon className="w-12 h-12 mx-auto text-yellow-600" />

              <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                {feature.title}
              </h1>

              <p className="text-sm text-gray-600 dark:text-gray-300 mt-4">
                {feature.description}
              </p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Features
