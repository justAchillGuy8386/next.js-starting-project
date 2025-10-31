export default function Loading() {
    return(
        <main style={{padding: '2rem'}}>
            <h1 className="text-3xl font-bold mb-4">
                Đang tải danh sách...
            </h1>

            {[1, 2, 3].map((item) => (
                <div key={item} className="bg-gray-200 shadow p-4 m-2 rounded-lg animate-pulse">
                    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                    <div className="h-4 bg-gray-300 rounded w-1/2 mt-2"></div>
                </div>
            ))}
        </main>
    )
}