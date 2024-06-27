package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.repository.LCAPGetColumnRuleByDataPermissionIdCustomizeServiceMapper; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@Service
public class LCAPGetColumnRuleByDataPermissionIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetColumnRuleByDataPermissionIdCustomizeServiceMapper lCAPGetColumnRuleByDataPermissionIdCustomizeServiceMapper;
    public List<LCAPColumnRule> lCAPGetColumnRuleByDataPermissionId(Long dataPermissionId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_E968FE724CCB8A09F4B61C06FD779FA5> search = new ArrayList<>();
        List<LCAPColumnRule> result = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(dataPermissionId)) {
            search = lCAPGetColumnRuleByDataPermissionIdCustomizeServiceMapper.getAnonymousStructure_E968FE724CCB8A09F4B61C06FD779FA5(dataPermissionId); 
            if (CommonFunctionUtil.hasValue(search)) {
                result = CommonFunctionUtil.listTransform(search, (item) -> item.lCAPColumnRule); 
            } else {
                result = CommonFunctionUtil.New(List.class); 
            } 

        } else {
            result = CommonFunctionUtil.New(List.class); 
        } 

        return result;
    } 


}
