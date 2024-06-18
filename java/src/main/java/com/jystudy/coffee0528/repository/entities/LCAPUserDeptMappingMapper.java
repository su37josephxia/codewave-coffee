package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPUserDeptMapping Mapper
*
* @author sys
*/
public interface LCAPUserDeptMappingMapper extends ReferenceHandleMapper {

    int insert(LCAPUserDeptMapping bean);
    int batchInsert(List<LCAPUserDeptMapping> beans);
    List<LCAPUserDeptMapping> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPUserDeptMapping bean, List<String> updateFields);
    int batchUpdate(List<LCAPUserDeptMapping> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPUserDeptMapping selectOne(Long id);

    int createOrUpdate(LCAPUserDeptMapping bean);
    int updateBy(LCAPUserDeptMapping bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}