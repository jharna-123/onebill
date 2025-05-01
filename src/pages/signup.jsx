import { SignedOut, SignUp } from "@clerk/clerk-react";

export default function Signup(){
    return (
        <>
            <div className="flex  w-full justify-center item-center">
                <SignedOut>
                    <SignUp/>
                </SignedOut>
            </div>
        </>
    )
}