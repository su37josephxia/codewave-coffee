package com.jystudy.coffee0528.web.controller.wechat;

import com.jystudy.coffee0528.wechat.MobileAppService;
import com.jystudy.coffee0528.wechat.WechatSessionDTO;
import com.jystudy.coffee0528.wechat.WechatPhoneNumberDTO;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.Resource;
import java.util.List;
import java.util.Map;

@RestController
public class WechatAppController {
    @Resource
    private MobileAppService mobileAppService;

    @GetMapping("/api/system/wechat/getOpenid")
    public WechatSessionDTO getOpenid(@RequestParam(value = "code") String code, @RequestHeader(value = "LCAP-FRONTEND", required = false) String frontend) {
        return mobileAppService.getOpenid(code, frontend);
    }

    @GetMapping("/api/system/wechat/getPageTitles")
    public List<Map<String, Object>> getPageTitles(@RequestHeader(value = "LCAP-FRONTEND", required = false) String frontend) {
        return mobileAppService.getPageTitles(frontend);
    }

    @GetMapping("/api/system/wechat/getPhoneNumber")
    public WechatPhoneNumberDTO getPhoneNumber(@RequestParam(value = "code") String code, @RequestHeader(value = "LCAP-FRONTEND", required = false) String frontend) {
        return mobileAppService.getPhoneNumber(code, frontend);
    }
}
