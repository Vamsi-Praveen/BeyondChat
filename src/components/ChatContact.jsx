import { Avatar, Typography } from '@mui/material'
import React from 'react'

const ChatContact = ({ data }) => {
    const avatarName = data?.name
        ?.split(' ')
        .map((word) => word[0])
        .join('');
        const colors = ['#f44336', '#e91e63', '#9c27b0', '#673ab7', '#3f51b5', '#2196f3', '#03a9f4', '#00bcd4', '#009688', '#4caf50'];
        const bgColor = colors[Math.floor(Math.random() * colors.length)];
    return (
        <div className='w-full hover:bg-blue-400 hover:text-white text-black flex h-[65px] p-2 items-center cursor-pointer transition md:mb-2 mb-4 '>
            <Avatar sx={{ width: 40, height: 40 ,bgcolor:bgColor}}>{avatarName}</Avatar>
            <div className='w-[80%] flex justify-between items-center border-b md:border-0 border-slate-100 hover:border-0 pb-1 '>
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