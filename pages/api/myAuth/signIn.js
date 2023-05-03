import axios from "axios";

export default function signIn(data) {
    const {user_name, password} = data;
    axios.post('/api/myAuth/authorize', {
        body: {
            user_name: user_name,
            password: password,
        }
      })
      .then(function (res) {
        if(res.data.auth == "ok") {
            sessionStorage.setItem("user_info",JSON.stringify(res.data.user_info));
            console.log("dang nhap thanh cong");

        } else {
            console.log("dang nhap that bai");
        }
      })
      .catch(function (error) {
        console.log(error);
      });
}