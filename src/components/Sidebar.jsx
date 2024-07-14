import React, { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChatContact from './ChatContact';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';

const Sidebar = () => {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const fetchContacts = async () => {
            await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1').then((data) => {
                setContacts(data?.data?.data?.data);
            })
        }
        fetchContacts()
    }, [])
    return (
        <div className='md:w-[30%] w-full h-screen bg-white md:border-slate-100 md:border-r flex flex-col'>
            <div className='md:bg-transparent bg-blue-400 shadow-md md:shadow-none py-1 text-white md:text-black'>
                <div className='m-2 flex items-center gap-4'>
                    <MenuIcon />
                    <div className='flex-1 bg-slate-200/70 h-10 rounded-[4px] md:flex justify-center hidden '>
                        <input
                            type='text'
                            className='w-full placeholder:text-black/60 placeholder:font-medium mx-3 bg-transparent outline-none border-none focus:ring-0'
                            placeholder='Search'
                        />
                    </div>
                    <div className='flex items-center justify-between flex-1 md:hidden'>
                        <h1 className='font-medium text-lg'>Telegram</h1>
                        <SearchIcon />
                    </div>
                </div>
            </div>
            <div className='md:mt-1 flex-1 overflow-y-scroll'>
                {
                    contacts.filter((el) => el.creator?.name != null).map((el, i) => {
                        return <div className='flex flex-col' key={i}>
                            <ChatContact data={el?.creator} />
                        </div>
                    })
                }
            </div>
        </div>
    );
};

export default Sidebar;
