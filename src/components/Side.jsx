import React, { useState } from 'react'
import CloseIcon from '@mui/icons-material/Close';
import { Avatar, Typography } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import SettingsAccessibilityIcon from '@mui/icons-material/SettingsAccessibility';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';

const Side = ({ toggle }) => {
    const [darkmode, setDarkMode] = useState(false)

    const menuItems = [
        {
            name: 'New Group',
            icon: <GroupIcon />
        },
        {
            name: 'Contacts',
            icon: <PersonIcon />
        },
        {
            name: 'Calls',
            icon: <CallIcon />
        },
        {
            name: 'People Nearby',
            icon: <SettingsAccessibilityIcon />
        },
        {
            name: 'Settings',
            icon: <SettingsSuggestIcon />
        },
    ]

    return (
        <div className='side h-screen bg-black/40 w-full absolute left-0 top-0 z-10 border-r transition-transform transform translate-x-0 flex'>
            <div className='bg-white h-full md:w-[25%] w-[80%] '>
                <div className='bg-blue-400 shadow-md'>
                    <div className='px-2 py-5'>
                        <div className='flex items-center justify-between'>
                            <Avatar />
                            {
                                darkmode ? <div onClick={() => { setDarkMode(!darkmode) }} className='md:text-white'>
                                    <WbSunnyIcon />
                                </div> : <div onClick={() => { setDarkMode(!darkmode) }}>
                                    <DarkModeIcon />
                                </div>
                            }
                        </div>
                        <div className='mt-2 text-white'>
                            <Typography variant="subtitle">Beyond Chat</Typography>
                            <Typography variant="body2">9988445554</Typography>
                        </div>
                    </div>
                </div>
                <div className="mt-4">
                        <div className='flex flex-col px-2 text-black'>
                            {
                                menuItems.map((item,i)=>{
                                    return <div key={i} className="flex items-center gap-3 hover:bg-slate-100 px-2 py-3 cursor-pointer rounded-sm">
                                        {item.icon}
                                        <p>{item.name}</p>
                                    </div>

                                })
                            }
                        </div>
                </div>
            </div>
            <div onClick={() => toggle(false)} className='flex-1' ></div>
        </div>
    )
}

export default Side