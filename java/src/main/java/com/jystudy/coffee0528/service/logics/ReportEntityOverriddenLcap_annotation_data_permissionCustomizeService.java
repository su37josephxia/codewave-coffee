package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class ReportEntityOverriddenLcap_annotation_data_permissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPReportEntityCustomizeService lCAPReportEntityCustomizeService;
    public Boolean reportEntityOverriddenLcap_annotation_data_permission(List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityStructure> entityContextList) {
        Boolean result = false;
        result = lCAPReportEntityCustomizeService.lCAPReportEntity(entityContextList); 
        return result;
    } 


}
