package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class ReportLogicOverriddenLcap_annotation_data_permissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPReportLogicCustomizeService lCAPReportLogicCustomizeService;
    public Boolean reportLogicOverriddenLcap_annotation_data_permission(List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicStructure> logicContextList) {
        Boolean result = false;
        result = lCAPReportLogicCustomizeService.lCAPReportLogic(logicContextList); 
        return result;
    } 


}
