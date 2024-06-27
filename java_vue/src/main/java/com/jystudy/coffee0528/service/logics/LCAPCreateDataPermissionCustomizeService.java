package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission; 
import com.jystudy.coffee0528.service.entities.LCAPDataPermissionService; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPCreateDataPermissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPDataPermissionService lCAPDataPermissionService;
    public LCAPDataPermission lCAPCreateDataPermission(LCAPDataPermission dataPermission) {
        LCAPDataPermission result = new LCAPDataPermission();
        result = lCAPDataPermissionService.createOrUpdate(dataPermission, null); 
        return result;
    } 


}
