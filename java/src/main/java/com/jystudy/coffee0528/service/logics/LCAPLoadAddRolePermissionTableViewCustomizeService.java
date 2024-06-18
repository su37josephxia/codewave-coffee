package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.LinkedHashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPLoadAddRolePermissionTableViewCustomizeServiceMapper; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPLoadAddRolePermissionTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadAddRolePermissionTableViewCustomizeServiceMapper lCAPLoadAddRolePermissionTableViewCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA lCAPLoadAddRolePermissionTableView(Long page, Long size, String sort, String order, List<Long> permissionIdList) {
        if (GlobalContext.notHandleValidation()) {
            if (sort == null) {
                sort = ""; 
            } 

            if (order == null) {
                order = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA();
        result = CommonFunctionUtil.createListPage(lCAPLoadAddRolePermissionTableViewCustomizeServiceMapper.getAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(permissionIdList, page, size, getTableField("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD", sort), order), lCAPLoadAddRolePermissionTableViewCustomizeServiceMapper.countAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(permissionIdList, page, size, getTableField("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA.class); 
        return result;
    } 

    public Map<String, Object> LCAPLoadAddRolePermissionTableViewValidateDefaultValue(Object ext) throws Exception {
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
    public LCAPLoadAddRolePermissionTableViewCustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.id", "`lcap_permission_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.createdTime", "`lcap_permission_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.updatedTime", "`lcap_permission_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.createdBy", "`lcap_permission_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.updatedBy", "`lcap_permission_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.uuid", "`lcap_permission_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.name", "`lcap_permission_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("lCAPPermission.description", "`lcap_permission_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("id", "`lcap_permission_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("createdTime", "`lcap_permission_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("updatedTime", "`lcap_permission_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("createdBy", "`lcap_permission_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("updatedBy", "`lcap_permission_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("uuid", "`lcap_permission_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("name", "`lcap_permission_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD").put("description", "`lcap_permission_f803ac`.`description`");
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

    public Map<String, Object> LCAPLoadAddRolePermissionTableViewValidateRestDefaultValue(Long page, Long size, String sort, String order, List<Long> permissionIdList) throws Exception {
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
            elements.put("permissionIdList", permissionIdList);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
