"use client";

import useSWR from "swr";
import axios from "axios";
import Link from "next/link";
import { useGetVanPhong } from "../_hook/useGetVanPhong";

export default function OfficeList() {
    const{ posts, isLoading, error} = useGetVanPhong();

    if (error) return <div className="text-red-500">Tải dữ liệu thất bại...</div>

    if (isLoading) return <div className="text-blue-500">Đang tải dữ liệu...</div>

    return(
        <div className="max-w-2xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Danh sách văn phòng(Lấy bằng SWR)</h1>
            <Link href="/van-phong/create">
                + Tạo văn phòng mới
            </Link>

            <ul className="space-y-4">
                {posts?.map(post => (
                    <li key={post.id} className="p-4 border rounded-lg shadow-sm bg-white">
                        <h3 className="text-xl font-semibold">{post.title}</h3>
                        <p className="text-gray-600">{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}