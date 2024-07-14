import React, { useCallback, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ChatContact from './ChatContact';
import SearchIcon from '@mui/icons-material/Search';
import axios from 'axios';
import Side from './Side';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import CreateIcon from '@mui/icons-material/Create';


const Sidebar = ({ selectedContact, contact, setShow }) => {
    const [contacts, setContacts] = useState([])
    useEffect(() => {
        const fetchContacts = async () => {
            await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1').then((data) => {
                setContacts(data?.data?.data?.data);
            })
        }
        fetchContacts()
    }, [])
    const [showScrollDown, setShowScrollDown] = useState(false);
    const handleContactClick = useCallback((contact) => {
        selectedContact(contact);
        setShow(true)
    }, [selectedContact]);

    const [isSideOpen, setIsSideOpen] = useState(false)
    const [value, setValue] = useState(0)
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    function CustomTabPanel(props) {
        const { children, value, index, ...other } = props;

        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                {...other}
            >
                {value === index && <div sx={{ p: 3 }}>{children}</div>}
            </div>
        );
    }
    return (
        <div className='md:w-[30%] w-full h-screen bg-white dark:bg-[#2f2f2f] md:border-slate-200 md:border-r flex flex-col dark:border-white/70'>
            <div className='md:bg-transparent bg-blue-400 dark:bg-slate-700/80 shadow-md md:shadow-none py-1 text-white md:dark:text-white'>
                <div className='flex flex-col'>
                    <div className='m-2 flex items-center gap-4 '>
                        <div onClick={() => setIsSideOpen(!isSideOpen)} className='cursor-pointer text-black dark:text-white'>
                            <MenuIcon />
                        </div>
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
                    {
                        isSideOpen && <Side toggle={setIsSideOpen} />
                    }
                    <div className='md:hidden text-white'>
                        <Tabs value={value} onChange={handleChange} sx={{ width: '100%' }}>
                            <Tab label="All" sx={{ color: "white", flexGrow: 1 }} />
                            <Tab label="Regulars" sx={{ color: "white", flexGrow: 1 }} />
                            <Tab label="Unread" sx={{ color: "white", flexGrow: 1 }} />
                        </Tabs>
                    </div>
                </div>
            </div>
            <div className='md:mt-1 flex-1 overflow-y-scroll'>
                <CustomTabPanel value={value} index={0}>
                    {
                        contacts.filter((el) => el.creator?.name != null).map((el, i) => {
                            return <div className='flex flex-col' key={i} onClick={() => handleContactClick(el)}>
                                <ChatContact data={el.creator} />
                            </div>
                        })
                    }
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    <div className='h-[50vh] w-full flex items-center justify-center dark:text-white'>
                        <h1>No Regular Messages</h1>
                    </div>
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    <div className='h-[50vh] w-full flex items-center justify-center dark:text-white'>
                        <h1>No Unread Messages</h1>
                    </div>
                </CustomTabPanel>
            </div>
            <div className={`md:hidden h-12 w-12 bg-blue-400 text-black rounded-full flex items-center justify-center fixed right-8 bottom-8 z-[8] dark:text-white`}>
                <CreateIcon />
            </div>
        </div>
    );
};

export default Sidebar;
