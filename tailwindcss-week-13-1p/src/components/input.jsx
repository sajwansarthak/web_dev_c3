import "tailwindcss";


export const Input = ({
    onClick,
    type,
    placeholder
}) => {
    //use clsx,cx
    return <span onClick={onClick} className={`px-2 py-2 text-white cursor-pointer text-4xl`}>
        <input type={type} placeholder={placeholder} className="bg-blue-500 outline-none rounded-2xl p-4"></input>
    </span>
}