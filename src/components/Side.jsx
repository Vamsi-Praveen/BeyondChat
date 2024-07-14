import React from 'react'
import CloseIcon from '@mui/icons-material/Close';

const Side = ({ toggle }) => {
    return (
        <div className='side md:w-[20%] w-[80%] bg-white h-screen absolute left-0 top-0 z-10 border-r transition-transform transform translate-x-0 p-1'>
            <div className='flex justify-end'>
                <div onClick={() => toggle(false)} className='inline'>
                    <CloseIcon sx={{ color: 'black' }} />
                </div>
            </div>
        </div>
    )
}

export default Side