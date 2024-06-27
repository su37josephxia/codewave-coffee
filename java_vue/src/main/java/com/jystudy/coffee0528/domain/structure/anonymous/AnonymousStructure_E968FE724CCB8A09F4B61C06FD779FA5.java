package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_E968FE724CCB8A09F4B61C06FD779FA5 {

    public LCAPColumnRule lCAPColumnRule;
    public LCAPColumnRule getLCAPColumnRule() {
        return lCAPColumnRule;
    } 

    public void setLCAPColumnRule(LCAPColumnRule lCAPColumnRule) {
        this.lCAPColumnRule = lCAPColumnRule; 
    } 


}
