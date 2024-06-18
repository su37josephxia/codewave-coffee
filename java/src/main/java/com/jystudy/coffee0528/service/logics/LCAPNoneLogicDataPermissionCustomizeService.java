package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.fasterxml.jackson.databind.ObjectMapper; 
import com.jystudy.coffee0528.util.JacksonUtils; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.domain.entities.LCAPLogicMeta; 

@Service
public class LCAPNoneLogicDataPermissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetLogicMetaByNameCustomizeService lCAPGetLogicMetaByNameCustomizeService;
    private ObjectMapper objectMapper = new ObjectMapper();
    public List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> lCAPNoneLogicDataPermission(List<String> logicNames, String permissiontype) {
        com.netease.lowcode.annotation.datapermission.common.structure.RowRule rowRule = new com.netease.lowcode.annotation.datapermission.common.structure.RowRule();
        com.netease.lowcode.annotation.datapermission.common.structure.DataPermission dataPermission = new com.netease.lowcode.annotation.datapermission.common.structure.DataPermission();
        com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission resDataPermission = new com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission();
        LCAPLogicMeta logicMeta = new LCAPLogicMeta();
        com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule columnRule = new com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule> columnRules = new ArrayList<>();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> result = new ArrayList<>();
        if (CommonFunctionUtil.equals(permissiontype, "notLogin")) {
            for (Long index = 0L; index < logicNames.size(); index++) {
                String item = logicNames.get(index.intValue());
                CommonFunctionUtil.clear(columnRules);
                logicMeta = lCAPGetLogicMetaByNameCustomizeService.lCAPGetLogicMetaByName(item); 
                for (Long index1 = 0L; index1 < logicMeta.properties.size(); index1++) {
                    com.netease.lowcode.annotation.datapermission.logic.structure.LogicPropertyStructure item1 = logicMeta.properties.get(index1.intValue());
                    columnRule.propertyName = item1.propertyName; 
                    columnRule.columnRuleType = "read"; 

                    CommonFunctionUtil.add(columnRules, CommonFunctionUtil.clone(columnRule));
                } 

                dataPermission.columnRules = columnRules; 
                dataPermission.rowRule = null; 

                resDataPermission.resourceName = item; 
                resDataPermission.dataPermissions = CommonFunctionUtil.newWithInitiation(new ArrayList<com.netease.lowcode.annotation.datapermission.common.structure.DataPermission>(), _list554 -> {
    _list554.add(dataPermission);
} ); 
                resDataPermission.resourceType = "logic"; 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resDataPermission));
            } 

        } else if (CommonFunctionUtil.equals(permissiontype, "notRole")) {
            for (Long index = 0L; index < logicNames.size(); index++) {
                String item = logicNames.get(index.intValue());
                resDataPermission.resourceType = "logic"; 
                resDataPermission.resourceName = item; 
                resDataPermission.dataPermissions = CommonFunctionUtil.New(List.class); 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resDataPermission));
            } 

        } else {
            for (Long index = 0L; index < logicNames.size(); index++) {
                String item = logicNames.get(index.intValue());
                rowRule.relation = "and"; 
                rowRule.children = CommonFunctionUtil.New(List.class); 
                rowRule.items = CommonFunctionUtil.New(List.class); 

                dataPermission.rowRule = rowRule; 
                dataPermission.columnRules = CommonFunctionUtil.New(List.class); 

                resDataPermission.dataPermissions = CommonFunctionUtil.newWithInitiation(new ArrayList<com.netease.lowcode.annotation.datapermission.common.structure.DataPermission>(), _list893 -> {
    _list893.add(dataPermission);
} ); 
                resDataPermission.resourceType = "logic"; 
                resDataPermission.resourceName = item; 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resDataPermission));
            } 

        } 

        LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("逻辑数据无权限处理返回值：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(result))).toString()));
        return result;
    } 


}
