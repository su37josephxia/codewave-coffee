package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.repository.LCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper; 
import com.jystudy.coffee0528.service.entities.LCAPEntityMetaService; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.service.entities.LCAPDataPermissionService; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.service.entities.LCAPRowRuleItemService; 
import com.jystudy.coffee0528.service.entities.LCAPLogicMetaService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.dto.filters.atomic.IdentifierQueryFilter; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter.Property; 
import com.jystudy.coffee0528.service.entities.LCAPColumnRuleService; 
import com.jystudy.coffee0528.service.dto.filters.logic.binary.matching.InQueryFilter; 

@Service
public class LCAPJudgeDelEntityOrLogicMetaCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper lCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper;
    @Autowired
    private LCAPEntityMetaService lCAPEntityMetaService;
    @Autowired
    private LCAPDataPermissionService lCAPDataPermissionService;
    @Autowired
    private LCAPColumnRuleService lCAPColumnRuleService;
    @Autowired
    private LCAPRowRuleItemService lCAPRowRuleItemService;
    @Autowired
    private LCAPLogicMetaService lCAPLogicMetaService;
    public void lCAPJudgeDelEntityOrLogicMeta(List<String> saveEntityOrLogicNameList, Boolean isEntityMeta) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC> entityMetaList = new ArrayList<>();
        List<Long> delEntityOrLogicMetaList = new ArrayList<>();
        List<Long> delDataPerList = new ArrayList<>();
        List<String> entityOrLogicNameList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5> dataPerNameList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_F596B746DC08704D55A3AF5333D966BF> logicMetaList = new ArrayList<>();
        if (isEntityMeta) {
            entityMetaList = lCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper.getAnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC(saveEntityOrLogicNameList); 
            if (CommonFunctionUtil.hasValue(entityMetaList)) {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("删除关闭的实体元数据和数据权限"));
                entityOrLogicNameList = CommonFunctionUtil.listTransform(entityMetaList, (item) -> item.lCAPEntityMeta.entityName); 
                delEntityOrLogicMetaList = CommonFunctionUtil.listTransform(entityMetaList, (item) -> item.lCAPEntityMeta.id); 
                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("删除实体元数据")).append(CommonFunctionUtil.toString(delEntityOrLogicMetaList)).toString()));
                lCAPEntityMetaService.batchDelete(delEntityOrLogicMetaList);
                dataPerNameList = lCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper.getAnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5(entityOrLogicNameList); 
                if (CommonFunctionUtil.hasValue(dataPerNameList)) {
                    delDataPerList = CommonFunctionUtil.listTransform(dataPerNameList, (item) -> item.lCAPDataPermission.id); 
                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("删除数据权限")).append(CommonFunctionUtil.toString(delDataPerList)).toString()));
                    lCAPDataPermissionService.batchDelete(delDataPerList);
                    LCAP_LOGGER.info(CommonFunctionUtil.toString("删除行权限与列权限"));
                    lCAPColumnRuleService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("delDataPerList", delDataPerList)));
                    lCAPRowRuleItemService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("delDataPerList", delDataPerList)));
                } else {
                } 

            } else {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("无删除的实体元数据"));
            } 

        } else {
            logicMetaList = lCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper.getAnonymousStructure_F596B746DC08704D55A3AF5333D966BF(saveEntityOrLogicNameList); 
            if (CommonFunctionUtil.hasValue(logicMetaList)) {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("删除关闭的逻辑元数据和数据权限"));
                entityOrLogicNameList = CommonFunctionUtil.listTransform(logicMetaList, (item) -> item.lCAPLogicMeta.logicName); 
                delEntityOrLogicMetaList = CommonFunctionUtil.listTransform(logicMetaList, (item) -> item.lCAPLogicMeta.id); 
                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("删除逻辑元数据")).append(CommonFunctionUtil.toString(delEntityOrLogicMetaList)).toString()));
                lCAPLogicMetaService.batchDelete(delEntityOrLogicMetaList);
                dataPerNameList = lCAPJudgeDelEntityOrLogicMetaCustomizeServiceMapper.getAnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A51(entityOrLogicNameList); 
                if (CommonFunctionUtil.hasValue(dataPerNameList)) {
                    delDataPerList = CommonFunctionUtil.listTransform(dataPerNameList, (item) -> item.lCAPDataPermission.id); 
                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("删除数据权限")).append(CommonFunctionUtil.toString(delDataPerList)).toString()));
                    lCAPDataPermissionService.batchDelete(delDataPerList);
                    LCAP_LOGGER.info(CommonFunctionUtil.toString("删除行权限与列权限"));
                    lCAPColumnRuleService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("delDataPerList", delDataPerList)));
                    lCAPRowRuleItemService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "dataPermissionId", "dataPermissionId", new ColumnQueryFilter.Property("", "dataPermissionId"))).right(new IdentifierQueryFilter("delDataPerList", delDataPerList)));
                } else {
                } 

            } else {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("无删除的逻辑元数据"));
            } 

        } 

        return ;
    } 


}
