package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.HashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import com.jystudy.coffee0528.domain.entities.CoffeeEntity; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LoadCoffeeManagementTableView_1CustomizeServiceMapper; 

@Service
public class LoadCoffeeManagementTableView_1CustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadCoffeeManagementTableView_1CustomizeServiceMapper loadCoffeeManagementTableView_1CustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7FCEC9251B2AA5EC0764EAE1FE76EADF loadCoffeeManagementTableView_1(Long page, Long size, String sort, String order, CoffeeEntity filter) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7FCEC9251B2AA5EC0764EAE1FE76EADF result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7FCEC9251B2AA5EC0764EAE1FE76EADF();
        result = CommonFunctionUtil.createListPage(loadCoffeeManagementTableView_1CustomizeServiceMapper.getAnonymousStructure_3177427AE9FE919421E083B9B8414DE0(filter, page, size, getTableField("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0", sort), order), loadCoffeeManagementTableView_1CustomizeServiceMapper.countAnonymousStructure_3177427AE9FE919421E083B9B8414DE0(filter, page, size, getTableField("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7FCEC9251B2AA5EC0764EAE1FE76EADF.class); 
        return result;
    } 

    private Map<String, Map<String, String>> orderByParamToColumnMap = new HashMap();
    public LoadCoffeeManagementTableView_1CustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.id", "`coffee`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.createdTime", "`coffee`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.updatedTime", "`coffee`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.createdBy", "`coffee`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.updatedBy", "`coffee`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.coffeename", "`coffee`.`coffeename`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.description", "`coffee`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.price", "`coffee`.`price`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.coffeeImage", "`coffee`.`coffee_image`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.coffeeCategory", "`coffee`.`coffee_category`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffee.isDisplay", "`coffee`.`is_display`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.id", "`coffee_category`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.createdTime", "`coffee_category`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.updatedTime", "`coffee_category`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.createdBy", "`coffee_category`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.updatedBy", "`coffee_category`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.cateGoryName", "`coffee_category`.`cate_gory_name`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory.isDisplay", "`coffee_category`.`is_display`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("id", "`coffee_category`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("createdTime", "`coffee_category`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("updatedTime", "`coffee_category`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("createdBy", "`coffee_category`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("updatedBy", "`coffee_category`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeename", "`coffee`.`coffeename`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("description", "`coffee`.`description`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("price", "`coffee`.`price`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeImage", "`coffee`.`coffee_image`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("coffeeCategory", "`coffee`.`coffee_category`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("isDisplay", "`coffee_category`.`is_display`");
        orderByParamToColumnMap.get("AnonymousStructure_3177427AE9FE919421E083B9B8414DE0").put("cateGoryName", "`coffee_category`.`cate_gory_name`");
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
