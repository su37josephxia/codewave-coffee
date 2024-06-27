package com.jystudy.coffee0528.wechat;

import org.apache.commons.compress.utils.Lists;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.converter.StringHttpMessageConverter;
import com.jystudy.coffee0528.util.ExtendMappingJackson2HttpMessageConverter;
import com.jystudy.coffee0528.config.LcpProperties;
import java.nio.charset.Charset;
import org.springframework.stereotype.Component;
import org.springframework.util.CollectionUtils;
import org.springframework.util.StringUtils;
import org.springframework.web.client.RestTemplate;
import javax.annotation.Resource;

import java.util.*;

@Component
public class WechatAppServiceImpl implements MobileAppService {
    private static final String DEFAULT_FRONTEND = "wechat";
    private static long last_time;
    private static String access_token;
    private static final long ACCESS_TOKEN_DURATION = 300000;

    @Resource
    private LcpProperties lcpProperties;

    @Override
    public WechatSessionDTO getOpenid(String code, String frontend) {
        String appId;
        String secret;
        if (CollectionUtils.isEmpty(lcpProperties.getFrontends())) {
          // 老应用
          appId = lcpProperties.getWechat().getAppId().get(DEFAULT_FRONTEND);
          secret = lcpProperties.getWechat().getSecret().get(DEFAULT_FRONTEND);
        } else {
          appId = lcpProperties.getWechat().getAppId().get(frontend);
          secret = lcpProperties.getWechat().getSecret().get(frontend);
        }
        RestTemplate restTemplate = new RestTemplate();
        Map<String, String> requestParamMap = new HashMap<>();
        try {
            requestParamMap.put("js_code", code);
            requestParamMap.put("appid", appId);
            requestParamMap.put("secret", secret);
            restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
            restTemplate.getMessageConverters().add(new ExtendMappingJackson2HttpMessageConverter());
            WechatSessionDTO dto = restTemplate.getForObject("https://api.weixin.qq.com/sns/jscode2session?grant_type=authorization_code&js_code={js_code}&appid={appid}&secret={secret}", WechatSessionDTO.class, requestParamMap);
            return dto;
        } catch (Exception e) {
            return null;
        }
    }

    @Override
    public List<Map<String, Object>> getPageTitles(String frontend) {
        String pageTitleStr;
        if (CollectionUtils.isEmpty(lcpProperties.getFrontends())) {
          // 老应用
          pageTitleStr = lcpProperties.getWechat().getPageTitle().get(DEFAULT_FRONTEND);
        } else {
          pageTitleStr = lcpProperties.getWechat().getPageTitle().get(frontend);
        }
        if (StringUtils.isEmpty(pageTitleStr)) {
            return Lists.newArrayList();
        }
        List<String> pageTitle = Arrays.asList(pageTitleStr.split(";"));
        if (CollectionUtils.isEmpty(pageTitle)) {
            return Lists.newArrayList();
        }
        List<Map<String, Object>> ret = new ArrayList<>();
        for (String v : pageTitle) {
            String [] kv = v.split(",");
            if (kv.length < 1) {
                continue;
            }
            Map<String, Object> pageElement = new HashMap<>();
            if (StringUtils.isEmpty(kv[0])) {
                continue;
            }
            pageElement.put("name", kv[0]);
            if (kv.length > 1) {
                pageElement.put("title", StringUtils.isEmpty(kv[1]) ? kv[0] : kv[1]);
            }
            if (kv.length > 2) {
                pageElement.put("isIndex", StringUtils.isEmpty(kv[2]) ? false : Boolean.valueOf(kv[2]));
            }
            ret.add(pageElement);
        }
        return ret;
    }

    @Override
    public WechatPhoneNumberDTO getPhoneNumber(String code, String frontend) {
        String appId;
        String appSecret;
        if (CollectionUtils.isEmpty(lcpProperties.getFrontends())) {
            // 老应用
            appId = lcpProperties.getWechat().getAppId().get(DEFAULT_FRONTEND);
            appSecret = lcpProperties.getWechat().getSecret().get(DEFAULT_FRONTEND);
        } else {
            appId = lcpProperties.getWechat().getAppId().get(frontend);
            appSecret = lcpProperties.getWechat().getSecret().get(frontend);
        }
        try {
            RestTemplate restTemplate = new RestTemplate();
            Map<String, String> requestParamMap = new HashMap<>();
            requestParamMap.put("appid", appId);
            requestParamMap.put("secret", appSecret);
            restTemplate.getMessageConverters().add(0, new StringHttpMessageConverter(Charset.forName("UTF-8")));
            restTemplate.getMessageConverters().add(new ExtendMappingJackson2HttpMessageConverter());
            if ((System.currentTimeMillis() - last_time) > ACCESS_TOKEN_DURATION || Objects.isNull(access_token)) {
                WechatShareDTO dto = restTemplate.getForObject("https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid={appid}&secret={secret}", WechatShareDTO.class, requestParamMap);
                if (dto != null && dto.getAccess_token() != null) {
                    access_token = dto.getAccess_token();
                    last_time = System.currentTimeMillis();
                }
            }
            String url = "https://api.weixin.qq.com/wxa/business/getuserphonenumber?access_token=" + access_token;
            String requestBody = "{\"code\":\"" + code + "\"}";
            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);
            HttpEntity<String> requestEntity = new HttpEntity<>(requestBody, headers);
            WechatPhoneNumberDTO dto = restTemplate.postForObject(url, requestEntity, WechatPhoneNumberDTO.class);
            return dto;
        } catch (Exception e) {
            return null;
        }
    }

    public static class WechatShareDTO {
        String access_token;
        String ticket;

        public String getAccess_token() {
            return access_token;
        }

        public void setAccess_token(String access_token) {
            this.access_token = access_token;
        }

        public String getTicket() {
            return ticket;
        }

        public void setTicket(String ticket) {
            this.ticket = ticket;
        }
    }
}
