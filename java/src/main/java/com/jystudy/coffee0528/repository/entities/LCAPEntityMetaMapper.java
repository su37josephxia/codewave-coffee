package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPEntityMeta;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPEntityMeta Mapper
*
* @author sys
*/
public interface LCAPEntityMetaMapper extends ReferenceHandleMapper {

    int insert(LCAPEntityMeta bean);
    int batchInsert(List<LCAPEntityMeta> beans);
    List<LCAPEntityMeta> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPEntityMeta bean, List<String> updateFields);
    int batchUpdate(List<LCAPEntityMeta> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPEntityMeta selectOne(Long id);

    int createOrUpdate(LCAPEntityMeta bean);
    int updateBy(LCAPEntityMeta bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}