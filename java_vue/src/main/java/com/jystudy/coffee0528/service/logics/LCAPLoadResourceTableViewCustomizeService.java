package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.LinkedHashMap; 
import com.jystudy.coffee0528.repository.LCAPLoadResourceTableViewCustomizeServiceMapper; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPLoadResourceTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadResourceTableViewCustomizeServiceMapper lCAPLoadResourceTableViewCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D8CB63E646D19A8E127BF2A118560F92 lCAPLoadResourceTableView(Long page, Long size, String sort, String order, List<Long> resourceIdList) {
        if (GlobalContext.notHandleValidation()) {
            if (sort == null) {
                sort = ""; 
            } 

            if (order == null) {
                order = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D8CB63E646D19A8E127BF2A118560F92 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D8CB63E646D19A8E127BF2A118560F92();
        result = CommonFunctionUtil.createListPage(lCAPLoadResourceTableViewCustomizeServiceMapper.getAnonymousStructure_EA050579F163467B7D2FD3E8C15362AF(resourceIdList, page, size, getTableField("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF", sort), order), lCAPLoadResourceTableViewCustomizeServiceMapper.countAnonymousStructure_EA050579F163467B7D2FD3E8C15362AF(resourceIdList, page, size, getTableField("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D8CB63E646D19A8E127BF2A118560F92.class); 
        return result;
    } 

    public Map<String, Object> LCAPLoadResourceTableViewValidateDefaultValue(Object ext) throws Exception {
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
    public LCAPLoadResourceTableViewCustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.id", "`lcap_resource_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.createdTime", "`lcap_resource_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.updatedTime", "`lcap_resource_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.createdBy", "`lcap_resource_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.updatedBy", "`lcap_resource_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.uuid", "`lcap_resource_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.name", "`lcap_resource_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.description", "`lcap_resource_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.type", "`lcap_resource_f803ac`.`type`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("lCAPResource.clientType", "`lcap_resource_f803ac`.`client_type`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("id", "`lcap_resource_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("createdTime", "`lcap_resource_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("updatedTime", "`lcap_resource_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("createdBy", "`lcap_resource_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("updatedBy", "`lcap_resource_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("uuid", "`lcap_resource_f803ac`.`uuid`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("name", "`lcap_resource_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("description", "`lcap_resource_f803ac`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("type", "`lcap_resource_f803ac`.`type`");
        orderByParamToColumnMap.get("AnonymousStructure_EA050579F163467B7D2FD3E8C15362AF").put("clientType", "`lcap_resource_f803ac`.`client_type`");
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

    public Map<String, Object> LCAPLoadResourceTableViewValidateRestDefaultValue(Long page, Long size, String sort, String order, List<Long> resourceIdList) throws Exception {
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
            elements.put("resourceIdList", resourceIdList);
        } catch (Exception e) {
            LCAP_LOGGER.error("validate rule set rest default value error", e);
            throw e; 
        } 
        return elements;
    } 


}
