/*
 * @Author: jasper
 * @Date: 2022-03-29 15:48:27
 * @LastEditors: jasper
 * @LastEditTime: 2022-06-14 15:28:50
 * @FilePath: /vite-vue3-pc-template/src/utils/gateway.ts
 * @Description:
 *
 * Copyright (c) 2022 by 公卫区位大数据前端组, All Rights Reserved.
 */
import config from "@/config";
import { useRouter } from "vue-router";

const portal = {
  goLogin(): void {
    const router = useRouter();
    router.push({
      path: config.loginPath,
      query: {
        callbackUrl: router.currentRoute.fullPath,
      },
    });
    
  },
  goLoginWithoutCallback(): void {
    const router = useRouter();
    router.push({
      path: config.loginPath,
    });
  },
  loginout(needCallBack?: boolean): void {
    // 退出登陆
    // console.log(needCallBack);
    // loginout().then(() => {
    setTimeout(() => {
      if (needCallBack) {
        portal.goLogin();
      } else {
        portal.goLoginWithoutCallback();
      }
    }, 1500);
    // });
  },
};

export default portal;
