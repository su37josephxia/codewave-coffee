package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPRole; 
import com.jystudy.coffee0528.domain.entities.LCAPPermission; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPGetPerResultStructure {

    @Label("权限")
    public LCAPPermission lACPPermission;
    @Label("权限对应角色")
    public List<LCAPRole> roleList = new ArrayList<>();
    @Label("	 是否可编辑")
    public Boolean editable;
    public LCAPPermission getLACPPermission() {
        return lACPPermission;
    } 

    public void setLACPPermission(LCAPPermission lACPPermission) {
        this.lACPPermission = lACPPermission; 
    } 

    public List<LCAPRole> getRoleList() {
        return roleList;
    } 

    public void setRoleList(List<LCAPRole> roleList) {
        this.roleList = roleList; 
    } 

    public Boolean getEditable() {
        return editable;
    } 

    public void setEditable(Boolean editable) {
        this.editable = editable; 
    } 


}
