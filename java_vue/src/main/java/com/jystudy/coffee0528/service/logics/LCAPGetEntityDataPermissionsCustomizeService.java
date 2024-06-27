package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.ArrayList; 
import java.util.List; 
import com.fasterxml.jackson.databind.ObjectMapper; 
import com.jystudy.coffee0528.util.JacksonUtils; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.repository.LCAPGetEntityDataPermissionsCustomizeServiceMapper; 
import java.util.Map; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.domain.entities.LCAPRowRuleItem; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@Service
public class LCAPGetEntityDataPermissionsCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetEntityDataPermissionsCustomizeServiceMapper lCAPGetEntityDataPermissionsCustomizeServiceMapper;
    private ObjectMapper objectMapper = new ObjectMapper();
    @Autowired
    private LCAPNoneEntityDataPermissionCustomizeService lCAPNoneEntityDataPermissionCustomizeService;
    @Autowired
    private LCAPGetRowRuleByDataPermissionIdCustomizeService lCAPGetRowRuleByDataPermissionIdCustomizeService;
    @Autowired
    private LCAPGetUnderlingByUserNameCustomizeService lCAPGetUnderlingByUserNameCustomizeService;
    @Autowired
    private LCAPGetDeptAndUnderlingByUserNameCustomizeService lCAPGetDeptAndUnderlingByUserNameCustomizeService;
    @Autowired
    private LCAPGetDeptIdByUserIdCustomizeService lCAPGetDeptIdByUserIdCustomizeService;
    @Autowired
    private LCAPGetColumnRuleByDataPermissionIdCustomizeService lCAPGetColumnRuleByDataPermissionIdCustomizeService;
    public List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> lCAPGetEntityDataPermissions(List<String> entityNames) {
        List<Long> userRole = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5> dataPerList = new ArrayList<>();
        Map<String, List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5>> filterDataPerList = new HashMap<>();
        List<String> filterDataPerNameList = new ArrayList<>();
        List<String> nonDataPerList = new ArrayList<>();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> resDataPermissionList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5> roleDataPermissionList = new ArrayList<>();
        com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission resDataPermission = new com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission();
        List<LCAPRowRuleItem> rowRuleList = new ArrayList<>();
        com.netease.lowcode.annotation.datapermission.common.structure.RowRuleItem rowRuleItem = new com.netease.lowcode.annotation.datapermission.common.structure.RowRuleItem();
        List<com.netease.lowcode.annotation.datapermission.common.structure.RowRuleItem> rowRuleItemList = new ArrayList<>();
        com.netease.lowcode.annotation.datapermission.common.structure.RowRule rowRule = new com.netease.lowcode.annotation.datapermission.common.structure.RowRule();
        List<LCAPColumnRule> columnRuleList = new ArrayList<>();
        com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule columnRule = new com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule> columnRules = new ArrayList<>();
        com.netease.lowcode.annotation.datapermission.common.structure.DataPermission dataPermission = new com.netease.lowcode.annotation.datapermission.common.structure.DataPermission();
        List<com.netease.lowcode.annotation.datapermission.common.structure.DataPermission> dataPermissionList = new ArrayList<>();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> result = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(GlobalContext.getSessionVariable().currentUser, entityNames)) {
            userRole = lCAPGetEntityDataPermissionsCustomizeServiceMapper.getLong(GlobalContext.getSessionVariable().currentUser); 
            if (CommonFunctionUtil.hasValue(userRole)) {
                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("有角色：")).append(CommonFunctionUtil.toString(userRole)).toString()));
                dataPerList = lCAPGetEntityDataPermissionsCustomizeServiceMapper.getAnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5(entityNames, userRole); 
                if (CommonFunctionUtil.hasValue(dataPerList)) {
                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("有角色，上报数据权限：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(dataPerList))).toString()));
                    filterDataPerList = CommonFunctionUtil.listGroupBy(dataPerList, (item) -> item.lCAPDataPermission.resourceName); 
                    filterDataPerNameList = CommonFunctionUtil.mapKeys(filterDataPerList); 
                    for (Long index = 0L; index < entityNames.size(); index++) {
                        String item = entityNames.get(index.intValue());
                        if (CommonFunctionUtil.contains(filterDataPerNameList, item)) {
                        } else {
                            CommonFunctionUtil.add(nonDataPerList, item);
                        } 

                    } 

                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("不在数据权限表中的name：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(nonDataPerList))).toString()));
                    CommonFunctionUtil.addAll(resDataPermissionList, lCAPNoneEntityDataPermissionCustomizeService.lCAPNoneEntityDataPermission(nonDataPerList, "default"));
                    for (Long index = 0L; index < filterDataPerNameList.size(); index++) {
                        String item = filterDataPerNameList.get(index.intValue());
                        roleDataPermissionList = CommonFunctionUtil.mapGet(filterDataPerList, item); 
                        for (Long index1 = 0L; index1 < roleDataPermissionList.size(); index1++) {
                            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5 item1 = roleDataPermissionList.get(index1.intValue());
                            resDataPermission.resourceName = item1.lCAPDataPermission.resourceName; 
                            resDataPermission.resourceType = item1.lCAPDataPermission.resourceType; 

                            rowRuleList = lCAPGetRowRuleByDataPermissionIdCustomizeService.lCAPGetRowRuleByDataPermissionId(item1.lCAPDataPermission.id); 
                            rowRule = CommonFunctionUtil.New(com.netease.lowcode.annotation.datapermission.common.structure.RowRule.class); 
                            if ((CommonFunctionUtil.hasValue(item1.lCAPDataPermission.rowRuleType) && (CommonFunctionUtil.equals(item1.lCAPDataPermission.rowRuleType, "self")))) {
                                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("行权限类型为本人")).append(CommonFunctionUtil.toString(GlobalContext.getSessionVariable().currentUser.userName)).toString()));
                                rowRuleItem.comparison = "equal"; 
                                rowRuleItem.propertyName = "createdBy"; 
                                rowRuleItem.values = CommonFunctionUtil.newWithInitiation(new ArrayList<String>(), _list573 -> {
    _list573.add(GlobalContext.getSessionVariable().currentUser.userName);
} ); 

                                CommonFunctionUtil.add(rowRuleItemList, CommonFunctionUtil.clone(rowRuleItem));
                            } else {
                                if ((CommonFunctionUtil.hasValue(item1.lCAPDataPermission.rowRuleType) && (CommonFunctionUtil.equals(item1.lCAPDataPermission.rowRuleType, "underling")))) {
                                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("行权限类型为本人及下属")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(lCAPGetUnderlingByUserNameCustomizeService.lCAPGetUnderlingByUserName()))).toString()));
                                    rowRuleItem.comparison = "in"; 
                                    rowRuleItem.propertyName = "createdBy"; 
                                    rowRuleItem.values = lCAPGetUnderlingByUserNameCustomizeService.lCAPGetUnderlingByUserName(); 

                                    CommonFunctionUtil.add(rowRuleItemList, CommonFunctionUtil.clone(rowRuleItem));
                                } else {
                                    if ((CommonFunctionUtil.hasValue(item1.lCAPDataPermission.rowRuleType) && (CommonFunctionUtil.equals(item1.lCAPDataPermission.rowRuleType, "department")))) {
                                        LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("行权限类型为本部门及下级部门")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(lCAPGetDeptAndUnderlingByUserNameCustomizeService.lCAPGetDeptAndUnderlingByUserName(GlobalContext.getSessionVariable().currentUser.userId)))).toString()));
                                        rowRuleItem.comparison = "in"; 
                                        rowRuleItem.propertyName = "createdBy"; 
                                        rowRuleItem.values = lCAPGetDeptAndUnderlingByUserNameCustomizeService.lCAPGetDeptAndUnderlingByUserName(GlobalContext.getSessionVariable().currentUser.userId); 

                                        CommonFunctionUtil.add(rowRuleItemList, CommonFunctionUtil.clone(rowRuleItem));
                                    } else {
                                        for (Long index2 = 0L; index2 < rowRuleList.size(); index2++) {
                                            LCAPRowRuleItem item2 = rowRuleList.get(index2.intValue());
                                            if ((CommonFunctionUtil.hasValue(item2.valuesType) && (CommonFunctionUtil.equals(item2.valuesType, "登录信息变量")))) {
                                                if ((CommonFunctionUtil.equals(CommonFunctionUtil.listHead(item2.values), "登录用户名"))) {
                                                    rowRuleItem.comparison = item2.comparison; 
                                                    rowRuleItem.propertyName = item2.propertyName; 
                                                    rowRuleItem.values = CommonFunctionUtil.newWithInitiation(new ArrayList<String>(), _list551 -> {
    _list551.add(GlobalContext.getSessionVariable().currentUser.userName);
} ); 

                                                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("登录用户名值")).append(CommonFunctionUtil.toString(GlobalContext.getSessionVariable().currentUser.userName)).toString()));
                                                } else {
                                                } 

                                                if ((CommonFunctionUtil.equals(CommonFunctionUtil.listHead(item2.values), "登录用户ID"))) {
                                                    rowRuleItem.comparison = item2.comparison; 
                                                    rowRuleItem.propertyName = item2.propertyName; 
                                                    rowRuleItem.values = CommonFunctionUtil.newWithInitiation(new ArrayList<String>(), _list937 -> {
    _list937.add(GlobalContext.getSessionVariable().currentUser.userId);
} ); 

                                                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("登录用户ID值")).append(CommonFunctionUtil.toString(GlobalContext.getSessionVariable().currentUser.userId)).toString()));
                                                } else {
                                                } 

                                                if ((CommonFunctionUtil.equals(CommonFunctionUtil.listHead(item2.values), "登录用户部门标识"))) {
                                                    rowRuleItem.comparison = item2.comparison; 
                                                    rowRuleItem.propertyName = item2.propertyName; 
                                                    rowRuleItem.values = lCAPGetDeptIdByUserIdCustomizeService.lCAPGetDeptIdByUserId(GlobalContext.getSessionVariable().currentUser.userId); 

                                                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("登录用户部门标识值")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(lCAPGetDeptIdByUserIdCustomizeService.lCAPGetDeptIdByUserId(GlobalContext.getSessionVariable().currentUser.userId)))).toString()));
                                                } else {
                                                } 

                                            } else {
                                                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("行权限固定值")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(item2.values))).toString()));
                                                rowRuleItem.comparison = item2.comparison; 
                                                rowRuleItem.propertyName = item2.propertyName; 
                                                rowRuleItem.values = item2.values; 

                                            } 

                                            CommonFunctionUtil.add(rowRuleItemList, CommonFunctionUtil.clone(rowRuleItem));
                                        } 

                                    } 

                                } 

                            } 

                            if ((CommonFunctionUtil.hasValue(item1.lCAPDataPermission.rowRuleType) && (CommonFunctionUtil.equals(item1.lCAPDataPermission.rowRuleType, "all")))) {
                                LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("行权限类型为全部")).append(CommonFunctionUtil.toString(GlobalContext.getSessionVariable().currentUser.userId)).toString()));
                                rowRule = null; 
                            } else {
                                rowRule.items = rowRuleItemList; 
                                rowRule.relation = item1.lCAPDataPermission.relation; 
                                rowRule.children = CommonFunctionUtil.New(List.class); 

                            } 

                            columnRuleList = lCAPGetColumnRuleByDataPermissionIdCustomizeService.lCAPGetColumnRuleByDataPermissionId(item1.lCAPDataPermission.id); 
                            for (Long index2 = 0L; index2 < columnRuleList.size(); index2++) {
                                LCAPColumnRule item2 = columnRuleList.get(index2.intValue());
                                columnRule.propertyName = item2.propertyName; 
                                columnRule.columnRuleType = item2.columnRuleType; 

                                CommonFunctionUtil.add(columnRules, CommonFunctionUtil.clone(columnRule));
                            } 

                            dataPermission.rowRule = rowRule; 
                            dataPermission.columnRules = columnRules; 

                            CommonFunctionUtil.add(dataPermissionList, CommonFunctionUtil.clone(dataPermission));
                            CommonFunctionUtil.clear(rowRuleItemList);
                            CommonFunctionUtil.clear(columnRules);
                        } 

                        resDataPermission.dataPermissions = dataPermissionList; 
                        CommonFunctionUtil.add(resDataPermissionList, CommonFunctionUtil.clone(resDataPermission));
                        CommonFunctionUtil.clear(dataPermissionList);
                    } 

                    LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("实体数据权限：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(resDataPermissionList))).toString()));
                    result = resDataPermissionList; 
                } else {
                    LCAP_LOGGER.info(CommonFunctionUtil.toString("有角色，数据未赋予权限"));
                    result = lCAPNoneEntityDataPermissionCustomizeService.lCAPNoneEntityDataPermission(entityNames, "hasRole"); 
                } 

            } else {
                LCAP_LOGGER.info(CommonFunctionUtil.toString("无角色，数据无权限"));
                result = lCAPNoneEntityDataPermissionCustomizeService.lCAPNoneEntityDataPermission(entityNames, "notRole"); 
            } 

        } else {
            LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("未登录，数据无权限或无实体名集合：")).append(CommonFunctionUtil.toString(entityNames)).toString()));
            result = lCAPNoneEntityDataPermissionCustomizeService.lCAPNoneEntityDataPermission(entityNames, "notLogin"); 
        } 

        return result;
    } 


}
