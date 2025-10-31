interface WelcomeMessageProps {
    name: string;
    role: string;
}

export default function WelcomeMessage({name, role}: WelcomeMessageProps) {
    return(
        <div className="p-4 border border-blue-500 rounded-lg shadow-md my-4 bg-white">
            <h4 className="text-xl font-semibold text-gray-800">Chào mừng bạn, {name}!</h4>
            <p className="text-gray-600">Bạn là một {role} tuyệt vời.</p>
        </div>
    );
}