export default function SignUp(){
    return (
        <>
            <h1 className="text-center text-2xl mt-10">Sign Up Page</h1>
            <form className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white">
                <input type="text" placeholder="Username" className="mb-4 p-2 rounded" />
                <input type="password" placeholder="Password" className="mb-4 p-2 rounded" />
                <button type="submit" className="bg-white text-purple-500 px-4 py-2 rounded">Sign Up</button>
            </form>
        </>
    )
}