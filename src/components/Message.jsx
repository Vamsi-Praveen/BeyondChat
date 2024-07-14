import React from 'react'

const Message = ({ data, createdBy }) => {
    const isOwn = data?.sender_id == createdBy
    return (
        <div>
            <div
                className={`rounded-md px-4 py-2 w-fit max-w-[60%] mb-4 ${isOwn ? "bg-green-400 text-black ml-auto" : "bg-white text-black"}`}
            >
                <p>{data?.message}</p>
            </div>
        </div>
    )
}

export default Message