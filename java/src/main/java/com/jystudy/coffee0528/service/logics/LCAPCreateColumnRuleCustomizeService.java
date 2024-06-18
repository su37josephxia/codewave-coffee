package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.entities.LCAPColumnRuleService; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@Service
public class LCAPCreateColumnRuleCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPColumnRuleService lCAPColumnRuleService;
    public void lCAPCreateColumnRule(LCAPColumnRule columnRule) {
        if ((!CommonFunctionUtil.hasValue(columnRule.id))) {
            lCAPColumnRuleService.create(columnRule);
        } else {
        } 

        return ;
    } 


}
