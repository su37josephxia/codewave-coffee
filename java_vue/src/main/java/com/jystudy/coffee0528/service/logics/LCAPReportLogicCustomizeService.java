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
public class LCAPReportLogicCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPJudgeDelEntityOrLogicMetaCustomizeService lCAPJudgeDelEntityOrLogicMetaCustomizeService;
    @Autowired
    private LCAPJudgeSaveEntityOrLogicMetaCustomizeService lCAPJudgeSaveEntityOrLogicMetaCustomizeService;
    @Autowired
    private LCAPDeleteDataPermissionCustomizeService lCAPDeleteDataPermissionCustomizeService;
    public Boolean lCAPReportLogic(List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicStructure> logicContextList) {
        List<String> saveLogicNameList = new ArrayList<>();
        Boolean result = false;
        if (CommonFunctionUtil.hasValue(logicContextList)) {
            saveLogicNameList = CommonFunctionUtil.listTransform(logicContextList, (item) -> item.logicName); 
            lCAPJudgeDelEntityOrLogicMetaCustomizeService.lCAPJudgeDelEntityOrLogicMeta(saveLogicNameList, false);
            lCAPJudgeSaveEntityOrLogicMetaCustomizeService.lCAPJudgeSaveEntityOrLogicMeta(null, saveLogicNameList, logicContextList, false);
        } else {
            LCAP_LOGGER.info(CommonFunctionUtil.toString("无数据权限开启。清空逻辑元数据和数据权限"));
            lCAPDeleteDataPermissionCustomizeService.lCAPDeleteDataPermission(false);
        } 

        result = true; 
        return result;
    } 


}
