package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD {

    public CoffeeCategoryEntity coffeeCategory;
    public CoffeeCategoryEntity getCoffeeCategory() {
        return coffeeCategory;
    } 

    public void setCoffeeCategory(CoffeeCategoryEntity coffeeCategory) {
        this.coffeeCategory = coffeeCategory; 
    } 


}
