import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
//import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import signIn from "~/pages/api/myAuth/signIn";


export default function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      user_name: '',
      password: '',
    }
  });

  const router = useRouter();

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

// async function onSubmit(data) {
//     const status = await signIn("credentials",{
//       redirect: false,
//       user_name: data.user_name,
//       password: data.password,
//       callbackUrl: "/",
//     });
//     if(status.ok) {
//         router.push(status.url);
//     }

//   }

function onSubmit(data) {
    signIn(data);
    router.push("/");
}

  return (
    <div className={styles['form-container']}>
      <h2 className={styles['intro-text']} >Đăng nhập</h2>
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']}>
        <Controller
          name="user_name"
          control={control}
          render={({ field }) =>
            <TextField 
              {...field} 
              label="Tên đăng nhập" 
              variant="standard" 
              inputProps={{
                style: {
                  fontSize: "1.5rem",
                },
              }}
              InputLabelProps={{
                style: {
                  fontSize: "1.5rem",
                }
              }}
            />}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => 
          <TextField
            {...field}
            label='Mật khẩu'
            variant="standard"
            type={showPassword ? "text" : "password"}
            InputLabelProps={{
              style: {
                fontSize: "1.5rem",
              }
            }}
            InputProps={{ 
              style: {
                fontSize: "1.5rem",
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              )
            }}
          />
          }
        />
        <input type="submit" value="Let's go" className={styles['btn']} />
      </form>
      <a href={"/forgotpassword"} className={styles['forgot-pass']}>Quên mật khẩu?</a>
    </div>
  )
}

/*
  <TextField
              {...field}
              variant="standard" 
              name="password"
              label="Password"
              type={showPassword ? 'text' : 'password'}
              id="password"
              inputProps={{
                style: {
                  fontSize: "1.5rem",
                },
              endAdornment:(
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
              }}
            />} */