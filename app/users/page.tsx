import Link from "next/link";

interface User {
    id: number;
    name: string;
    email: string;
    phone: string;
}

export default async function UsersPage() {
    console.log('Đang fetch dữ liệu trên server...');
    const response = await fetch(`https://jsonplaceholder.typicode.com/users`, {
        cache: 'no-store'
    });
    const users: User[] = await response.json();

    return(
        <main style={{padding: '2rem'}}>
            <h1 className="text-3xl font-bold mb-4">Danh sách người dùng (Server Components)</h1>
            <p className="text-2xl font-semibold">Dữ liệu này được render ở Server</p>
            <ul style={{listStyle: 'none', padding: 0}}>
                {users.map(user => (
                    <li key = {user.id} className="bg-white shadow p-4 m-2 rounded-lg">
                        <Link href={`/users/${user.id}`}>
                            <h3 className="text-xl font-semibold text-blue-600 hover:underline">{user.name}</h3>
                        </Link>
                        <p className="text-gray-700">{user.phone}</p>
                        <p className="text-gray-700">{user.email}</p>
                    </li>
                ))}
            </ul>
        </main>
    );
}