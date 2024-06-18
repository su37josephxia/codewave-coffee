package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.ArrayList; 
import java.util.LinkedHashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Map; 
import com.jystudy.coffee0528.repository.LCAPIsUserNameRepeatedCustomizeServiceMapper; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPIsUserNameRepeatedCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPIsUserNameRepeatedCustomizeServiceMapper lCAPIsUserNameRepeatedCustomizeServiceMapper;
    public Boolean lCAPIsUserNameRepeated(String userName) {
        if (GlobalContext.notHandleValidation()) {
            if (userName == null) {
                userName = ""; 
            } 

        } 

        List<String> variable1 = new ArrayList<>();
        List<String> variable2 = new ArrayList<>();
        Boolean isExist = false;
        variable1 = CommonFunctionUtil.listTransform(CommonFunctionUtil.createListPage(lCAPIsUserNameRepeatedCustomizeServiceMapper.getString(), lCAPIsUserNameRepeatedCustomizeServiceMapper.countString().intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_E4AAFE46AF05B650DD8A52B21781A53C.class).list, (item) -> item); 
        if ((CommonFunctionUtil.length(variable1).compareTo(0L) > 0)) {
            for (Long index = 0L; index < CommonFunctionUtil.length(variable1); index++) {
                String item = variable1.get(index.intValue());
                CommonFunctionUtil.add(variable2, CommonFunctionUtil.toLower(CommonFunctionUtil.clone(item)));
            } 

            if (CommonFunctionUtil.contains(variable2, CommonFunctionUtil.toLower(userName))) {
                isExist = true; 
            } else {
                isExist = false; 
            } 

        } else {
            isExist = false; 
        } 

        return isExist;
    } 

    public Map<String, Object> LCAPIsUserNameRepeatedValidateDefaultValue(Object ext) throws Exception {
        Map<String, Object> elements = new HashMap<>();
        try {
            Field userName = ReflectionUtils.findField(ext.getClass(), "userName");
            if (userName != null) {
                ReflectionUtils.makeAccessible(userName);
                if (ReflectionUtils.getField(userName, ext) == null) {
                    ReflectionUtils.setField(userName, ext, "");
                } 

                elements.put("userName", userName.get(ext));
            } 

        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set default value error", e);
            throw e; 
        } 
        return elements;
    } 

    public Map<String, Object> LCAPIsUserNameRepeatedValidateRestDefaultValue(String userName) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
            if (userName == null) {
                userName = ""; 
            } 

            elements.put("userName", userName);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
