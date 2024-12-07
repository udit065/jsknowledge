import React from 'react'

const Sidebar = () => {
    return (
        <div className="fixed top-0 left-0 h-full w-64 bg-orange-300 shadow-md">
            <div className="p-4">
                <h2 className="text-xl font-bold">Sidebar</h2>
                <ul className="mt-4 space-y-2">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar