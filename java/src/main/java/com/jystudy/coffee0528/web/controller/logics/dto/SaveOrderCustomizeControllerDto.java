package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.OrderEntityEntity; 

public class SaveOrderCustomizeControllerDto {

    public OrderEntityEntity order;
    public OrderEntityEntity getOrder() {
        return order;
    } 

    public void setOrder(OrderEntityEntity order) {
        this.order = order; 
    } 


}
