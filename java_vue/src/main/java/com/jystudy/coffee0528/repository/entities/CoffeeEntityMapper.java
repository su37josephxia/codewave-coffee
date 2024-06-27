package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.CoffeeEntity;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate CoffeeEntity Mapper
*
* @author sys
*/
public interface CoffeeEntityMapper extends ReferenceHandleMapper {

    int insert(CoffeeEntity bean);
    int batchInsert(List<CoffeeEntity> beans);
    List<CoffeeEntity> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(CoffeeEntity bean, List<String> updateFields);
    int batchUpdate(List<CoffeeEntity> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    CoffeeEntity selectOne(Long id);

    int createOrUpdate(CoffeeEntity bean);
    int updateBy(CoffeeEntity bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}