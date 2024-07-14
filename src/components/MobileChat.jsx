import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Typography } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import TagFacesIcon from '@mui/icons-material/TagFaces';
import MicIcon from '@mui/icons-material/Mic'
import Message from './Message';
import axios from 'axios';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const MobileChat = ({ setShow, show, contact }) => {
    const handleShow = () => setShow(false)
    const [messages, setMessages] = useState([])
    const [showScrollDown, setShowScrollDown] = useState(false);
    const containerRef = useRef(null)
    useEffect(() => {
        const fetchMessages = async () => {
            await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${contact?.id}`).then((data) => {
                setMessages(data?.data?.data)
            })
        }
        fetchMessages()
    }, [contact])
    const handleScrollDown = () => {
        containerRef?.current.scrollTo({
            top: containerRef?.current?.scrollHeight,
            behavior: "smooth"
        })
    }

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
        <div className={`absolute z-20 inset-0 h-[100dvh] w-full md:hidden bg-white ${!show && 'hidden'}`}>
            <div className='px-2 py-3 flex gap-4 border-b border-slate-200 items-center'>
                <div onClick={handleShow}>
                    <ArrowBackIcon />
                </div>
                <div className='flex-1 flex items-center justify-between'>
                    <div>
                        <Typography variant='subtitle'>{contact?.creator?.name}</Typography>
                        <Typography variant='body2' sx={{ color: 'blue' }}>online</Typography>
                    </div>
                    <MoreVertIcon />
                </div>
            </div>
            <div className='h-[calc(100%-120px)] bg-bgImg bg-cover bg-center overflow-y-scroll p-4' ref={containerRef}>
                {
                    messages?.map((msg, i) => {
                        return <Message data={msg} createdBy={contact?.created_by} key={i} />
                    })
                }
                  {
                    showScrollDown && <div className='flex items-center justify-center'>
                        <div className="p-2 bg-white text-black rounded-full cursor-pointer fixed z-10 bottom-20 border border-slate-400" onClick={handleScrollDown}>
                            <ArrowDownwardIcon />
                        </div>
                    </div>
                }
            </div>
            <div className='bg-white border-t border-slate-100 h-[50px] flex items-center'>
                <div className='flex  flex-1 items-center gap-4 mx-2'>
                    <AttachFileIcon />
                    <div className='flex flex-1'>
                        <input type="text" placeholder='Write a message...' className='border-none outline-none focus:ring-0 flex-1 bg-transparent' />
                        <div className='flex gap-2'>
                            <TagFacesIcon />
                            <MicIcon />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MobileChat