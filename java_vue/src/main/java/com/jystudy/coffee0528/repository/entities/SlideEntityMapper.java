package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.SlideEntity;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate SlideEntity Mapper
*
* @author sys
*/
public interface SlideEntityMapper extends ReferenceHandleMapper {

    int insert(SlideEntity bean);
    int batchInsert(List<SlideEntity> beans);
    List<SlideEntity> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(SlideEntity bean, List<String> updateFields);
    int batchUpdate(List<SlideEntity> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    SlideEntity selectOne(Long id);

    int createOrUpdate(SlideEntity bean);
    int updateBy(SlideEntity bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}