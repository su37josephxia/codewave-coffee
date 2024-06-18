package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate CoffeeCategoryEntity Mapper
*
* @author sys
*/
public interface CoffeeCategoryEntityMapper extends ReferenceHandleMapper {

    int insert(CoffeeCategoryEntity bean);
    int batchInsert(List<CoffeeCategoryEntity> beans);
    List<CoffeeCategoryEntity> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(CoffeeCategoryEntity bean, List<String> updateFields);
    int batchUpdate(List<CoffeeCategoryEntity> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    CoffeeCategoryEntity selectOne(Long id);

    int createOrUpdate(CoffeeCategoryEntity bean);
    int updateBy(CoffeeCategoryEntity bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}