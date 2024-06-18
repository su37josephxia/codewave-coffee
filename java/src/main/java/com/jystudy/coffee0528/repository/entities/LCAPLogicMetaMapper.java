package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPLogicMeta;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPLogicMeta Mapper
*
* @author sys
*/
public interface LCAPLogicMetaMapper extends ReferenceHandleMapper {

    int insert(LCAPLogicMeta bean);
    int batchInsert(List<LCAPLogicMeta> beans);
    List<LCAPLogicMeta> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPLogicMeta bean, List<String> updateFields);
    int batchUpdate(List<LCAPLogicMeta> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPLogicMeta selectOne(Long id);

    int createOrUpdate(LCAPLogicMeta bean);
    int updateBy(LCAPLogicMeta bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}