package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPPermission;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPPermission Mapper
*
* @author sys
*/
public interface LCAPPermissionMapper extends ReferenceHandleMapper {

    int insert(LCAPPermission bean);
    int batchInsert(List<LCAPPermission> beans);
    List<LCAPPermission> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPPermission bean, List<String> updateFields);
    int batchUpdate(List<LCAPPermission> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPPermission selectOne(Long id);

    int createOrUpdate(LCAPPermission bean);
    int updateBy(LCAPPermission bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}