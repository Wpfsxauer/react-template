export const actionRequest = {
  /*提示框：单single、双double按钮*/
  dialog: {
    action: "dialog",
    type: "single",
    title: "",
    content: "",
    callback: "_$.publish.commonSetCallback",
  },

  /*是否结束掉当前webview载体，返回上一个页面 。默认 false*/
  goback: {
    action: "goback",
    is_backtoroot: false,
  },

  /*提示*/
  toast: {
    action: "toast",
    msg: "",
  },
};
