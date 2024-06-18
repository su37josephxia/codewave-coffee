package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.repository.LCAPGetDeptIdByUserIdCustomizeServiceMapper; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetDeptIdByUserIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetDeptIdByUserIdCustomizeServiceMapper lCAPGetDeptIdByUserIdCustomizeServiceMapper;
    public List<String> lCAPGetDeptIdByUserId(String userId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA> search = new ArrayList<>();
        List<String> result = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(userId)) {
            search = lCAPGetDeptIdByUserIdCustomizeServiceMapper.getAnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA(userId); 
            if (CommonFunctionUtil.hasValue(search)) {
                result = CommonFunctionUtil.listTransform(search, (item) -> item.lCAPUserDeptMapping.deptId); 
            } else {
                result = CommonFunctionUtil.New(List.class); 
            } 

        } else {
            result = CommonFunctionUtil.New(List.class); 
        } 

        return result;
    } 


}
