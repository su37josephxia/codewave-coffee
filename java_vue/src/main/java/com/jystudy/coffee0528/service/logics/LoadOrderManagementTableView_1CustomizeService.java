package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.HashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import java.util.Map; 
import com.jystudy.coffee0528.domain.entities.OrderEntityEntity; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LoadOrderManagementTableView_1CustomizeServiceMapper; 

@Service
public class LoadOrderManagementTableView_1CustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LoadOrderManagementTableView_1CustomizeServiceMapper loadOrderManagementTableView_1CustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9FB208EA1C4E02E48C213B1868701FD1 loadOrderManagementTableView_1(Long page, Long size, String sort, String order, OrderEntityEntity filter) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9FB208EA1C4E02E48C213B1868701FD1 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9FB208EA1C4E02E48C213B1868701FD1();
        result = CommonFunctionUtil.createListPage(loadOrderManagementTableView_1CustomizeServiceMapper.getAnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B(filter, page, size, getTableField("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B", sort), order), loadOrderManagementTableView_1CustomizeServiceMapper.countAnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B(filter, page, size, getTableField("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9FB208EA1C4E02E48C213B1868701FD1.class); 
        return result;
    } 

    private Map<String, Map<String, String>> orderByParamToColumnMap = new HashMap();
    public LoadOrderManagementTableView_1CustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.id", "`order_entity`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.createdTime", "`order_entity`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.updatedTime", "`order_entity`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.createdBy", "`order_entity`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.updatedBy", "`order_entity`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.totalAmount", "`order_entity`.`total_amount`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.coffeeCount", "`order_entity`.`coffee_count`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.orderStatus", "`order_entity`.`order_status`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.consigneeName", "`order_entity`.`consignee_name`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.consigneePhone", "`order_entity`.`consignee_phone`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.consigneeArea", "`order_entity`.`consignee_area`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.consigneeAddress", "`order_entity`.`consignee_address`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.pickupMethod", "`order_entity`.`pickup_method`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.remark", "`order_entity`.`remark`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderEntity.coffeeList", "`order_entity`.`coffee_list`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("id", "`order_entity`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("createdTime", "`order_entity`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("updatedTime", "`order_entity`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("createdBy", "`order_entity`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("updatedBy", "`order_entity`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("totalAmount", "`order_entity`.`total_amount`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("coffeeCount", "`order_entity`.`coffee_count`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("orderStatus", "`order_entity`.`order_status`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("consigneeName", "`order_entity`.`consignee_name`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("consigneePhone", "`order_entity`.`consignee_phone`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("consigneeArea", "`order_entity`.`consignee_area`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("consigneeAddress", "`order_entity`.`consignee_address`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("pickupMethod", "`order_entity`.`pickup_method`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("remark", "`order_entity`.`remark`");
        orderByParamToColumnMap.get("AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B").put("coffeeList", "`order_entity`.`coffee_list`");
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
