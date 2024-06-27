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
import com.jystudy.coffee0528.repository.LCAPGetUserResourcesCustomizeServiceMapper; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.domain.structure.LCAPGetResourceResultStructure; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPGetUserResourcesCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetUserResourcesCustomizeServiceMapper lCAPGetUserResourcesCustomizeServiceMapper;
    public List<LCAPGetResourceResultStructure> lCAPGetUserResources(String userId) {
        if (GlobalContext.notHandleValidation()) {
            if (userId == null) {
                userId = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FA75F69B8BA9C34178F71FC536D2D824 variable1 = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FA75F69B8BA9C34178F71FC536D2D824();
        List<String> variable2 = new ArrayList<>();
        LCAPGetResourceResultStructure variable3 = new LCAPGetResourceResultStructure();
        List<LCAPGetResourceResultStructure> variable4 = new ArrayList<>();
        LCAPGetResourceResultStructure variable5 = new LCAPGetResourceResultStructure();
        List<LCAPGetResourceResultStructure> result = new ArrayList<>();
        variable1 = CommonFunctionUtil.createListPage(lCAPGetUserResourcesCustomizeServiceMapper.getAnonymousStructure_B202841ADEE061731D68863F55003B0E(userId), lCAPGetUserResourcesCustomizeServiceMapper.countAnonymousStructure_B202841ADEE061731D68863F55003B0E(userId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FA75F69B8BA9C34178F71FC536D2D824.class); 
        for (Long i = 0L; i < CommonFunctionUtil.length(variable1.list); i++) {
            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B202841ADEE061731D68863F55003B0E item = variable1.list.get(i.intValue());
            if (CommonFunctionUtil.contains(variable2, item.lCAPResource.name)) {
            } else {
                CommonFunctionUtil.add(variable2, item.lCAPResource.name);
                variable3.resourceValue = item.lCAPResource.name; 
                variable3.resourceType = item.lCAPResource.type; 
                variable5 = CommonFunctionUtil.clone(variable3); 
                CommonFunctionUtil.add(variable4, variable5);
            } 

        } 

        result = variable4; 
        return result;
    } 

    public Map<String, Object> LCAPGetUserResourcesValidateDefaultValue(Object ext) throws Exception {
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

    public Map<String, Object> LCAPGetUserResourcesValidateRestDefaultValue(String userId) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
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
