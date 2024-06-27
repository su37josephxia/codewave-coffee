package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.CoffeeEntity; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_0517296F15B1AE1BB362F7F8705A16CD {

    public CoffeeEntity coffee;
    public CoffeeEntity getCoffee() {
        return coffee;
    } 

    public void setCoffee(CoffeeEntity coffee) {
        this.coffee = coffee; 
    } 


}
