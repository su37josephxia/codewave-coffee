package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.LinkedHashMap; 
import com.jystudy.coffee0528.repository.LCAPGetUserListCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPGetUserListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetUserListCustomizeServiceMapper lCAPGetUserListCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 lCAPGetUserList(String queryParam) {
        if (GlobalContext.notHandleValidation()) {
            if (queryParam == null) {
                queryParam = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632();
        result = CommonFunctionUtil.createListPage(lCAPGetUserListCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(queryParam), lCAPGetUserListCustomizeServiceMapper.countAnonymousStructure_47C167E7217746A55100F50A57F637C0(queryParam).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632.class); 
        return result;
    } 

    public Map<String, Object> LCAPGetUserListValidateDefaultValue(Object ext) throws Exception {
        Map<String, Object> elements = new HashMap<>();
        try {
            Field queryParam = ReflectionUtils.findField(ext.getClass(), "queryParam");
            if (queryParam != null) {
                ReflectionUtils.makeAccessible(queryParam);
                if (ReflectionUtils.getField(queryParam, ext) == null) {
                    ReflectionUtils.setField(queryParam, ext, "");
                } 

                elements.put("queryParam", queryParam.get(ext));
            } 

        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set default value error", e);
            throw e; 
        } 
        return elements;
    } 

    public Map<String, Object> LCAPGetUserListValidateRestDefaultValue(String queryParam) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
            if (queryParam == null) {
                queryParam = ""; 
            } 

            elements.put("queryParam", queryParam);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
