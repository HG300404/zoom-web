'use client'
import { useSocket } from '@/context/SocketContext'
import React from 'react'

const CallNotification = () => {
const {ongoingCall} = useSocket();

    if (!ongoingCall?.isRinging) return;
  return (
    <div className='absolute bg-slate-500 bg-opacityh-70 w-screen h-screen top-0 bottom-0 flex item-center justify-center'>
        someone is calling
    </div>
  )
}

export default CallNotification