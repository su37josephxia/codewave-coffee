package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.LinkedHashMap; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPGetMappingIdByRoleIdAndUserIdCustomizeServiceMapper; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPGetMappingIdByRoleIdAndUserIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetMappingIdByRoleIdAndUserIdCustomizeServiceMapper lCAPGetMappingIdByRoleIdAndUserIdCustomizeServiceMapper;
    public Long lCAPGetMappingIdByRoleIdAndUserId(Long roleId, String userId) {
        if (GlobalContext.notHandleValidation()) {
            if (userId == null) {
                userId = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_53DE9B8001DA9BE446985BA45040CA18 variable1 = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_53DE9B8001DA9BE446985BA45040CA18();
        Long result = 0L;
        result = 0L; 
        variable1 = CommonFunctionUtil.createListPage(lCAPGetMappingIdByRoleIdAndUserIdCustomizeServiceMapper.getAnonymousStructure_E69C6A05AFC359D00B28F67D0E02C8E5(), lCAPGetMappingIdByRoleIdAndUserIdCustomizeServiceMapper.countAnonymousStructure_E69C6A05AFC359D00B28F67D0E02C8E5().intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_53DE9B8001DA9BE446985BA45040CA18.class); 
        for (Long i = 0L; i < CommonFunctionUtil.length(variable1.list); i++) {
            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_E69C6A05AFC359D00B28F67D0E02C8E5 item = variable1.list.get(i.intValue());
            if (((CommonFunctionUtil.equals(item.lCAPUserRoleMapping.roleId, roleId)) && (CommonFunctionUtil.equals(item.lCAPUserRoleMapping.userId, userId)))) {
                result = item.lCAPUserRoleMapping.id; 
            } else {
            } 

        } 

        return result;
    } 

    public Map<String, Object> LCAPGetMappingIdByRoleIdAndUserIdValidateDefaultValue(Object ext) throws Exception {
        Map<String, Object> elements = new HashMap<>();
        try {
            Field userId = ReflectionUtils.findField(ext.getClass(), "userId");
            if (userId != null) {
                ReflectionUtils.makeAccessible(userId);
                if (ReflectionUtils.getField(userId, ext) == null) {
                    ReflectionUtils.setField(userId, ext, "");
                } 

                elements.put("userId", userId.get(ext));
            } 

        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set default value error", e);
            throw e; 
        } 
        return elements;
    } 

    public Map<String, Object> LCAPGetMappingIdByRoleIdAndUserIdValidateRestDefaultValue(Long roleId, String userId) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
            elements.put("roleId", roleId);
            if (userId == null) {
                userId = ""; 
            } 

            elements.put("userId", userId);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
