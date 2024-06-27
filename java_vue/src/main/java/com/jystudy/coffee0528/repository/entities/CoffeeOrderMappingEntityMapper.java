package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.CoffeeOrderMappingEntity;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate CoffeeOrderMappingEntity Mapper
*
* @author sys
*/
public interface CoffeeOrderMappingEntityMapper extends ReferenceHandleMapper {

    int insert(CoffeeOrderMappingEntity bean);
    int batchInsert(List<CoffeeOrderMappingEntity> beans);
    List<CoffeeOrderMappingEntity> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(CoffeeOrderMappingEntity bean, List<String> updateFields);
    int batchUpdate(List<CoffeeOrderMappingEntity> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    CoffeeOrderMappingEntity selectOne(Long id);

    int createOrUpdate(CoffeeOrderMappingEntity bean);
    int updateBy(CoffeeOrderMappingEntity bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}