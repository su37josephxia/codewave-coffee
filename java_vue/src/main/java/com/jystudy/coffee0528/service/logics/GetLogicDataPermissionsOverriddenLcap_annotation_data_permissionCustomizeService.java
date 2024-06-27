package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class GetLogicDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetLogicDataPermissionsCustomizeService lCAPGetLogicDataPermissionsCustomizeService;
    public List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> getLogicDataPermissionsOverriddenLcap_annotation_data_permission(List<String> logicNames) {
        List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> result = new ArrayList<>();
        result = lCAPGetLogicDataPermissionsCustomizeService.lCAPGetLogicDataPermissions(logicNames); 
        return result;
    } 


}
