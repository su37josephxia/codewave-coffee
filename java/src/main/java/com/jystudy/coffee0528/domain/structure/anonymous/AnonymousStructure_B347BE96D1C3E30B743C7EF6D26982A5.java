package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5 {

    public LCAPDataPermission lCAPDataPermission;
    public LCAPDataPermission getLCAPDataPermission() {
        return lCAPDataPermission;
    } 

    public void setLCAPDataPermission(LCAPDataPermission lCAPDataPermission) {
        this.lCAPDataPermission = lCAPDataPermission; 
    } 


}
