package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class GetEntityDataPermissionsOverriddenLcap_annotation_data_permissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetEntityDataPermissionsCustomizeService lCAPGetEntityDataPermissionsCustomizeService;
    public List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> getEntityDataPermissionsOverriddenLcap_annotation_data_permission(List<String> entityNames) {
        List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> result = new ArrayList<>();
        result = lCAPGetEntityDataPermissionsCustomizeService.lCAPGetEntityDataPermissions(entityNames); 
        return result;
    } 


}
