package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.OrderEntityEntity; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B {

    public OrderEntityEntity orderEntity;
    public OrderEntityEntity getOrderEntity() {
        return orderEntity;
    } 

    public void setOrderEntity(OrderEntityEntity orderEntity) {
        this.orderEntity = orderEntity; 
    } 


}
