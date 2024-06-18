package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPDataPermission Mapper
*
* @author sys
*/
public interface LCAPDataPermissionMapper extends ReferenceHandleMapper {

    int insert(LCAPDataPermission bean);
    int batchInsert(List<LCAPDataPermission> beans);
    List<LCAPDataPermission> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPDataPermission bean, List<String> updateFields);
    int batchUpdate(List<LCAPDataPermission> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPDataPermission selectOne(Long id);

    int createOrUpdate(LCAPDataPermission bean);
    int updateBy(LCAPDataPermission bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}