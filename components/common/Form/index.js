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
import signIn from "~/utils/signIn";
import { useLogin } from "~/hooks/api/useAuth";
import { toast } from "react-toastify";
import { setCookie } from "cookies-next";
import { USER_AUTH } from "~/context/defaultConst";
import { LoadingButton } from "@mui/lab";
import clsx from "clsx";


export default function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const [authorize, setAuthorize] = useState(true);
  const [loading, setLoading] = useState(false);

  const { control, handleSubmit } = useForm({
    defaultValues: {
      student_id: '',
      password: '',
    }
  });

  const router = useRouter();
  const { mutate } = useLogin();

  const handleClickShowPassword = () => setShowPassword((show) => !show)
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  function store_cookie(data) {
    setCookie(USER_AUTH.TOKEN, data.access_token);
    setCookie(USER_AUTH.JSON, JSON.stringify(data.user));
  }

  function onSubmit(data) {
    setLoading(true);
    mutate({ ...data }, {
      onSuccess(data) {
        setLoading(false);
        if (data.error) {
          setAuthorize(false);
          return;
        }
        setAuthorize(true);
        store_cookie(data.data);
        router.push("/");
        toast.success("Login successfully",{autoClose: 3000});
      },
      onError(data) {
        setLoading(false);
        toast.error("Connect fail to server",{autoClose: 3000});
        console.log(data)
      }
    })
  }

  return (
    <div className={styles['form-container']}>
      <h2 className={styles['intro-text']} >Đăng nhập</h2>
      {
        authorize ||
        <p className={styles['error-text']}>⚠ Tên tài khoản hoặc mật khẩu sai ⚠</p>
      }
      <form onSubmit={handleSubmit(onSubmit)} className={styles['form']} onFocus={() => setAuthorize(true)}>
        <Controller
          name="student_id"
          control={control}
          render={({ field }) =>
            <TextField
              {...field}
              label="Mã số sinh viên"
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
        {/* <input type="submit" value="Let's go" className={styles['btn']} /> */}
        <LoadingButton type="submit" loading={loading} loadingPosition="end" className={clsx(styles['btn'], {
          [styles['loading']]: loading,
        })} onClick={handleSubmit(onSubmit)}>Let&apos;s go</LoadingButton>
      </form>
      <a href={"/forgotpassword"} className={styles['forgot-pass']}>Quên mật khẩu?</a>
    </div>
  )
}

