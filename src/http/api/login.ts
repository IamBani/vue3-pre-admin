import request, { RequestConfigOptions } from "../request";

/**
 * 登陆-用户名密码登陆
 * @param data
 * @param option axiso 参数
 * @returns
 */
export const userLogin = <T = any>(data?: T, option?: RequestConfigOptions) => {
  return request({
    url: "/login",
    method: "post",
    data,
    ...option,
  });
};
