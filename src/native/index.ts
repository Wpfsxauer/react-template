class nativeBrige {
  private param: any;

  bridgeAction(action: any, param: any) {
    if (!window.WBAPP || !window.WBAPP.invoke) {
      return false;
    }
    return window.WBAPP.invoke(action, param);
  }

  regist$() {
    window._$ = window._$ || {};
    window._$.publish = window._$.publish || {};
  }

  assign(targetObj: object, obj: object) {
    if (typeof obj === "object") {
      Object.assign(targetObj, obj);
    }
  }

  action(baseParams: any, ...arr: any[]) {
    this.param = baseParams;
    for (let i = 0; i < arr.length; i++) {
      const _param01 = arr[arr.length - i - 1];
      const _param02 = arr[arr.length - i - 2];
      if (
        _param01 !== undefined &&
        _param01 !== _param02 &&
        _param01 !== {} &&
        _param02 !== undefined
      ) {
        this.assign(_param02, _param01);
      } else if (_param02 === undefined && _param01 !== undefined) {
        this.assign(this.param, _param01);
      }
    }
    this.bridgeAction(this.param.action, this.param);
  }

  setCallback(cb: any) {
    this.regist$();
    window._$.publish.commonSetCallback = cb;
  }
}

export default new nativeBrige();
