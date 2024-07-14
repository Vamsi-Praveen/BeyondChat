import { Avatar, Typography } from '@mui/material'
import React, { useMemo } from 'react'

const ChatContact = ({ data }) => {
    const avatarName = useMemo(() => data?.name?.split(' ').map((word) => word[0]).join(''), [data?.name]);
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'];
        const bgColor = useMemo(() => colors[Math.floor(Math.random() * colors.length)], [data]);
    return (
        <div className='w-full md:hover:bg-blue-400 md:hover:text-white text-black dark:text-white flex h-[65px] p-2 items-center cursor-pointer transition md:mb-2 mb-4 border-b md:border-0 border-slate-100 dark:border-slate-600 hover:border-0 pb-3'>
            <Avatar sx={{ width: 40, height: 40 ,bgcolor:bgColor}}>{avatarName}</Avatar>
            <div className='w-[80%] flex justify-between items-center  '>
                <div>
                    <Typography variant='subtitle1' sx={{ ml: 2 }}>{data?.name}</Typography>
                    <Typography variant='body2' sx={{ ml: 2 }}>Beyond Chat....</Typography>
                </div>
                <div>
                    <Typography variant="body2">11:28 PM</Typography>
                </div>
            </div>
        </div>
    )
}

export default ChatContact