package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.HashMap; 
import java.util.ArrayList; 
import java.util.LinkedHashMap; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.exception.HttpCodeException; 
import com.jystudy.coffee0528.repository.LCAPGetUserTableViewCustomizeServiceMapper; 
import java.util.Map; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import org.slf4j.Logger; 
import java.lang.reflect.Field; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.domain.structure.LCAPGetUserResultStructure; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import org.springframework.util.ReflectionUtils; 

@Service
public class LCAPGetUserTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetUserTableViewCustomizeServiceMapper lCAPGetUserTableViewCustomizeServiceMapper;
    @Autowired
    private LCAPGetUserNameByUserIdCustomizeService lCAPGetUserNameByUserIdCustomizeService;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0C1B55E3C02BF7727EF75A634EA6CEA5 lCAPGetUserTableView(Long page, Long size, String sort, String order, LCAPUser filter) {
        if (GlobalContext.notHandleValidation()) {
            if (sort == null) {
                sort = ""; 
            } 

            if (order == null) {
                order = ""; 
            } 

        } 

        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D387C2D8CFFDD8A44C90398816CDEF5D search = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D387C2D8CFFDD8A44C90398816CDEF5D();
        LCAPGetUserResultStructure userResult = new LCAPGetUserResultStructure();
        List<LCAPGetUserResultStructure> userResultList = new ArrayList<>();
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0C1B55E3C02BF7727EF75A634EA6CEA5 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0C1B55E3C02BF7727EF75A634EA6CEA5();
        search = CommonFunctionUtil.createListPage(lCAPGetUserTableViewCustomizeServiceMapper.getAnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7(filter, page, size, getTableField("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7", sort), order), lCAPGetUserTableViewCustomizeServiceMapper.countAnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7(filter, page, size, getTableField("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7", sort), order).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D387C2D8CFFDD8A44C90398816CDEF5D.class); 
        for (Long index = 0L; index < search.list.size(); index++) {
            com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7 item = search.list.get(index.intValue());
            CommonFunctionUtil.clear(userResult);
            userResult.dept = item.lCAPDepartment; 
            userResult.user = item.lCAPUser; 
            userResult.userDept = item.lCAPUserDeptMapping; 

            if (CommonFunctionUtil.hasValue(item.lCAPUser.directLeaderId)) {
                userResult.deptUser = lCAPGetUserNameByUserIdCustomizeService.lCAPGetUserNameByUserId(item.lCAPUser.directLeaderId); 
            } else {
            } 

            CommonFunctionUtil.add(userResultList, CommonFunctionUtil.clone(userResult));
        } 

        result = CommonFunctionUtil.createListPage(userResultList, search.total, com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0C1B55E3C02BF7727EF75A634EA6CEA5.class); 
        return result;
    } 

    public Map<String, Object> LCAPGetUserTableViewValidateDefaultValue(Object ext) throws Exception {
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
    public LCAPGetUserTableViewCustomizeService() {
        orderByParamToColumnMap.put("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7", new HashMap());
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.id", "`lcap_user_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.createdTime", "`lcap_user_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.updatedTime", "`lcap_user_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.userId", "`lcap_user_f803ac`.`user_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.userName", "`lcap_user_f803ac`.`user_name`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.password", "`lcap_user_f803ac`.`password`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.phone", "`lcap_user_f803ac`.`phone`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.email", "`lcap_user_f803ac`.`email`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.displayName", "`lcap_user_f803ac`.`display_name`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.status", "`lcap_user_f803ac`.`status`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.source", "`lcap_user_f803ac`.`source`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUser.directLeaderId", "`lcap_user_f803ac`.`direct_leader_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.id", "`lcap_user_dept_mapping_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.createdTime", "`lcap_user_dept_mapping_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.updatedTime", "`lcap_user_dept_mapping_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.createdBy", "`lcap_user_dept_mapping_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.updatedBy", "`lcap_user_dept_mapping_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.userId", "`lcap_user_dept_mapping_f803ac`.`user_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.deptId", "`lcap_user_dept_mapping_f803ac`.`dept_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPUserDeptMapping.isDeptLeader", "`lcap_user_dept_mapping_f803ac`.`is_dept_leader`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.id", "`lcap_department_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.createdTime", "`lcap_department_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.updatedTime", "`lcap_department_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.createdBy", "`lcap_department_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.updatedBy", "`lcap_department_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.name", "`lcap_department_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.deptId", "`lcap_department_f803ac`.`dept_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("lCAPDepartment.parentDeptId", "`lcap_department_f803ac`.`parent_dept_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("id", "`lcap_user_dept_mapping_f803ac`.`id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("createdTime", "`lcap_user_dept_mapping_f803ac`.`created_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("updatedTime", "`lcap_user_dept_mapping_f803ac`.`updated_time`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("userId", "`lcap_user_dept_mapping_f803ac`.`user_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("userName", "`lcap_user_f803ac`.`user_name`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("password", "`lcap_user_f803ac`.`password`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("phone", "`lcap_user_f803ac`.`phone`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("email", "`lcap_user_f803ac`.`email`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("displayName", "`lcap_user_f803ac`.`display_name`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("status", "`lcap_user_f803ac`.`status`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("source", "`lcap_user_f803ac`.`source`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("directLeaderId", "`lcap_user_f803ac`.`direct_leader_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("createdBy", "`lcap_user_dept_mapping_f803ac`.`created_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("updatedBy", "`lcap_user_dept_mapping_f803ac`.`updated_by`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("deptId", "`lcap_user_dept_mapping_f803ac`.`dept_id`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("isDeptLeader", "`lcap_user_dept_mapping_f803ac`.`is_dept_leader`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("name", "`lcap_department_f803ac`.`name`");
        orderByParamToColumnMap.get("AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7").put("parentDeptId", "`lcap_department_f803ac`.`parent_dept_id`");
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

    public Map<String, Object> LCAPGetUserTableViewValidateRestDefaultValue(Long page, Long size, String sort, String order, LCAPUser filter) throws Exception {
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
