package com.jystudy.coffee0528.wechat;

public class WechatPhoneNumberDTO {
    private String errcode;
    private String errmsg;
    private WechatPhoneInfoDTO phone_info;

    public String getErrcode() {
        return errcode;
    }

    public void setErrcode(String errcode) {
        this.errcode = errcode;
    }

    public String getErrmsg() {
        return errmsg;
    }

    public void setErrmsg(String errmsg) {
        this.errmsg = errmsg;
    }

    public WechatPhoneInfoDTO getPhone_info() {
        return phone_info;
    }

    public void setPhone_info(WechatPhoneInfoDTO phone_info) {
        this.phone_info = phone_info;
    }
}