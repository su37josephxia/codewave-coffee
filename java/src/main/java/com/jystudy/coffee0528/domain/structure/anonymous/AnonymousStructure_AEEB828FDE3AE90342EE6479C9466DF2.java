package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2 {

    public LCAPUserDeptMapping lCAPUserDeptMapping;
    public LCAPUserDeptMapping getLCAPUserDeptMapping() {
        return lCAPUserDeptMapping;
    } 

    public void setLCAPUserDeptMapping(LCAPUserDeptMapping lCAPUserDeptMapping) {
        this.lCAPUserDeptMapping = lCAPUserDeptMapping; 
    } 


}
