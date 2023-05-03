
export default function handler(req, res) {
    if(req.method === "POST") {
        const {body} = req.body
        const {user_name, password} = body;

        if(user_name == "user101" && password == "12345678") {
            const user_info = {
                session: true,
                id: "1",
                name: "Nguyen Van A",
                image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
                role: "admin",
            }
            res.status(200).json({auth : "ok",user_info})
        };
        res.status(200).json({auth: "fail"})
    } else {
        res.status(404).json({auth: "fail"});
    }
}