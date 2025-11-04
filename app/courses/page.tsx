import Link from "next/link";

interface Course { 
    id: number;
    title: string;
    level: string;
}  

export default async function CoursesPage() {
    const response = await fetch('http://localhost:3001/api/courses', {
        cache: 'no-store',
    });
    const courses: Course [] = await response.json();
     
    return (
        <main>
            <h1>Danh sách khóa học</h1>
            <ul>
                {courses.map(course => (
                    <li key={course.id}>
                        <p>{course.id}</p>
                        <p>{course.title}</p>
                        <p>{course.level}</p>
                    </li>
                ))}
            </ul>
        </main>
    )
}