package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import com.jystudy.coffee0528.repository.LCAPIsRoleNameRepeatedCustomizeServiceMapper; 
import java.util.LinkedHashMap; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPIsRoleNameRepeatedCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPIsRoleNameRepeatedCustomizeServiceMapper lCAPIsRoleNameRepeatedCustomizeServiceMapper;
    public Boolean lCAPIsRoleNameRepeated(String roleName) {
        if (GlobalContext.notHandleValidation()) {
            if (roleName == null) {
                roleName = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6 variable1 = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6();
        Boolean isExist = false;
        variable1 = CommonFunctionUtil.createListPage(lCAPIsRoleNameRepeatedCustomizeServiceMapper.getAnonymousStructure_70791B893F53C2EFB9E501591763B020(roleName), lCAPIsRoleNameRepeatedCustomizeServiceMapper.countAnonymousStructure_70791B893F53C2EFB9E501591763B020(roleName).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6.class); 
        if ((CommonFunctionUtil.length(variable1.list).compareTo(0L) > 0)) {
            isExist = true; 
        } else {
            isExist = false; 
        } 

        return isExist;
    } 

    public Map<String, Object> LCAPIsRoleNameRepeatedValidateDefaultValue(Object ext) throws Exception {
        Map<String, Object> elements = new HashMap<>();
        try {
            Field roleName = ReflectionUtils.findField(ext.getClass(), "roleName");
            if (roleName != null) {
                ReflectionUtils.makeAccessible(roleName);
                if (ReflectionUtils.getField(roleName, ext) == null) {
                    ReflectionUtils.setField(roleName, ext, "");
                } 

                elements.put("roleName", roleName.get(ext));
            } 

        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set default value error", e);
            throw e; 
        } 
        return elements;
    } 

    public Map<String, Object> LCAPIsRoleNameRepeatedValidateRestDefaultValue(String roleName) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
            if (roleName == null) {
                roleName = ""; 
            } 

            elements.put("roleName", roleName);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
