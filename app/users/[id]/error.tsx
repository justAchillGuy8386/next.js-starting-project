"use client";

export default function UserError({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <main className="p-4 text-center">
            <h2 className="text-2xl font-bold text-red-600">
                Ối! Có lỗi xảy ra!
            </h2>
            <p className="my-2">{error.message}</p>
            <button
                onClick={
                    () => reset()
                }
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Thử lại
            </button>
        </main>
    )
}