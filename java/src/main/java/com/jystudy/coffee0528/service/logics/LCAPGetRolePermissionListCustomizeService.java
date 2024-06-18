package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.repository.LCAPGetRolePermissionListCustomizeServiceMapper; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetRolePermissionListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetRolePermissionListCustomizeServiceMapper lCAPGetRolePermissionListCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0136396D558BF391361EA94F4EF87419 lCAPGetRolePermissionList(Long inputRoleId) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0136396D558BF391361EA94F4EF87419 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0136396D558BF391361EA94F4EF87419();
        result = CommonFunctionUtil.createListPage(lCAPGetRolePermissionListCustomizeServiceMapper.getAnonymousStructure_9D03344DB7AB35A991C54E50A80AE1F9(inputRoleId), lCAPGetRolePermissionListCustomizeServiceMapper.countAnonymousStructure_9D03344DB7AB35A991C54E50A80AE1F9(inputRoleId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0136396D558BF391361EA94F4EF87419.class); 
        return result;
    } 


}
