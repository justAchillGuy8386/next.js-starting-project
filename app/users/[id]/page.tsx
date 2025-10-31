import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
    website: string;
}

interface UserDetailPageProps {
    params: {
        id: string
    }
}

export default async function UserDetailPage({params}: UserDetailPageProps) {
    const {id} = params;
    const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`);
    const user: User = await response.json();

    if(!user.name) {
        notFound();
    }

    return(
        <main style={{padding: '2rem', maxWidth: '600px', margin: 'auto'}}>
            <Image
                src={`https://i.pravatar.cc/150?u=${user.id}`}
                alt={user.name}
                width={150}
                height={150}
                className="rounded-full mx-auto mb-4"
            />
            <h1 className="text-3xl font-bold">{user.name}</h1>
            <p className="text-gray-700">Phone: {user.phone}</p>
            <p className="text-gray-700">Email: {user.email}</p>
            <p className="text-gray-700">Website: {user.website}</p>
            <div className="text-center mt-6">
                <Link href="/users" className="text-blue-500 hover:underline mt-4 inline-block">
                    &larr; Quay lại danh sách người dùng
                </Link>
            </div>
        </main>
    )
}