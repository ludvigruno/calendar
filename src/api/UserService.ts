import axios, { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";

export default class UserService {
  static async getUsers(): Promise<AxiosResponse<IUser[]>> {
    //имитация обращения к серверу
    const response = await axios.get<IUser[]>("./users.json"); //смотрит в public
    return response;
  }
}
