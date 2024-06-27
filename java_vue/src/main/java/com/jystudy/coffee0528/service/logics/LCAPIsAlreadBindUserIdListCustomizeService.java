package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.ArrayList; 
import java.util.LinkedHashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPIsAlreadBindUserIdListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetRoleBindUserListCustomizeService lCAPGetRoleBindUserListCustomizeService;
    public Boolean lCAPIsAlreadBindUserIdList(String newUserId, Long inputRoleId) {
        if (GlobalContext.notHandleValidation()) {
            if (newUserId == null) {
                newUserId = ""; 
            } 

        } 

        List<String> userIdList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_E69C6A05AFC359D00B28F67D0E02C8E5> userList = new ArrayList<>();
        Boolean result = false;
        userList = lCAPGetRoleBindUserListCustomizeService.lCAPGetRoleBindUserList(inputRoleId); 
        for (Long i = 0L; i < CommonFunctionUtil.length(userList); i++) {
            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_E69C6A05AFC359D00B28F67D0E02C8E5 item = userList.get(i.intValue());
            CommonFunctionUtil.add(userIdList, item.lCAPUserRoleMapping.userId);
        } 

        if (CommonFunctionUtil.contains(userIdList, newUserId)) {
            result = true; 
        } else {
            result = false; 
        } 

        return result;
    } 

    public Map<String, Object> LCAPIsAlreadBindUserIdListValidateDefaultValue(Object ext) throws Exception {
        Map<String, Object> elements = new HashMap<>();
        try {
            Field newUserId = ReflectionUtils.findField(ext.getClass(), "newUserId");
            if (newUserId != null) {
                ReflectionUtils.makeAccessible(newUserId);
                if (ReflectionUtils.getField(newUserId, ext) == null) {
                    ReflectionUtils.setField(newUserId, ext, "");
                } 

                elements.put("newUserId", newUserId.get(ext));
            } 

        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set default value error", e);
            throw e; 
        } 
        return elements;
    } 

    public Map<String, Object> LCAPIsAlreadBindUserIdListValidateRestDefaultValue(String newUserId, Long inputRoleId) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
            if (newUserId == null) {
                newUserId = ""; 
            } 

            elements.put("newUserId", newUserId);
            elements.put("inputRoleId", inputRoleId);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
