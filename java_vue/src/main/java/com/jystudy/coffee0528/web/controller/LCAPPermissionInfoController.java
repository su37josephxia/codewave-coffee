package com.jystudy.coffee0528.web.controller;

import com.jystudy.coffee0528.context.UserContext;
import com.jystudy.coffee0528.config.Constants;
import com.jystudy.coffee0528.service.UserResourceService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.GetMapping;
import java.util.Objects;
import java.util.HashMap;
import java.util.Map;
import java.util.List;
import java.util.ArrayList;
import org.springframework.util.CollectionUtils;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
* auto generate LCAPPermissionController
* 权限下沉时，页面模版里默认会调应用的一些接口
* 比如检查用户可访问权限资源的getUserResources接口
*
* @author sys
*/
@RestController
@RequestMapping("api/user/system")
public class LCAPPermissionInfoController {


    @Resource
    private UserResourceService userResourceService;

    @GetMapping("/getUserResources")
    public List<Map<String,String>> getUserResources() {
        UserContext.UserInfo currentUserInfo = UserContext.getCurrentUserInfo();
        if(Objects.isNull(currentUserInfo)){
            return null;
        }
        List<Map<String,String>> uiResourceList = new ArrayList<>();
        //TODO: 兼容3.0版本以下，模板中LCAPGetUserResources的自定义逻辑实现
        List<String> list = userResourceService.getUserResourceList(currentUserInfo.userId);
        if(!CollectionUtils.isEmpty(list)){
            list.stream().forEach(resValue->{
                Map<String,String> item = new HashMap<>(2);
                //与前端页约定类型，统一为ui
                item.put("resourceType","ui");
                item.put("resourceValue",resValue);
                uiResourceList.add(item);
            });
        }
       return uiResourceList;
   }



}