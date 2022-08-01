import { createAsyncThunk } from "@reduxjs/toolkit";
import qs from "qs";
import http from "../../helpers/http";

export const login = createAsyncThunk("auth/login", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("/auth/login", send, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
    });

    result.token = data.result.token;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const register = createAsyncThunk("auth/register", async (request) => {
  const result = {};
  try {
    const send = qs.stringify(request);
    const { data } = await http().post("/auth/register", send, {
      headers: {
        "content-type": "application/x-www-form-urlencoded"
      }
    });

    result.username = data.result.username;
    return result;
  } catch (e) {
    result.errorMsg = e.response.data.message;
    return result;
  }
});

export const registerPin = createAsyncThunk("auth/registerPin", async (request) => {
    const result = {};
    try {
      const send = qs.stringify({pin: request.pin});
      const { data } = await http().post(`/auth/pin/${request.username}`, send, {
        headers: {
          "content-type": "application/x-www-form-urlencoded"
        }
      });
      
      result.successMsg = data.message;
      return result;
    } catch (e) {
      result.errorMsg = e.response.data.message;
      console.log(result);
      return result;
    }
});
