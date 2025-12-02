import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const path = request.nextUrl.pathname; // lấy đường dẫn hiện tại

    if (path.startsWith('/dashboard')) { // kiếm tra nếu đang cố truy cập dashboard
        const token = request.cookies.get('token'); // kiểm tra xem có cookie tên là "token" không
        if (!token) {
            return NextResponse.redirect(new URL ('/', request.url)) //nếu k có token -> về trang chủ
        }
    }

    return NextResponse.next(); //nếu hợp lệ, cho đi tiếp ( đăng nhập rồi)
}

export const config = {
    matcher: [
        '/dashboard/:path*', //áp dung cho mọi thứ trong dashboard
        '/admin/:path*' // áp dụng cho mọi thứ trong admin
    ],
}