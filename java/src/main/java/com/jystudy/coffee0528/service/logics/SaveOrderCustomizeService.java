package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.service.entities.CoffeeOrderMappingEntityService; 
import java.util.ArrayList; 
import com.jystudy.coffee0528.service.entities.OrderEntityEntityService; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.CoffeeOrderMappingEntity; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.domain.entities.OrderEntityEntity; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class SaveOrderCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private OrderEntityEntityService orderEntityEntityService;
    @Autowired
    private CoffeeOrderMappingEntityService coffeeOrderMappingEntityService;
    public Boolean saveOrder(OrderEntityEntity order) {
        LambdaParamWrapper<OrderEntityEntity> orderWrapper = new LambdaParamWrapper<>(order);
        LambdaParamWrapper<OrderEntityEntity> createOrderResult = new LambdaParamWrapper<>(new OrderEntityEntity());
        List<CoffeeOrderMappingEntity> coffeeOrderMappingList = new ArrayList<>();
        List<CoffeeOrderMappingEntity> createMappingResult = new ArrayList<>();
        Boolean result = false;
        if (CommonFunctionUtil.hasValue(orderWrapper.param)) {
            createOrderResult.param = orderEntityEntityService.create(orderWrapper.param); 
            if (CommonFunctionUtil.hasValue(createOrderResult.param.id)) {
                coffeeOrderMappingList = CommonFunctionUtil.listTransform(orderWrapper.param.coffeeList, (item) -> CommonFunctionUtil.newWithInitiation(new CoffeeOrderMappingEntity(), _bean595 -> {
    _bean595.orderId = createOrderResult.param.id; 
    _bean595.coffeeId = item.coffee.id; 
    _bean595.coffeeQuantity = item.count; 
} )); 
                createMappingResult = coffeeOrderMappingEntityService.batchCreate(coffeeOrderMappingList); 
                if (CommonFunctionUtil.hasValue(createMappingResult)) {
                    result = true; 
                } else {
                } 

            } else {
            } 

        } else {
        } 

        return result;
    } 


}
