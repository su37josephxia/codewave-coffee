package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.service.entities.LCAPEntityMetaService; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.service.entities.LCAPLogicMetaService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPDeleteDataMetaByIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPEntityMetaService lCAPEntityMetaService;
    @Autowired
    private LCAPLogicMetaService lCAPLogicMetaService;
    public void lCAPDeleteDataMetaById(Long id, Boolean isEntityMeta) {
        if (CommonFunctionUtil.hasValue(id)) {
            if (isEntityMeta) {
                lCAPEntityMetaService.delete(id);
            } else {
                lCAPLogicMetaService.delete(id);
            } 

        } else {
        } 

        return ;
    } 


}
