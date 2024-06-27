package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.repository.LCAPGetScopeResourceByRoleIdCustomizeServiceMapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetScopeResourceByRoleIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetScopeResourceByRoleIdCustomizeServiceMapper lCAPGetScopeResourceByRoleIdCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B676D945A9DD0D6FB27D68FFAC48D5EE lCAPGetScopeResourceByRoleId(Long roleId) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B676D945A9DD0D6FB27D68FFAC48D5EE result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B676D945A9DD0D6FB27D68FFAC48D5EE();
        result = CommonFunctionUtil.createListPage(lCAPGetScopeResourceByRoleIdCustomizeServiceMapper.getAnonymousStructure_CF51E2CA3BEA957FFEB6CEA32F96003B(roleId), lCAPGetScopeResourceByRoleIdCustomizeServiceMapper.countAnonymousStructure_CF51E2CA3BEA957FFEB6CEA32F96003B(roleId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B676D945A9DD0D6FB27D68FFAC48D5EE.class); 
        return result;
    } 


}
