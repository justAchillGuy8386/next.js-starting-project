import { NextResponse } from "next/server";


const courses = [
    {
        id: 1,
        title: "Khóa học Next.js 14 toàn diện",
        level: "Nâng cao"
    },
    {
        id: 2,
        title: "Khóa học React căn bản",
        level : "Cơ bản"
    },
    {
        id: 3,
        title: "Khóa học Tailwind CSS",
        level: "Trung bình"
    }
]
export async function GET(request: Request) {
    return NextResponse.json(courses);
}