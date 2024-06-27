package com.jystudy.coffee0528.repository.entities;

import java.io.Serializable;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.math.BigDecimal;
import java.math.BigDecimal;
import com.jystudy.coffee0528.domain.entities.OrderEntityEntity;
import com.jystudy.coffee0528.repository.ReferenceHandleMapper;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import org.apache.ibatis.annotations.Param;
/**
* auto generate OrderEntityEntity Mapper
*
* @author sys
*/
public interface OrderEntityEntityMapper extends ReferenceHandleMapper {

    int insert(OrderEntityEntity bean);
    int batchInsert(List<OrderEntityEntity> beans);
    List<OrderEntityEntity> selectList(@Param("filter") AbstractQueryFilter filter);
    int count(@Param("filter") AbstractQueryFilter filter);

    int update(OrderEntityEntity bean, List<String> updateFields);
    int batchUpdate(List<OrderEntityEntity> beans, List<String> updateFields);
    int delete(Long id);
    int batchDelete(List<Long> ids);
    OrderEntityEntity selectOne(Long id);

    int createOrUpdate(OrderEntityEntity bean);
    int updateBy(OrderEntityEntity bean, List<String> updateFields, AbstractQueryFilter filter);
    int deleteBy(@Param("filter") AbstractQueryFilter filter);

}