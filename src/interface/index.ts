//接口参数配置
export interface requestConfigFace {
  [key: string]: string | boolean;
}

//get接口参数配置
export interface getRequestFace {
  (url: string, params?: requestConfigFace, config?: requestConfigFace): any;
}

//post接口参数配置
export interface postRequestFace {
  (url: string, data: requestConfigFace, config?: requestConfigFace): any;
}

//jsonp接口参数配置
export interface jsonpRequestFace {
  (url: string, data?: requestConfigFace): any;
}

//后端返回数据
export interface resultParam {
  code?: number;
  message?: string;
  data?: any;
}

//路由配置参数
export interface routerParam {
  path: string;
  component: any;
  name: string;
}

//营业执照数据约束
export interface checkAccountInfo {
  businessLicenseId: string;
  isShowlicense: boolean;
  businessLicenseImage: string;
  remark: string;
  accountList: Array<{
    label: string;
    content: string;
  }>;
}

//详情信息数据约束
export interface detailReasonFace {
  id: string | number;
  time: string;
  desc: string;
}

//url解析约束
export interface parseUrlFace {
  [key: string]: string;
}
