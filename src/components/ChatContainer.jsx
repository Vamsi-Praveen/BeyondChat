import { Typography } from '@mui/material'
import React, { useEffect, useRef, useState } from 'react'
import SearchIcon from '@mui/icons-material/Search';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic';
import axios from 'axios';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Message from './Message';

const ChatContainer = ({ contact }) => {
    const [messages, setMessages] = useState([])
    const containerRef = useRef(null)
    const handleScrollDown = () => {
        containerRef?.current.scrollTo({
            top: containerRef?.current?.scrollHeight,
            behavior: "smooth"
        })
    }
    useEffect(() => {
        const fetchMessages = async () => {
            await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${contact?.id}`).then((data) => {
                setMessages(data?.data?.data)
            })
        }
        fetchMessages()
    }, [contact])

    const [showScrollDown, setShowScrollDown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = containerRef.current;
                if (scrollTop < scrollHeight - clientHeight) {
                    setShowScrollDown(true);
                } else {
                    setShowScrollDown(false);
                }
            }
        };

        const refCurrent = containerRef.current;
        if (refCurrent) {
            refCurrent.addEventListener('scroll', handleScroll);
            return () => refCurrent.removeEventListener('scroll', handleScroll);
        }
    }, [messages]);

    return (
        contact ? <div className='w-[70%] hidden md:flex flex-col  '>
            <div className='flex items-center justify-between py-2.5 px-4 border-b border-slate-100'>
                <div>
                    <Typography variant='subtitle'>{contact?.creator?.name}</Typography>
                    <Typography variant='body2' sx={{ color: 'blue' }}>online</Typography>
                </div>
                <div className='flex gap-2'>
                    <SearchIcon />
                    <MoreVertIcon />
                </div>
            </div>
            <div className='flex-1 bg-bgImg bg-cover bg-center overflow-y-scroll p-4' ref={containerRef}>
                {
                    messages?.map((msg, i) => {
                        return <Message data={msg} createdBy={contact?.created_by} key={i} />
                    })
                }
                {
                    showScrollDown && <div className='flex items-center justify-center'>
                        <div className="p-2 bg-white text-black rounded-full cursor-pointer fixed z-[8] bottom-20 border border-slate-400" onClick={handleScrollDown}>
                            <ArrowDownwardIcon />
                        </div>
                    </div>
                }

            </div>
            <div className='bg-white border-t border-slate-100 h-[50px] flex items-center'>
                <div className='flex  flex-1 items-center gap-4 mx-4'>
                    <AttachFileIcon />
                    <div className='flex flex-1'>
                        <input type="text" placeholder='Write a message...' className='border-none outline-none focus:ring-0 flex-1 bg-transparent' />
                        <div className='space-x-2'>
                            <TagFacesIcon />
                            <MicIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div> :
            <div className='w-[70%] hidden md:flex flex-col'>
                <img src={"/bg.png"} className="h-full w-full object-cover" />
            </div>
    )
}

export default ChatContainer