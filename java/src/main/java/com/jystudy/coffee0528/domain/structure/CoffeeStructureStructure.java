package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 
import com.jystudy.coffee0528.domain.entities.CoffeeEntity; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class CoffeeStructureStructure {

    @Label("咖啡")
    public CoffeeEntity coffee;
    @Label("数量")
    public Long count;
    public CoffeeEntity getCoffee() {
        return coffee;
    } 

    public void setCoffee(CoffeeEntity coffee) {
        this.coffee = coffee; 
    } 

    public Long getCount() {
        return count;
    } 

    public void setCount(Long count) {
        this.count = count; 
    } 


}
