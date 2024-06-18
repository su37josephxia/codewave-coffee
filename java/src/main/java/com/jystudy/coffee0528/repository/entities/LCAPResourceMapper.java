package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.LCAPResource;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate LCAPResource Mapper
*
* @author sys
*/
public interface LCAPResourceMapper extends ReferenceHandleMapper {

    int insert(LCAPResource bean);
    int batchInsert(List<LCAPResource> beans);
    List<LCAPResource> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(LCAPResource bean, List<String> updateFields);
    int batchUpdate(List<LCAPResource> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    LCAPResource selectOne(Long id);

    int createOrUpdate(LCAPResource bean);
    int updateBy(LCAPResource bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}