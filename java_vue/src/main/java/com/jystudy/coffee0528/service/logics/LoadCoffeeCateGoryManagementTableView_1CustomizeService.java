package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.HashMap; 
import com.jystudy.coffee0528.repository.LoadCoffeeCateGoryManagementTableView_1CustomizeServiceMapper; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import java.util.Map; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LoadCoffeeCateGoryManagementTableView_1CustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadCoffeeCateGoryManagementTableView_1CustomizeServiceMapper loadCoffeeCateGoryManagementTableView_1CustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1 loadCoffeeCateGoryManagementTableView_1(Long page, Long size, String sort, String order, CoffeeCategoryEntity filter) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1();
        result = CommonFunctionUtil.createListPage(loadCoffeeCateGoryManagementTableView_1CustomizeServiceMapper.getAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(filter, page, size, getTableField("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD", sort), order), loadCoffeeCateGoryManagementTableView_1CustomizeServiceMapper.countAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(filter, page, size, getTableField("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1.class); 
        return result;
    } 

    private Map<String, Map<String, String>> orderByParamToColumnMap = new HashMap();
    public LoadCoffeeCateGoryManagementTableView_1CustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.id", "`coffee_category`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.createdTime", "`coffee_category`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.updatedTime", "`coffee_category`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.createdBy", "`coffee_category`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.updatedBy", "`coffee_category`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.cateGoryName", "`coffee_category`.`cate_gory_name`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("coffeeCategory.isDisplay", "`coffee_category`.`is_display`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("id", "`coffee_category`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("createdTime", "`coffee_category`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("updatedTime", "`coffee_category`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("createdBy", "`coffee_category`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("updatedBy", "`coffee_category`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("cateGoryName", "`coffee_category`.`cate_gory_name`");
        orderByParamToColumnMap.get("AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD").put("isDisplay", "`coffee_category`.`is_display`");
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
