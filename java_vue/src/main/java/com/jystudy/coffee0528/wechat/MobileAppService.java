package com.jystudy.coffee0528.wechat;

import java.util.List;
import java.util.Map;

public interface MobileAppService {
    WechatSessionDTO getOpenid(String code, String frontend);
    List<Map<String, Object>> getPageTitles(String frontend);
    WechatPhoneNumberDTO getPhoneNumber(String code, String frontend);
}
