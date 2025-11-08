import Link from "next/link";

interface Course { 
    id: number;
    title: string;
    level: string;
}  

export default async function CoursesPage() {
    const response = await fetch('http://localhost:3000/api/courses', {
        cache: 'no-store',
    });
    const courses: Course [] = await response.json();
     
    return (
        <main style={{padding: '1rem'}}>
            <h1>Danh sách khóa học</h1>
            <ul style={{padding: '0.7rem'}}>
                {courses.map(course => (
                    <li key={course.id} style={{marginBottom: '3rem'}}>
                        <h3>Khóa học {course.id}</h3>
                        <h2 className="hover:underline cursor-pointer">{course.title}</h2>
                        <p>Mức độ: {course.level}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}