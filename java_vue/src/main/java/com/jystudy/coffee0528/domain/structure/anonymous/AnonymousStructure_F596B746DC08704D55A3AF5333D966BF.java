package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPLogicMeta; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_F596B746DC08704D55A3AF5333D966BF {

    public LCAPLogicMeta lCAPLogicMeta;
    public LCAPLogicMeta getLCAPLogicMeta() {
        return lCAPLogicMeta;
    } 

    public void setLCAPLogicMeta(LCAPLogicMeta lCAPLogicMeta) {
        this.lCAPLogicMeta = lCAPLogicMeta; 
    } 


}
