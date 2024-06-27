package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPRolePerMapping;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPRolePerMapping Mapper
*
* @author sys
*/
public interface LCAPRolePerMappingMapper extends ReferenceHandleMapper {

    int insert(LCAPRolePerMapping bean);
    int batchInsert(List<LCAPRolePerMapping> beans);
    List<LCAPRolePerMapping> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPRolePerMapping bean, List<String> updateFields);
    int batchUpdate(List<LCAPRolePerMapping> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPRolePerMapping selectOne(Long id);

    int createOrUpdate(LCAPRolePerMapping bean);
    int updateBy(LCAPRolePerMapping bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}