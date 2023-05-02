import { signOut, useSession } from "next-auth/react";

export default function User() {
    const {data: session } = useSession();
    
    if(session) {
    console.log(session);
    return (<>
        <div>Ban da dang nhap</div>
        <button onClick={() => signOut()}>Click me</button>
        </>
    )
    } else {
        return (
            <div>Ban chua dang nhap nha!!</div>
        )
    }
}