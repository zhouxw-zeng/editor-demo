import request from "../axios";
import { LoginParams, RegisterParams, UserInfo } from "../interfaces/auth";
/**
 * 用户授权API
 */
class AuthApi {
  /**
   * 登录接口
   * @param params { username, password }
   * @returns 
   */
  login = (data: LoginParams) => {
    return request({
      url: `login`,
      method: "POST",
      data
    })
  }
  /**
   * 用户注册
   * @param data 账号,密码,确认密码
   * @returns 
   */
  register = (data: RegisterParams) => {
    return request({
      url:  `register`,
      method: "POST",
      data
    })
  }
  
  /**
   * 登出
   * @returns 
   */
  logOut = () => {
    return request({
      url:  `logOut`,
      method: "POST",
    })
  }
  
  /**
   * 获取用户信息
   * @returns 
   */
  userInfo = () => {
    return request({
      url:  `userInfo`,
      method: "GET",
    })
  }

  /**
   * 修改用户信息
   * @returns 
   */
  updUserInfo = (data: UserInfo) => {
    return request({
      url:  `userInfo`,
      method: "PUT",
      data
    })
  }
}

export default new AuthApi()