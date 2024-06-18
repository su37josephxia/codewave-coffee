package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.domain.entities.LCAPEntityMeta; 
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission; 
import java.util.List; 
import com.fasterxml.jackson.databind.ObjectMapper; 
import com.jystudy.coffee0528.service.entities.LCAPEntityMetaService; 
import com.jystudy.coffee0528.util.JacksonUtils; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.repository.LCAPJudgeSaveEntityOrLogicMetaCustomizeServiceMapper; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.service.entities.LCAPLogicMetaService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.entities.LCAPColumnRuleService; 
import com.jystudy.coffee0528.domain.entities.LCAPLogicMeta; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@Service
public class LCAPJudgeSaveEntityOrLogicMetaCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadRoleManagementTableViewCustomizeService lCAPLoadRoleManagementTableViewCustomizeService;
    @Autowired
    private LCAPJudgeSaveEntityOrLogicMetaCustomizeServiceMapper lCAPJudgeSaveEntityOrLogicMetaCustomizeServiceMapper;
    @Autowired
    private LCAPGetDataPermissionByResourceNameCustomizeService lCAPGetDataPermissionByResourceNameCustomizeService;
    @Autowired
    private LCAPCreateDataPermissionCustomizeService lCAPCreateDataPermissionCustomizeService;
    @Autowired
    private LCAPGetColumnRuleByDataPermissionIdCustomizeService lCAPGetColumnRuleByDataPermissionIdCustomizeService;
    private ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private LCAPEntityMetaService lCAPEntityMetaService;
    @Autowired
    private LCAPColumnRuleService lCAPColumnRuleService;
    @Autowired
    private LCAPLogicMetaService lCAPLogicMetaService;
    public void lCAPJudgeSaveEntityOrLogicMeta(List<com.netease.lowcode.annotation.datapermission.entity.structure.EntityStructure> saveEntityList, List<String> saveEntityOrLogicNameList, List<com.netease.lowcode.annotation.datapermission.logic.structure.LogicStructure> saveLogicList, Boolean isEntityMeta) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC> entityMetaList = new ArrayList<>();
        LCAPEntityMeta saveEntityMeta = new LCAPEntityMeta();
        List<LCAPEntityMeta> saveEntityMetaList = new ArrayList<>();
        List<String> entityOrLogicNameList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_F596B746DC08704D55A3AF5333D966BF> logicMetaList = new ArrayList<>();
        LCAPLogicMeta saveLogicMeta = new LCAPLogicMeta();
        List<LCAPLogicMeta> saveLogicMetaList = new ArrayList<>();
        LCAPEntityMeta updateEntityMeta = new LCAPEntityMeta();
        List<LCAPEntityMeta> updateEntityMetaList = new ArrayList<>();
        LCAPLogicMeta updateLogicMeta = new LCAPLogicMeta();
        List<LCAPLogicMeta> updateLogicMetaList = new ArrayList<>();
        List<String> nameList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020> roleList = new ArrayList<>();
        LCAPDataPermission dataPermission = new LCAPDataPermission();
        LCAPColumnRule columnRule = new LCAPColumnRule();
        List<LCAPColumnRule> columnRuleList = new ArrayList<>();
        List<String> columnNameList = new ArrayList<>();
        List<LCAPColumnRule> createColumnRuleList = new ArrayList<>();
        roleList = lCAPLoadRoleManagementTableViewCustomizeService.lCAPLoadRoleManagementTableView(1L, 999999999L, null, null, null).list; 
        if (isEntityMeta) {
            entityMetaList = lCAPJudgeSaveEntityOrLogicMetaCustomizeServiceMapper.getAnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC(saveEntityOrLogicNameList); 
            if (CommonFunctionUtil.hasValue(entityMetaList)) {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("有的实体元数据不变，没有的新增"));
                entityOrLogicNameList = CommonFunctionUtil.listTransform(entityMetaList, (item) -> item.lCAPEntityMeta.entityName); 
                for (Long index = 0L; index < saveEntityList.size(); index++) {
                    com.netease.lowcode.annotation.datapermission.entity.structure.EntityStructure item = saveEntityList.get(index.intValue());
                    if (CommonFunctionUtil.contains(entityOrLogicNameList, item.entityName)) {
                        updateEntityMeta = CommonFunctionUtil.listFind(entityMetaList, (item1) -> (CommonFunctionUtil.equals(item1.lCAPEntityMeta.entityName, item.entityName))).lCAPEntityMeta; 
                        updateEntityMeta.entityDescription = item.entityDescription; 
                        updateEntityMeta.entityName = item.entityName; 
                        updateEntityMeta.tableName = item.tableName; 
                        updateEntityMeta.properties = item.properties; 

                        for (Long index1 = 0L; index1 < roleList.size(); index1++) {
                            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020 item1 = roleList.get(index1.intValue());
                            CommonFunctionUtil.clear(dataPermission);
                            CommonFunctionUtil.clear(columnRuleList);
                            CommonFunctionUtil.clear(columnNameList);
                            dataPermission = lCAPGetDataPermissionByResourceNameCustomizeService.lCAPGetDataPermissionByResourceName(updateEntityMeta.entityName, "entity", item1.lCAPRole.id); 
                            if (CommonFunctionUtil.hasValue(dataPermission.id)) {
                            } else {
                                dataPermission.relation = "and"; 
                                dataPermission.rowRuleType = "all"; 
                                dataPermission.resourceType = "entity"; 
                                dataPermission.roleId = item1.lCAPRole.id; 
                                dataPermission.resourceName = item.entityName; 

                                dataPermission = lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(dataPermission); 
                            } 

                            columnRuleList = lCAPGetColumnRuleByDataPermissionIdCustomizeService.lCAPGetColumnRuleByDataPermissionId(dataPermission.id); 
                            if (CommonFunctionUtil.hasValue(columnRuleList)) {
                                columnNameList = CommonFunctionUtil.listTransform(columnRuleList, (item2) -> item2.propertyName); 
                            } else {
                            } 

                            for (Long index2 = 0L; index2 < updateEntityMeta.properties.size(); index2++) {
                                com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure item2 = updateEntityMeta.properties.get(index2.intValue());
                                CommonFunctionUtil.clear(columnRule);
                                if (CommonFunctionUtil.contains(columnNameList, item2.propertyName)) {
                                } else {
                                    columnRule.dataPermissionId = dataPermission.id; 
                                    columnRule.propertyName = item2.propertyName; 
                                    columnRule.columnRuleType = "readWrite"; 

                                    CommonFunctionUtil.add(createColumnRuleList, CommonFunctionUtil.clone(columnRule));
                                } 

                            } 

                        } 

                        if (CommonFunctionUtil.hasValue(updateEntityMeta.id)) {
                            CommonFunctionUtil.add(updateEntityMetaList, CommonFunctionUtil.clone(updateEntityMeta));
                        } else {
                        } 

                    } else {
                        saveEntityMeta.entityDescription = item.entityDescription; 
                        saveEntityMeta.entityName = item.entityName; 
                        saveEntityMeta.properties = item.properties; 
                        saveEntityMeta.tableName = item.tableName; 

                        for (Long index1 = 0L; index1 < roleList.size(); index1++) {
                            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020 item1 = roleList.get(index1.intValue());
                            CommonFunctionUtil.clear(dataPermission);
                            dataPermission.relation = "and"; 
                            dataPermission.rowRuleType = "all"; 
                            dataPermission.resourceType = "entity"; 
                            dataPermission.roleId = item1.lCAPRole.id; 
                            dataPermission.resourceName = item.entityName; 

                            dataPermission = lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(dataPermission); 
                            for (Long index2 = 0L; index2 < item.properties.size(); index2++) {
                                com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure item2 = item.properties.get(index2.intValue());
                                CommonFunctionUtil.clear(columnRule);
                                columnRule.propertyName = item2.propertyName; 
                                columnRule.dataPermissionId = dataPermission.id; 
                                columnRule.columnRuleType = "readWrite"; 

                                CommonFunctionUtil.add(createColumnRuleList, CommonFunctionUtil.clone(columnRule));
                            } 

                        } 

                        CommonFunctionUtil.add(saveEntityMetaList, CommonFunctionUtil.clone(saveEntityMeta));
                    } 

                } 

                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("实体元数据：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(saveEntityMetaList))).toString()));
                if (CommonFunctionUtil.hasValue(saveEntityMetaList)) {
                    lCAPEntityMetaService.batchCreate(saveEntityMetaList);
                } else {
                } 

                if (CommonFunctionUtil.hasValue(updateEntityMetaList)) {
                    lCAPEntityMetaService.batchUpdate(updateEntityMetaList, null);
                } else {
                } 

                if (CommonFunctionUtil.hasValue(createColumnRuleList)) {
                    lCAPColumnRuleService.batchCreate(createColumnRuleList);
                } else {
                } 

            } else {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("无实体元数据，全部新增"));
                for (Long index = 0L; index < saveEntityList.size(); index++) {
                    com.netease.lowcode.annotation.datapermission.entity.structure.EntityStructure item = saveEntityList.get(index.intValue());
                    saveEntityMeta.entityDescription = item.entityDescription; 
                    saveEntityMeta.entityName = item.entityName; 
                    saveEntityMeta.properties = item.properties; 
                    saveEntityMeta.tableName = item.tableName; 

                    for (Long index1 = 0L; index1 < roleList.size(); index1++) {
                        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020 item1 = roleList.get(index1.intValue());
                        CommonFunctionUtil.clear(dataPermission);
                        dataPermission.relation = "and"; 
                        dataPermission.rowRuleType = "all"; 
                        dataPermission.resourceType = "entity"; 
                        dataPermission.roleId = item1.lCAPRole.id; 
                        dataPermission.resourceName = item.entityName; 

                        dataPermission = lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(dataPermission); 
                        for (Long index2 = 0L; index2 < item.properties.size(); index2++) {
                            com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure item2 = item.properties.get(index2.intValue());
                            CommonFunctionUtil.clear(columnRule);
                            columnRule.propertyName = item2.propertyName; 
                            columnRule.dataPermissionId = dataPermission.id; 
                            columnRule.columnRuleType = "readWrite"; 

                            CommonFunctionUtil.add(createColumnRuleList, CommonFunctionUtil.clone(columnRule));
                        } 

                    } 

                    CommonFunctionUtil.add(saveEntityMetaList, CommonFunctionUtil.clone(saveEntityMeta));
                } 

                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("实体元数据：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(saveEntityMetaList))).toString()));
                if (CommonFunctionUtil.hasValue(saveEntityMetaList)) {
                    lCAPEntityMetaService.batchCreate(saveEntityMetaList);
                } else {
                } 

                if (CommonFunctionUtil.hasValue(createColumnRuleList)) {
                    lCAPColumnRuleService.batchCreate(createColumnRuleList);
                } else {
                } 

            } 

        } else {
            logicMetaList = lCAPJudgeSaveEntityOrLogicMetaCustomizeServiceMapper.getAnonymousStructure_F596B746DC08704D55A3AF5333D966BF(saveEntityOrLogicNameList); 
            if (CommonFunctionUtil.hasValue(logicMetaList)) {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("有的逻辑元数据不变，没有的新增"));
                entityOrLogicNameList = CommonFunctionUtil.listTransform(logicMetaList, (item) -> item.lCAPLogicMeta.logicName); 
                for (Long index = 0L; index < saveLogicList.size(); index++) {
                    com.netease.lowcode.annotation.datapermission.logic.structure.LogicStructure item = saveLogicList.get(index.intValue());
                    if (CommonFunctionUtil.contains(entityOrLogicNameList, item.logicName)) {
                        updateLogicMeta = CommonFunctionUtil.listFind(logicMetaList, (item1) -> (CommonFunctionUtil.equals(item1.lCAPLogicMeta.logicName, item.logicName))).lCAPLogicMeta; 
                        updateLogicMeta.logicDescription = item.logicDescription; 
                        updateLogicMeta.logicName = item.logicName; 
                        updateLogicMeta.returnShape = item.returnShape; 

                        CommonFunctionUtil.clear(updateLogicMeta.properties);
                        for (Long index1 = 0L; index1 < item.properties.size(); index1++) {
                            com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item1 = item.properties.get(index1.intValue());
                            CommonFunctionUtil.clear(nameList);
                            nameList = CommonFunctionUtil.split(item1.propertyName, "."); 
                            if (((CommonFunctionUtil.indexOf(item1.propertyName, "[]", 0L, true).compareTo(0L) < 0) && (CommonFunctionUtil.length(nameList).compareTo(2L) <= 0))) {
                                CommonFunctionUtil.add(updateLogicMeta.properties, item1);
                            } else {
                            } 

                        } 

                        for (Long index1 = 0L; index1 < roleList.size(); index1++) {
                            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020 item1 = roleList.get(index1.intValue());
                            CommonFunctionUtil.clear(dataPermission);
                            CommonFunctionUtil.clear(columnRuleList);
                            CommonFunctionUtil.clear(columnNameList);
                            dataPermission = lCAPGetDataPermissionByResourceNameCustomizeService.lCAPGetDataPermissionByResourceName(updateLogicMeta.logicName, "logic", item1.lCAPRole.id); 
                            if (CommonFunctionUtil.hasValue(dataPermission.id)) {
                            } else {
                                dataPermission.relation = "and"; 
                                dataPermission.rowRuleType = "all"; 
                                dataPermission.resourceType = "logic"; 
                                dataPermission.roleId = item1.lCAPRole.id; 
                                dataPermission.resourceName = item.logicName; 

                                dataPermission = lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(dataPermission); 
                            } 

                            columnRuleList = lCAPGetColumnRuleByDataPermissionIdCustomizeService.lCAPGetColumnRuleByDataPermissionId(dataPermission.id); 
                            if (CommonFunctionUtil.hasValue(columnRuleList)) {
                                columnNameList = CommonFunctionUtil.listTransform(columnRuleList, (item2) -> item2.propertyName); 
                            } else {
                            } 

                            for (Long index2 = 0L; index2 < updateLogicMeta.properties.size(); index2++) {
                                com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item2 = updateLogicMeta.properties.get(index2.intValue());
                                CommonFunctionUtil.clear(columnRule);
                                if (CommonFunctionUtil.contains(columnNameList, item2.propertyName)) {
                                } else {
                                    columnRule.dataPermissionId = dataPermission.id; 
                                    columnRule.propertyName = item2.propertyName; 
                                    columnRule.columnRuleType = "read"; 

                                    CommonFunctionUtil.add(createColumnRuleList, CommonFunctionUtil.clone(columnRule));
                                } 

                            } 

                        } 

                        if (CommonFunctionUtil.hasValue(updateLogicMeta.id)) {
                            CommonFunctionUtil.add(updateLogicMetaList, CommonFunctionUtil.clone(updateLogicMeta));
                        } else {
                        } 

                    } else {
                        CommonFunctionUtil.clear(saveLogicMeta.properties);
                        if (((CommonFunctionUtil.equals(item.returnShape, "object")) || ((CommonFunctionUtil.equals(item.returnShape, "listOfObjects")) || (CommonFunctionUtil.equals(item.returnShape, "pageOfObjects"))))) {
                            saveLogicMeta.logicDescription = item.logicDescription; 
                            saveLogicMeta.logicName = item.logicName; 
                            saveLogicMeta.returnShape = item.returnShape; 

                            for (Long index1 = 0L; index1 < item.properties.size(); index1++) {
                                com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item1 = item.properties.get(index1.intValue());
                                CommonFunctionUtil.clear(nameList);
                                nameList = CommonFunctionUtil.split(item1.propertyName, "."); 
                                if (((CommonFunctionUtil.indexOf(item1.propertyName, "[]", 0L, true).compareTo(0L) < 0) && (CommonFunctionUtil.length(nameList).compareTo(2L) <= 0))) {
                                    CommonFunctionUtil.add(saveLogicMeta.properties, item1);
                                } else {
                                } 

                            } 

                            for (Long index1 = 0L; index1 < roleList.size(); index1++) {
                                com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020 item1 = roleList.get(index1.intValue());
                                CommonFunctionUtil.clear(dataPermission);
                                dataPermission.relation = "and"; 
                                dataPermission.rowRuleType = "all"; 
                                dataPermission.resourceType = "logic"; 
                                dataPermission.roleId = item1.lCAPRole.id; 
                                dataPermission.resourceName = item.logicName; 

                                dataPermission = lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(dataPermission); 
                                for (Long index2 = 0L; index2 < saveLogicMeta.properties.size(); index2++) {
                                    com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item2 = saveLogicMeta.properties.get(index2.intValue());
                                    CommonFunctionUtil.clear(columnRule);
                                    columnRule.propertyName = item2.propertyName; 
                                    columnRule.dataPermissionId = dataPermission.id; 
                                    columnRule.columnRuleType = "read"; 

                                    CommonFunctionUtil.add(createColumnRuleList, CommonFunctionUtil.clone(columnRule));
                                } 

                            } 

                            CommonFunctionUtil.add(saveLogicMetaList, CommonFunctionUtil.clone(saveLogicMeta));
                        } else {
                        } 

                    } 

                } 

                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("逻辑元数据：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(saveLogicMetaList))).toString()));
                if (CommonFunctionUtil.hasValue(saveLogicMetaList)) {
                    lCAPLogicMetaService.batchCreate(saveLogicMetaList);
                } else {
                } 

                if (CommonFunctionUtil.hasValue(updateLogicMetaList)) {
                    lCAPLogicMetaService.batchUpdate(updateLogicMetaList, null);
                } else {
                } 

                if (CommonFunctionUtil.hasValue(createColumnRuleList)) {
                    lCAPColumnRuleService.batchCreate(createColumnRuleList);
                } else {
                } 

            } else {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("无逻辑元数据，全部新增"));
                for (Long index = 0L; index < saveLogicList.size(); index++) {
                    com.netease.lowcode.annotation.datapermission.logic.structure.LogicStructure item = saveLogicList.get(index.intValue());
                    CommonFunctionUtil.clear(saveLogicMeta.properties);
                    if (((CommonFunctionUtil.equals(item.returnShape, "object")) || ((CommonFunctionUtil.equals(item.returnShape, "listOfObjects")) || (CommonFunctionUtil.equals(item.returnShape, "pageOfObjects"))))) {
                        saveLogicMeta.logicDescription = item.logicDescription; 
                        saveLogicMeta.logicName = item.logicName; 
                        saveLogicMeta.returnShape = item.returnShape; 

                        for (Long index1 = 0L; index1 < item.properties.size(); index1++) {
                            com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item1 = item.properties.get(index1.intValue());
                            CommonFunctionUtil.clear(nameList);
                            nameList = CommonFunctionUtil.split(item1.propertyName, "."); 
                            if (((CommonFunctionUtil.indexOf(item1.propertyName, "[]", 0L, true).compareTo(0L) < 0) && (CommonFunctionUtil.length(nameList).compareTo(2L) <= 0))) {
                                CommonFunctionUtil.add(saveLogicMeta.properties, item1);
                            } else {
                            } 

                        } 

                        for (Long index1 = 0L; index1 < roleList.size(); index1++) {
                            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020 item1 = roleList.get(index1.intValue());
                            CommonFunctionUtil.clear(dataPermission);
                            dataPermission.relation = "and"; 
                            dataPermission.rowRuleType = "all"; 
                            dataPermission.roleId = item1.lCAPRole.id; 
                            dataPermission.resourceType = "logic"; 
                            dataPermission.resourceName = item.logicName; 

                            dataPermission = lCAPCreateDataPermissionCustomizeService.lCAPCreateDataPermission(dataPermission); 
                            for (Long index2 = 0L; index2 < saveLogicMeta.properties.size(); index2++) {
                                com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item2 = saveLogicMeta.properties.get(index2.intValue());
                                CommonFunctionUtil.clear(columnRule);
                                columnRule.propertyName = item2.propertyName; 
                                columnRule.dataPermissionId = dataPermission.id; 
                                columnRule.columnRuleType = "read"; 

                                CommonFunctionUtil.add(createColumnRuleList, CommonFunctionUtil.clone(columnRule));
                            } 

                        } 

                        CommonFunctionUtil.add(saveLogicMetaList, CommonFunctionUtil.clone(saveLogicMeta));
                    } else {
                    } 

                } 

                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("逻辑元数据：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(saveLogicMetaList))).toString()));
                if (CommonFunctionUtil.hasValue(saveLogicMetaList)) {
                    lCAPLogicMetaService.batchCreate(saveLogicMetaList);
                } else {
                } 

                if (CommonFunctionUtil.hasValue(createColumnRuleList)) {
                    lCAPColumnRuleService.batchCreate(createColumnRuleList);
                } else {
                } 

            } 

        } 

        return ;
    } 


}
