package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPEntityMeta; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC {

    public LCAPEntityMeta lCAPEntityMeta;
    public LCAPEntityMeta getLCAPEntityMeta() {
        return lCAPEntityMeta;
    } 

    public void setLCAPEntityMeta(LCAPEntityMeta lCAPEntityMeta) {
        this.lCAPEntityMeta = lCAPEntityMeta; 
    } 


}
