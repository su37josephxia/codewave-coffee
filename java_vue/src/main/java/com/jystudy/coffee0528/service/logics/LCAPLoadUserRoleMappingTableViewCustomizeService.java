package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.LinkedHashMap; 
import java.util.List; 
import com.jystudy.coffee0528.repository.LCAPLoadUserRoleMappingTableViewCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import java.util.Map; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPUserRoleMapping; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPLoadUserRoleMappingTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadUserRoleMappingTableViewCustomizeServiceMapper lCAPLoadUserRoleMappingTableViewCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_A43B95DDE943F37E89AA74CCF8732C90 lCAPLoadUserRoleMappingTableView(Long page, Long size, String sort, String order, LCAPUserRoleMapping filter) {
        if (GlobalContext.notHandleValidation()) {
            if (sort == null) {
                sort = ""; 
            } 

            if (order == null) {
                order = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_A43B95DDE943F37E89AA74CCF8732C90 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_A43B95DDE943F37E89AA74CCF8732C90();
        result = CommonFunctionUtil.createListPage(lCAPLoadUserRoleMappingTableViewCustomizeServiceMapper.getAnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8(filter, page, size, getTableField("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8", sort), order), lCAPLoadUserRoleMappingTableViewCustomizeServiceMapper.countAnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8(filter, page, size, getTableField("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_A43B95DDE943F37E89AA74CCF8732C90.class); 
        return result;
    } 

    public Map<String, Object> LCAPLoadUserRoleMappingTableViewValidateDefaultValue(Object ext) throws Exception {
        Map<String, Object> elements = new HashMap<>();
        try {
            Field sort = ReflectionUtils.findField(ext.getClass(), "sort");
            if (sort != null) {
                ReflectionUtils.makeAccessible(sort);
                if (ReflectionUtils.getField(sort, ext) == null) {
                    ReflectionUtils.setField(sort, ext, "");
                } 

                elements.put("sort", sort.get(ext));
            } 

            Field order = ReflectionUtils.findField(ext.getClass(), "order");
            if (order != null) {
                ReflectionUtils.makeAccessible(order);
                if (ReflectionUtils.getField(order, ext) == null) {
                    ReflectionUtils.setField(order, ext, "");
                } 

                elements.put("order", order.get(ext));
            } 

        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set default value error", e);
            throw e; 
        } 
        return elements;
    } 

    private Map<String, Map<String, String>> orderByParamToColumnMap = new HashMap();
    public LCAPLoadUserRoleMappingTableViewCustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.id", "`lcap_user_role_mapping_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.createdTime", "`lcap_user_role_mapping_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.updatedTime", "`lcap_user_role_mapping_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.createdBy", "`lcap_user_role_mapping_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.updatedBy", "`lcap_user_role_mapping_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.userId", "`lcap_user_role_mapping_f803ac`.`user_id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.roleId", "`lcap_user_role_mapping_f803ac`.`role_id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.userName", "`lcap_user_role_mapping_f803ac`.`user_name`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPUserRoleMapping.source", "`lcap_user_role_mapping_f803ac`.`source`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.id", "`lcap_role_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.createdTime", "`lcap_role_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.updatedTime", "`lcap_role_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.createdBy", "`lcap_role_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.updatedBy", "`lcap_role_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.uuid", "`lcap_role_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.name", "`lcap_role_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.description", "`lcap_role_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.roleStatus", "`lcap_role_f803ac`.`role_status`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("lCAPRole.editable", "`lcap_role_f803ac`.`editable`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("id", "`lcap_user_role_mapping_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("createdTime", "`lcap_user_role_mapping_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("updatedTime", "`lcap_user_role_mapping_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("createdBy", "`lcap_user_role_mapping_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("updatedBy", "`lcap_user_role_mapping_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("userId", "`lcap_user_role_mapping_f803ac`.`user_id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("roleId", "`lcap_user_role_mapping_f803ac`.`role_id`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("userName", "`lcap_user_role_mapping_f803ac`.`user_name`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("source", "`lcap_user_role_mapping_f803ac`.`source`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("uuid", "`lcap_role_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("name", "`lcap_role_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("description", "`lcap_role_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("roleStatus", "`lcap_role_f803ac`.`role_status`");
        orderByParamToColumnMap.get("AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8").put("editable", "`lcap_role_f803ac`.`editable`");
    } 

    private String getTableField(String structureName, String propertyName) {
        if (null == structureName || null == propertyName || null == orderByParamToColumnMap.get(structureName) || "".equals(propertyName)) {
            return null;
        } 

        if (null == orderByParamToColumnMap.get(structureName).get(propertyName)) {
            throw new HttpCodeException(404, "排序参数{" + propertyName + "}不存在"); 
        } 

        return orderByParamToColumnMap.get(structureName).get(propertyName);
    } 

    private <T> T getObjectTableField(String structureName, T obj, List<String> fieldNames) {
        try {
            T cloneObj = CommonFunctionUtil.clone(obj); 
            for (String fieldRef : fieldNames) {
                String[] fieldNameSplit = fieldRef.split("\\."); 
                Field field = obj.getClass().getDeclaredField(fieldNameSplit[0]); 
                Object fieldObject = cloneObj; 
                for (int fieldIndex = 1; fieldIndex < fieldNameSplit.length; fieldIndex++) {
                    fieldObject = field.get(fieldObject); 
                    field = field.getType().getDeclaredField(fieldNameSplit[fieldIndex]); 
                } 
                field.set(fieldObject, getTableField(structureName, String.valueOf(field.get(fieldObject))));
            } 
            return cloneObj;
        } catch (Exception e) {
            throw new HttpCodeException("500", e); 
        } 
    } 

    public Map<String, Object> LCAPLoadUserRoleMappingTableViewValidateRestDefaultValue(Long page, Long size, String sort, String order, LCAPUserRoleMapping filter) throws Exception {
        Map<String, Object> elements = new LinkedHashMap<>();
        try {
            elements.put("page", page);
            elements.put("size", size);
            if (sort == null) {
                sort = ""; 
            } 

            elements.put("sort", sort);
            if (order == null) {
                order = ""; 
            } 

            elements.put("order", order);
            elements.put("filter", filter);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
