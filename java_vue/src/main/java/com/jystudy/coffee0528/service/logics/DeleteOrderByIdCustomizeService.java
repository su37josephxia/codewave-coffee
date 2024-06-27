package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.service.entities.CoffeeOrderMappingEntityService; 
import com.jystudy.coffee0528.service.entities.OrderEntityEntityService; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter; 
import com.jystudy.coffee0528.service.dto.filters.logic.binary.compare.EqualQueryFilter; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.dto.filters.atomic.IdentifierQueryFilter; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter.Property; 

@Service
public class DeleteOrderByIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private CoffeeOrderMappingEntityService coffeeOrderMappingEntityService;
    @Autowired
    private OrderEntityEntityService orderEntityEntityService;
    public void deleteOrderById(Long orderid) {
        coffeeOrderMappingEntityService.deleteBy(new EqualQueryFilter().left(new ColumnQueryFilter("", "", "orderId", "orderId", new ColumnQueryFilter.Property("", "orderId"))).right(new IdentifierQueryFilter("orderid", orderid)));
        orderEntityEntityService.delete(orderid);
        return ;
    } 


}
