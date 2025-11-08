import "tailwindcss";


export const Button = ({
    disabled,
    children,
    onClick
}) => {
    //use clsx,cx
    return <span onClick={onClick} className={`px-32 py-8 text-white cursor-pointer ${disabled ? "bg-blue-300" :"bg-green-400"} rounded-2xl text-4xl`}>
        {children}
    </span>
}