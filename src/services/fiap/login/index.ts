import { FiapApi } from "../api";
import { ILoginData } from "./iLoginData";
import { ILoginResponse } from "./iLoginRespnse";

export class LoginService {
  static async login(params: ILoginData) {
    const url = '/login'
    const response = await FiapApi.post<ILoginResponse>(url, params)
    return response.data
  }
}