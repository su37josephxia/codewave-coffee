package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.repository.LCAPGetRowRuleByDataPermissionIdCustomizeServiceMapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.domain.entities.LCAPRowRuleItem; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetRowRuleByDataPermissionIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetRowRuleByDataPermissionIdCustomizeServiceMapper lCAPGetRowRuleByDataPermissionIdCustomizeServiceMapper;
    public List<LCAPRowRuleItem> lCAPGetRowRuleByDataPermissionId(Long dataPermissionId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C320F64FFAC1D657E9089ED51D519363> search = new ArrayList<>();
        List<LCAPRowRuleItem> result = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(dataPermissionId)) {
            search = lCAPGetRowRuleByDataPermissionIdCustomizeServiceMapper.getAnonymousStructure_C320F64FFAC1D657E9089ED51D519363(dataPermissionId); 
            if (CommonFunctionUtil.hasValue(search)) {
                result = CommonFunctionUtil.listTransform(search, (item) -> item.lCAPRowRuleItem); 
            } else {
                result = CommonFunctionUtil.New(List.class); 
            } 

        } else {
            result = CommonFunctionUtil.New(List.class); 
        } 

        return result;
    } 


}
