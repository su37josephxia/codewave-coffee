package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPColumnRule Mapper
*
* @author sys
*/
public interface LCAPColumnRuleMapper extends ReferenceHandleMapper {

    int insert(LCAPColumnRule bean);
    int batchInsert(List<LCAPColumnRule> beans);
    List<LCAPColumnRule> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPColumnRule bean, List<String> updateFields);
    int batchUpdate(List<LCAPColumnRule> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPColumnRule selectOne(Long id);

    int createOrUpdate(LCAPColumnRule bean);
    int updateBy(LCAPColumnRule bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}