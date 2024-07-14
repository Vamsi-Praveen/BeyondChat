import { Typography } from '@mui/material'
import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic';

const ChatContainer = ({ contact }) => {
    return (
        <div className='w-[70%] hidden md:flex flex-col  '>
            <div className='flex items-center justify-between py-2.5 px-4 border-b border-slate-100'>
                <div>
                    <Typography variant='subtitle'>{contact?.name}</Typography>
                    <Typography variant='body2' sx={{ color: 'blue' }}>online</Typography>
                </div>
                <div className='flex gap-2'>
                    <SearchIcon />
                    <MoreVertIcon />
                </div>
            </div>
            <div className='flex-1'>

            </div>
            <div className='bg-white border-t border-slate-100 h-[50px] flex items-center'>
                <div className='flex  flex-1 items-center gap-4 mx-4'>
                    <AttachFileIcon />
                    <div className='flex flex-1'>
                        <input type="text" placeholder='Write a message...' className='border-none outline-none focus:ring-0 flex-1' />
                        <div className='space-x-2'>
                            <TagFacesIcon />
                            <MicIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChatContainer