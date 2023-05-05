import { useMutation, useQuery } from 'react-query';
import { API } from '~/core/api/config';
import api, { setDefaultHeaders } from '~/core/api/api';
import nookies from 'nookies';
import getUser from '~/utils/getUser';
import { getCookie } from 'cookies-next';
import { USER_AUTH } from '~/context/defaultConst';

// LOGIN
async function login(credentials) {
  const { data } = await api.post(API.AUTH.LOGIN, credentials);
  return data;
}

export const useLogin = (cre) => {
  return useMutation(login);
};

// async function loginSocial(credentials) {
//   const { data } = await api.post(API.AUTH.LOGIN.SOCIAL, credentials);
//   return data;
// }

// export const useLoginSocial = () => {
//   return useMutation(loginSocial);
// };

// with header Bearer token
async function logout({ }) {
  const user_token = getCookie(USER_AUTH.TOKEN);
  if (user_token) {
    const { data } = await api.post(API.AUTH.LOGOUT, {}, {
      headers: { Authorization: 'Bearer ' + user_token },
    });
    return data;
  }

}

export const useLogout = () => {
  return useMutation(logout);
};

// async function register(info) {
//   const { data } = await api.post(API.AUTH.REGISTER, info);
//   return data;
// }

// export const useRegister = () => {
//   return useMutation(register);
// };

// async function forgotPassword(info) {
//   const { data } = await api.post(API.AUTH.PASSWORD.FORGOT, info);
//   return data;
// }

// export const useForgotPassword = () => {
//   return useMutation(forgotPassword);
// };

// async function verifyOTP(info) {
//   const { data } = await api.post(API.AUTH.PASSWORD.OTP, info);
//   return data;
// }

// export const useVerifyOTP = () => {
//   return useMutation(verifyOTP);
// };

// async function resetPassword(info) {
//   const { data } = await api.post(API.AUTH.PASSWORD.RESET, info);
//   return data;
// }

// export const useResetPassword = () => {
//   return useMutation(resetPassword);
// };
