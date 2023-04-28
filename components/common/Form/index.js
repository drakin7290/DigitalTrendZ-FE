import { useForm } from "react-hook-form"
import styles from "./styles.module.scss"
import { TextField } from "@mui/material";
import { Controller } from "react-hook-form";
import { useState } from "react";
import FormControl from "@mui/material";
import InputLabel from "@mui/material";
import Button from "@mui/material";
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Link from "next/link";


export default function Form() {
  const [showPassword, setShowPassword] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      user_name: '',
      password: '',
    }
  });


  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const onSubmit = (data) => console.log(JSON.stringify(data));

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
            <Input
              {...field}
              id="standard-adornment-password"
              placeholder="Mật khẩu"
              type={showPassword ? 'text' : 'password'}
              inputProps={{
                style: {
                  fontSize: "1.5rem",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />}
        />
        <input type="submit" value="Let's go" className={styles['btn']} />
      </form>
      <a href={"/forgotpassword"} className={styles['forgot-pass']}>Quên mật khẩu</a>
    </div>
  )
}