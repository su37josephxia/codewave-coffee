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
import com.jystudy.coffee0528.domain.entities.LCAPRole; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPLoadRoleManagementTableViewCustomizeServiceMapper; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPLoadRoleManagementTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadRoleManagementTableViewCustomizeServiceMapper lCAPLoadRoleManagementTableViewCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6 lCAPLoadRoleManagementTableView(Long page, Long size, String sort, String order, LCAPRole filter) {
        if (GlobalContext.notHandleValidation()) {
            if (sort == null) {
                sort = ""; 
            } 

            if (order == null) {
                order = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6();
        result = CommonFunctionUtil.createListPage(lCAPLoadRoleManagementTableViewCustomizeServiceMapper.getAnonymousStructure_70791B893F53C2EFB9E501591763B020(filter, page, size, getTableField("AnonymousStructure_70791B893F53C2EFB9E501591763B020", sort), order), lCAPLoadRoleManagementTableViewCustomizeServiceMapper.countAnonymousStructure_70791B893F53C2EFB9E501591763B020(filter, page, size, getTableField("AnonymousStructure_70791B893F53C2EFB9E501591763B020", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_CAC5152BAE2C91DD609E3DFEE343ACC6.class); 
        return result;
    } 

    public Map<String, Object> LCAPLoadRoleManagementTableViewValidateDefaultValue(Object ext) throws Exception {
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
    public LCAPLoadRoleManagementTableViewCustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_70791B893F53C2EFB9E501591763B020", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.id", "`lcap_role_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.createdTime", "`lcap_role_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.updatedTime", "`lcap_role_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.createdBy", "`lcap_role_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.updatedBy", "`lcap_role_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.uuid", "`lcap_role_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.name", "`lcap_role_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.description", "`lcap_role_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.roleStatus", "`lcap_role_f803ac`.`role_status`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("lCAPRole.editable", "`lcap_role_f803ac`.`editable`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("id", "`lcap_role_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("createdTime", "`lcap_role_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("updatedTime", "`lcap_role_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("createdBy", "`lcap_role_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("updatedBy", "`lcap_role_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("uuid", "`lcap_role_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("name", "`lcap_role_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("description", "`lcap_role_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("roleStatus", "`lcap_role_f803ac`.`role_status`");
        orderByParamToColumnMap.get("AnonymousStructure_70791B893F53C2EFB9E501591763B020").put("editable", "`lcap_role_f803ac`.`editable`");
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

    public Map<String, Object> LCAPLoadRoleManagementTableViewValidateRestDefaultValue(Long page, Long size, String sort, String order, LCAPRole filter) throws Exception {
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
