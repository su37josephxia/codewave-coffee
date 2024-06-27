package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.LinkedHashMap; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPGetUserByUserIdCustomizeServiceMapper; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPGetUserByUserIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetUserByUserIdCustomizeServiceMapper lCAPGetUserByUserIdCustomizeServiceMapper;
    public LCAPUser lCAPGetUserByUserId(String userId) {
        if (GlobalContext.notHandleValidation()) {
            if (userId == null) {
                userId = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 variable1 = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632();
        LCAPUser result = new LCAPUser();
        variable1 = CommonFunctionUtil.createListPage(lCAPGetUserByUserIdCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(userId), lCAPGetUserByUserIdCustomizeServiceMapper.countAnonymousStructure_47C167E7217746A55100F50A57F637C0(userId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632.class); 
        for (Long index = 0L; index < CommonFunctionUtil.length(variable1.list); index++) {
            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_47C167E7217746A55100F50A57F637C0 item = variable1.list.get(index.intValue());
            result = item.lCAPUser; 
        } 

        return result;
    } 

    public Map<String, Object> LCAPGetUserByUserIdValidateDefaultValue(Object ext) throws Exception {
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

    public Map<String, Object> LCAPGetUserByUserIdValidateRestDefaultValue(String userId) throws Exception {
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
