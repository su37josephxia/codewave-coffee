package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPRowRuleItem;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPRowRuleItem Mapper
*
* @author sys
*/
public interface LCAPRowRuleItemMapper extends ReferenceHandleMapper {

    int insert(LCAPRowRuleItem bean);
    int batchInsert(List<LCAPRowRuleItem> beans);
    List<LCAPRowRuleItem> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPRowRuleItem bean, List<String> updateFields);
    int batchUpdate(List<LCAPRowRuleItem> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPRowRuleItem selectOne(Long id);

    int createOrUpdate(LCAPRowRuleItem bean);
    int updateBy(LCAPRowRuleItem bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}