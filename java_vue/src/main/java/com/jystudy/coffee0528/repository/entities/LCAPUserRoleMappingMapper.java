package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPUserRoleMapping;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPUserRoleMapping Mapper
*
* @author sys
*/
public interface LCAPUserRoleMappingMapper extends ReferenceHandleMapper {

    int insert(LCAPUserRoleMapping bean);
    int batchInsert(List<LCAPUserRoleMapping> beans);
    List<LCAPUserRoleMapping> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPUserRoleMapping bean, List<String> updateFields);
    int batchUpdate(List<LCAPUserRoleMapping> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPUserRoleMapping selectOne(Long id);

    int createOrUpdate(LCAPUserRoleMapping bean);
    int updateBy(LCAPUserRoleMapping bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}