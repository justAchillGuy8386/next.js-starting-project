import Link from "next/link";

export default function NotFound() {
    return (
        <main className="text-center mt-20">
            <h2 className="text-3xl font-bold">404 - Không tìm thấy trang</h2>
            <p>Rất tiếc, chúng tôi không tìm thấy trang mà bạn yêu cầu.</p>
            <Link href="/" className="text-blue-500 hover:underline">
                Quay lại trang chủ
            </Link>
        </main>
    )
}