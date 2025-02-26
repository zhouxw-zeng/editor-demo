import { Response } from "./response"
export interface LoginParams {
  username: string
  password: string
}
export interface RegisterParams {
  username: string
  password: string
  confirmPassword: string
}
export interface LoginResponse extends Response {
  data: {
    token: string
  }
}

export interface UserInfo {
  id: number
  name: string
  sex?: number
  birthday?: string
  descriptions?: string
  phone?: string | number
  avater?: string
  addres?: string
}