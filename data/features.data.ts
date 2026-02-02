import { Feature } from '@/types/feature'

import { FaFingerprint } from 'react-icons/fa6'
import { HiOutlineChat } from 'react-icons/hi'
import { IoAppsOutline, IoWifiOutline } from 'react-icons/io5'
import { MdNotifications, MdOutlineTouchApp } from 'react-icons/md'

export const featureData: Feature[] = [
  {
    title: 'Touch to buy',
    description:
      'Touch to buy enables users to complete purchases instantly with one tap, improving speed and overall user experience.',
    icon: MdOutlineTouchApp,
  },
  {
    title: 'Secure data',
    description:
      'Secure data ensures personal and payment information is protected through encryption.',
    icon: FaFingerprint,
  },
  {
    title: 'Instant chat',
    description:
      'Instant chat allows users to communicate with support teams in real time.',
    icon: HiOutlineChat,
  },
  {
    title: 'Live notification',
    description:
      'Live notification delivers immediate updates about orders and messages.',
    icon: MdNotifications,
  },
  {
    title: 'WiFi support',
    description:
      'WiFi support provides stable network connectivity.',
    icon: IoWifiOutline,
  },
  {
    title: 'App watch',
    description:
      'App watch lets users monitor app activity from a smartwatch.',
    icon: IoAppsOutline,
  },
]
