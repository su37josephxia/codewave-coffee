package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission; 
import com.jystudy.coffee0528.repository.LCAPGetDataPermissionByResourceNameCustomizeServiceMapper; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetDataPermissionByResourceNameCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetDataPermissionByResourceNameCustomizeServiceMapper lCAPGetDataPermissionByResourceNameCustomizeServiceMapper;
    public LCAPDataPermission lCAPGetDataPermissionByResourceName(String resourceName, String resourceType, Long roleId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5> search = new ArrayList<>();
        LCAPDataPermission result = new LCAPDataPermission();
        search = lCAPGetDataPermissionByResourceNameCustomizeServiceMapper.getAnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5(roleId, resourceName, resourceType); 
        if (CommonFunctionUtil.hasValue(search)) {
            result = CommonFunctionUtil.listHead(search).lCAPDataPermission; 
        } else {
            result = CommonFunctionUtil.New(LCAPDataPermission.class); 
        } 

        return result;
    } 


}
