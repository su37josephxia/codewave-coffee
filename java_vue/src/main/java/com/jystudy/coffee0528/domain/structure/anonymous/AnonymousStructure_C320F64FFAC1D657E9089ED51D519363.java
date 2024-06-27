package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPRowRuleItem; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_C320F64FFAC1D657E9089ED51D519363 {

    public LCAPRowRuleItem lCAPRowRuleItem;
    public LCAPRowRuleItem getLCAPRowRuleItem() {
        return lCAPRowRuleItem;
    } 

    public void setLCAPRowRuleItem(LCAPRowRuleItem lCAPRowRuleItem) {
        this.lCAPRowRuleItem = lCAPRowRuleItem; 
    } 


}
