package com.jystudy.coffee0528.domain.structure; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import com.jystudy.coffee0528.annotation.Label; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class LCAPGetUserResultStructure {

    @Label("用户")
    public LCAPUser user;
    @Label("用户部门")
    public LCAPUserDeptMapping userDept;
    @Label("部门")
    public LCAPDepartment dept;
    @Label("直属主管")
    public String deptUser;
    public LCAPUser getUser() {
        return user;
    } 

    public void setUser(LCAPUser user) {
        this.user = user; 
    } 

    public LCAPUserDeptMapping getUserDept() {
        return userDept;
    } 

    public void setUserDept(LCAPUserDeptMapping userDept) {
        this.userDept = userDept; 
    } 

    public LCAPDepartment getDept() {
        return dept;
    } 

    public void setDept(LCAPDepartment dept) {
        this.dept = dept; 
    } 

    public String getDeptUser() {
        return deptUser;
    } 

    public void setDeptUser(String deptUser) {
        this.deptUser = deptUser; 
    } 


}
