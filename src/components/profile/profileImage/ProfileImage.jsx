import React from 'react'

export default function ProfileImage({ user, size }) {
    return (
        <div className={`rounded-full bg-red-600 w-[100%] h-[100%] overflow-hidden`}>
            {user.profileImage ? <img src={user.profileImage.url} alt="profile" /> :
                <p className='text-9xl text-white'>{user.firstName[0]}</p>
            }
        </div>
    )
}
