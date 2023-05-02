
export default function fakeCheckUser({user_name, password}) {
    if(user_name=="user101" && password=="12345678") {
        return  {
                id: "1",
                name: "Nguyen Van A",
                role: "admin",
                image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80"
        }
    } else {
        return null;
    }
}