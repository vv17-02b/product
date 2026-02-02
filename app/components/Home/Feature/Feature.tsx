import React from 'react'

import { IconType } from 'react-icons'
import { FaFingerprint } from 'react-icons/fa6'
import { HiOutlineChat } from 'react-icons/hi'
import { IoAppsOutline, IoWifiOutline } from 'react-icons/io5'
import { MdNotifications, MdOutlineTouchApp } from 'react-icons/md'

type Feature = {
    title: string
    description: string
    icon: IconType
}

const featureData: Feature[] = [
    {
        title: 'Touch to buy',
        description:
            'Touch to buy enables users to complete purchases instantly with one tap, improving speed and overall user experience.',
        icon: MdOutlineTouchApp
    },
    {
        title: 'Secure data',
        description:
            'Secure data ensures personal and payment information is protected through encryption, access control, and trusted secure servers.',
        icon: FaFingerprint
    },
    {
        title: 'Instant chat',
        description:
            'Instant chat allows users to communicate with support teams in real time, resolving questions quickly and efficiently.',
        icon: HiOutlineChat
    },
    {
        title: 'Live notification ',
        description:
            'Live notification delivers immediate updates about orders, messages, and system events directly to the user.',
        icon: MdNotifications
    },
    {
        title: 'WiFi support ',
        description:
            'WiFi support provides stable network connectivity, ensuring the application works smoothly without interruptions anywhere.',
        icon: IoWifiOutline
    },
    {
        title: 'App watch  ',
        description:
            'App watch lets users monitor app activity, notifications, and key metrics directly from their smartwatch.',
        icon: IoAppsOutline
    },
]

const Features = () => {
    return (
        <div className="pt-16 pb-26">
            <div className="w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                {featureData.map((feature, index) => {
                    const Icon = feature.icon

                    return (
                        <div key={index} className="text-center mx-auto">
                            {/* Icons  */}
                            <div className="text-center mx-auto">
                                <Icon className="w-12 h-12 mx-auto text-yellow-600" />
                            </div>
                            {/* Title  */}
                            <h1 className="mt-4 text-lg font-semibold text-gray-900 dark:text-white">
                                {feature.title}
                            </h1>
                            {/* Description  */}
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
