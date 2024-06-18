package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.domain.entities.LCAPRolePerMapping; 
import com.jystudy.coffee0528.domain.entities.LCAPRole; 
import com.jystudy.coffee0528.domain.entities.LCAPPermission; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335 {

    public LCAPPermission lCAPPermission;
    public LCAPRolePerMapping lCAPRolePerMapping;
    public LCAPRole lCAPRole;
    public LCAPPermission getLCAPPermission() {
        return lCAPPermission;
    } 

    public void setLCAPPermission(LCAPPermission lCAPPermission) {
        this.lCAPPermission = lCAPPermission; 
    } 

    public LCAPRolePerMapping getLCAPRolePerMapping() {
        return lCAPRolePerMapping;
    } 

    public void setLCAPRolePerMapping(LCAPRolePerMapping lCAPRolePerMapping) {
        this.lCAPRolePerMapping = lCAPRolePerMapping; 
    } 

    public LCAPRole getLCAPRole() {
        return lCAPRole;
    } 

    public void setLCAPRole(LCAPRole lCAPRole) {
        this.lCAPRole = lCAPRole; 
    } 


}
