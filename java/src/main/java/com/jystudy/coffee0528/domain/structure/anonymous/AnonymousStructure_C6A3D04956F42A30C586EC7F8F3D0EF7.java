package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7 {

    public LCAPUser lCAPUser;
    public LCAPUserDeptMapping lCAPUserDeptMapping;
    public LCAPDepartment lCAPDepartment;
    public LCAPUser getLCAPUser() {
        return lCAPUser;
    } 

    public void setLCAPUser(LCAPUser lCAPUser) {
        this.lCAPUser = lCAPUser; 
    } 

    public LCAPUserDeptMapping getLCAPUserDeptMapping() {
        return lCAPUserDeptMapping;
    } 

    public void setLCAPUserDeptMapping(LCAPUserDeptMapping lCAPUserDeptMapping) {
        this.lCAPUserDeptMapping = lCAPUserDeptMapping; 
    } 

    public LCAPDepartment getLCAPDepartment() {
        return lCAPDepartment;
    } 

    public void setLCAPDepartment(LCAPDepartment lCAPDepartment) {
        this.lCAPDepartment = lCAPDepartment; 
    } 


}
