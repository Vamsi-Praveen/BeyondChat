import React from 'react'

const Message = ({ data, createdBy }) => {
    const isOwn = data?.sender_id == createdBy
    return (
        <div>
            <div
                className={`rounded-md px-4 py-2 w-fit md:max-w-[60%] max-w-[80%] mb-4 ${isOwn ? "bg-green-400 dark:bg-green-600 dark:text-white/90 text-black ml-auto" : "bg-white dark:bg-[#2f2f2f] dark:text-white/90 text-black"}`}
            >
                <p className='break-words'>{data?.message}</p>
            </div>
        </div>
    )
}

export default Message