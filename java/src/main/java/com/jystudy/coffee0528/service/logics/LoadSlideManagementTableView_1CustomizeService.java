package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.HashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import com.jystudy.coffee0528.repository.LoadSlideManagementTableView_1CustomizeServiceMapper; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.domain.entities.SlideEntity; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LoadSlideManagementTableView_1CustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadSlideManagementTableView_1CustomizeServiceMapper loadSlideManagementTableView_1CustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6B6E31AAE799B197EE720D809BC38D27 loadSlideManagementTableView_1(Long page, Long size, String sort, String order, SlideEntity filter) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6B6E31AAE799B197EE720D809BC38D27 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6B6E31AAE799B197EE720D809BC38D27();
        result = CommonFunctionUtil.createListPage(loadSlideManagementTableView_1CustomizeServiceMapper.getAnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655(filter, page, size, getTableField("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655", sort), order), loadSlideManagementTableView_1CustomizeServiceMapper.countAnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655(filter, page, size, getTableField("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6B6E31AAE799B197EE720D809BC38D27.class); 
        return result;
    } 

    private Map<String, Map<String, String>> orderByParamToColumnMap = new HashMap();
    public LoadSlideManagementTableView_1CustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.id", "`slide`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.createdTime", "`slide`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.updatedTime", "`slide`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.createdBy", "`slide`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.updatedBy", "`slide`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.slideImage", "`slide`.`slide_image`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.displayOrder", "`slide`.`display_order`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slide.isDisplay", "`slide`.`is_display`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("id", "`slide`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("createdTime", "`slide`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("updatedTime", "`slide`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("createdBy", "`slide`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("updatedBy", "`slide`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("slideImage", "`slide`.`slide_image`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("displayOrder", "`slide`.`display_order`");
        orderByParamToColumnMap.get("AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655").put("isDisplay", "`slide`.`is_display`");
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


}
