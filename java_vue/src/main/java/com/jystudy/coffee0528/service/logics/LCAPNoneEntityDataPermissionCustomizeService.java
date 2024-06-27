package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.domain.entities.LCAPEntityMeta; 
import java.util.List; 
import com.fasterxml.jackson.databind.ObjectMapper; 
import com.jystudy.coffee0528.util.JacksonUtils; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPNoneEntityDataPermissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetEntityMetaByNameCustomizeService lCAPGetEntityMetaByNameCustomizeService;
    private ObjectMapper objectMapper = new ObjectMapper();
    public List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> lCAPNoneEntityDataPermission(List<String> entityNames, String permissiontype) {
        com.netease.lowcode.annotation.datapermission.common.structure.DataPermission dataPermission = new com.netease.lowcode.annotation.datapermission.common.structure.DataPermission();
        com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission resDataPermission = new com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission();
        com.netease.lowcode.annotation.datapermission.common.structure.RowRule rowRule = new com.netease.lowcode.annotation.datapermission.common.structure.RowRule();
        LCAPEntityMeta entityMeta = new LCAPEntityMeta();
        com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule columnRule = new com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ColumnRule> columnRules = new ArrayList<>();
        List<com.netease.lowcode.annotation.datapermission.common.structure.ResourceDataPermission> result = new ArrayList<>();
        if (CommonFunctionUtil.equals(permissiontype, "notLogin")) {
            for (Long index = 0L; index < entityNames.size(); index++) {
                String item = entityNames.get(index.intValue());
                CommonFunctionUtil.clear(columnRules);
                entityMeta = lCAPGetEntityMetaByNameCustomizeService.lCAPGetEntityMetaByName(item); 
                for (Long index1 = 0L; index1 < entityMeta.properties.size(); index1++) {
                    com.netease.lowcode.annotation.datapermission.entity.structure.EntityPropertyStructure item1 = entityMeta.properties.get(index1.intValue());
                    columnRule.propertyName = item1.propertyName; 
                    columnRule.columnRuleType = "readWrite"; 

                    CommonFunctionUtil.add(columnRules, CommonFunctionUtil.clone(columnRule));
                } 

                dataPermission.columnRules = columnRules; 
                dataPermission.rowRule = null; 

                resDataPermission.resourceName = item; 
                resDataPermission.dataPermissions = CommonFunctionUtil.newWithInitiation(new ArrayList<com.netease.lowcode.annotation.datapermission.common.structure.DataPermission>(), _list758 -> {
    _list758.add(dataPermission);
} ); 
                resDataPermission.resourceType = "entity"; 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resDataPermission));
            } 

        } else if (CommonFunctionUtil.equals(permissiontype, "notRole")) {
            for (Long index = 0L; index < entityNames.size(); index++) {
                String item = entityNames.get(index.intValue());
                resDataPermission.resourceType = "entity"; 
                resDataPermission.resourceName = item; 
                resDataPermission.dataPermissions = CommonFunctionUtil.New(List.class); 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resDataPermission));
            } 

        } else {
            for (Long index = 0L; index < entityNames.size(); index++) {
                String item = entityNames.get(index.intValue());
                rowRule.items = CommonFunctionUtil.New(List.class); 
                rowRule.relation = "and"; 
                rowRule.children = CommonFunctionUtil.New(List.class); 

                dataPermission.rowRule = rowRule; 
                dataPermission.columnRules = CommonFunctionUtil.New(List.class); 

                resDataPermission.dataPermissions = CommonFunctionUtil.newWithInitiation(new ArrayList<com.netease.lowcode.annotation.datapermission.common.structure.DataPermission>(), _list658 -> {
    _list658.add(dataPermission);
} ); 
                resDataPermission.resourceType = "entity"; 
                resDataPermission.resourceName = item; 

                CommonFunctionUtil.add(result, CommonFunctionUtil.clone(resDataPermission));
            } 

        } 

        LCAP_LOGGER.info(CommonFunctionUtil.toString(new StringBuilder().append(CommonFunctionUtil.toString("实体数据无权限处理返回值：")).append(CommonFunctionUtil.toString(JacksonUtils.toJson(result))).toString()));
        return result;
    } 


}
