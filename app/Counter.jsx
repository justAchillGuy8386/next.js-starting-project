"use client";

import { useState } from "react";

export default function Counter() {
    const [count, setCount] = useState(0);
    function handleClick() {
        setCount(count + 1);
    }
    return (
        <div className="p-4 bg-white shadow rounded-lg">
            <p className="text-lg font-medium">Bạn đã click {count} lần</p>
            <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700" onClick = {handleClick}>
                Click tôi đi!
            </button>
            <button className="bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700" onClick={handleClick}>
                Click tôi đi 2
            </button>
        </div>
    );
}