package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPReportEntityCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPJudgeDelEntityOrLogicMetaCustomizeService lCAPJudgeDelEntityOrLogicMetaCustomizeService;
    @Autowired
    private LCAPJudgeSaveEntityOrLogicMetaCustomizeService lCAPJudgeSaveEntityOrLogicMetaCustomizeService;
    @Autowired
    private LCAPDeleteDataPermissionCustomizeService lCAPDeleteDataPermissionCustomizeService;
    public Boolean lCAPReportEntity(List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityStructure> entityContextList) {
        List<String> saveEntityNameList = new ArrayList<>();
        Boolean result = false;
        if (CommonFunctionUtil.hasValue(entityContextList)) {
            saveEntityNameList = CommonFunctionUtil.listTransform(entityContextList, (item) -> item.entityName); 
            lCAPJudgeDelEntityOrLogicMetaCustomizeService.lCAPJudgeDelEntityOrLogicMeta(saveEntityNameList, true);
            lCAPJudgeSaveEntityOrLogicMetaCustomizeService.lCAPJudgeSaveEntityOrLogicMeta(entityContextList, saveEntityNameList, null, true);
        } else {
            LCAP_LOGGER.info(CommonFunctionUtil.toString("无数据权限开启。清空实体元数据和数据权限"));
            lCAPDeleteDataPermissionCustomizeService.lCAPDeleteDataPermission(true);
        } 

        result = true; 
        return result;
    } 


}
