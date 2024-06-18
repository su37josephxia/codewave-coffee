package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.CoffeeEntity; 
import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_3177427AE9FE919421E083B9B8414DE0 {

    public CoffeeEntity coffee;
    public CoffeeCategoryEntity coffeeCategory;
    public CoffeeEntity getCoffee() {
        return coffee;
    } 

    public void setCoffee(CoffeeEntity coffee) {
        this.coffee = coffee; 
    } 

    public CoffeeCategoryEntity getCoffeeCategory() {
        return coffeeCategory;
    } 

    public void setCoffeeCategory(CoffeeCategoryEntity coffeeCategory) {
        this.coffeeCategory = coffeeCategory; 
    } 


}
