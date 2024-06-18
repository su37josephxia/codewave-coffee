package com.jystudy.coffee0528.service.entities.inner;

import java.io.Serializable;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.HashMap;
import java.time.LocalDateTime;
import javax.annotation.Resource;
import java.beans.PropertyDescriptor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import org.springframework.stereotype.Service;
import org.springframework.beans.BeanUtils;
import org.springframework.transaction.annotation.Transactional;

import com.jystudy.coffee0528.exception.HttpCodeException;
import com.jystudy.coffee0528.domain.*;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.repository.*;
import com.jystudy.coffee0528.util.SpringUtils;

/**
* auto generate RelationInnerService
*
* @author sys
*/
@Service
public class RelationInnerService {
    private Map<String, List<Object[]>> relationMap = new HashMap<>();
    private static Logger LOGGER = LoggerFactory.getLogger(RelationInnerService.class);
    private static final int INDEX_BEREF_PROPERTY = 0;
    private static final int INDEX_REF_ENTITY_MAPPER_CLASS = 1;
    private static final int INDEX_REF_PROPERTY = 2;
    private static final int INDEX_DEL_RULE = 3;

    public RelationInnerService() {
        relationMap.put("LCAPResource", new ArrayList<>());
        relationMap.get("LCAPResource").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPPerResMappingMapper.class,
            "resourceId",
            "cascade"
            });
        relationMap.put("LCAPDataPermission", new ArrayList<>());
        relationMap.get("LCAPDataPermission").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPRowRuleItemMapper.class,
            "dataPermissionId",
            "cascade"
            });
        relationMap.get("LCAPDataPermission").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPColumnRuleMapper.class,
            "dataPermissionId",
            "cascade"
            });
        relationMap.put("OrderEntityEntity", new ArrayList<>());
        relationMap.get("OrderEntityEntity").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.CoffeeOrderMappingEntityMapper.class,
            "orderId",
            "protect"
            });
        relationMap.put("CoffeeCategoryEntity", new ArrayList<>());
        relationMap.get("CoffeeCategoryEntity").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.CoffeeEntityMapper.class,
            "coffeeCategory",
            "cascade"
            });
        relationMap.put("LCAPUser", new ArrayList<>());
        relationMap.get("LCAPUser").add(new Object[]{
            "userId",
            com.jystudy.coffee0528.repository.entities.LCAPUserRoleMappingMapper.class,
            "userId",
            "cascade"
            });
        relationMap.get("LCAPUser").add(new Object[]{
            "userId",
            com.jystudy.coffee0528.repository.entities.LCAPUserDeptMappingMapper.class,
            "userId",
            "cascade"
            });
        relationMap.put("LCAPRole", new ArrayList<>());
        relationMap.get("LCAPRole").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPUserRoleMappingMapper.class,
            "roleId",
            "cascade"
            });
        relationMap.get("LCAPRole").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPRolePerMappingMapper.class,
            "roleId",
            "cascade"
            });
        relationMap.get("LCAPRole").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPDataPermissionMapper.class,
            "roleId",
            "cascade"
            });
        relationMap.put("LCAPPermission", new ArrayList<>());
        relationMap.get("LCAPPermission").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPPerResMappingMapper.class,
            "permissionId",
            "cascade"
            });
        relationMap.get("LCAPPermission").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.LCAPRolePerMappingMapper.class,
            "permissionId",
            "cascade"
            });
        relationMap.put("CoffeeEntity", new ArrayList<>());
        relationMap.get("CoffeeEntity").add(new Object[]{
            "id",
            com.jystudy.coffee0528.repository.entities.CoffeeOrderMappingEntityMapper.class,
            "coffeeId",
            "protect"
            });
        relationMap.put("LCAPDepartment", new ArrayList<>());
        relationMap.get("LCAPDepartment").add(new Object[]{
            "deptId",
            com.jystudy.coffee0528.repository.entities.LCAPUserDeptMappingMapper.class,
            "deptId",
            "cascade"
            });
    }

    @Transactional(rollbackFor = Exception.class)
    public void onDelete(Object entity) {
        try {
            if (relationMap.containsKey(entity.getClass().getSimpleName())) {
                for (Object[] relationPayload : relationMap.get(entity.getClass().getSimpleName())) {
                    String beRefProperty = (String)relationPayload[INDEX_BEREF_PROPERTY];
                    PropertyDescriptor propertyDescriptor = BeanUtils.getPropertyDescriptor(entity.getClass(), beRefProperty);
                    Object propertyVal = propertyDescriptor.getReadMethod().invoke(entity);

                    Class<ReferenceHandleMapper> refEntityMapperClass = (Class<ReferenceHandleMapper>) relationPayload[INDEX_REF_ENTITY_MAPPER_CLASS];
                    String refProperty = (String)relationPayload[INDEX_REF_PROPERTY];
                    ReferenceHandleMapper refEntityMapper = SpringUtils.getBean(refEntityMapperClass);

                    String delRule = (String) relationPayload[INDEX_DEL_RULE];
                    if ("cascade".equals(delRule)) {
                        LOGGER.info("cascade delete entity: {}, property {} = {}",
                            entity.getClass().getSimpleName(), refProperty, propertyVal);
                        refEntityMapper.deleteReference(refProperty, propertyVal);
                    } else if ("protect".equals(delRule)) {
                        Long affect = refEntityMapper.existReference(refProperty, propertyVal);
                        if (affect != null && affect > 0) {
                            throw new HttpCodeException(400, ErrorCodeEnum.RELATION_PROTECT.code);
                        }
                    }
                }
            }
        } catch (HttpCodeException ex) {
            throw ex;
        } catch(Exception e) {
            throw new HttpCodeException(400, "error: " + e.getMessage());
        }
    }
}