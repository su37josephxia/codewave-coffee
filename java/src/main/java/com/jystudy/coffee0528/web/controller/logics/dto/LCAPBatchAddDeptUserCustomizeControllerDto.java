package com.jystudy.coffee0528.web.controller.logics.dto; 

import java.util.List; 

public class LCAPBatchAddDeptUserCustomizeControllerDto {

    public List<String> userIds;
    public String deptId;
    public List<String> getUserIds() {
        return userIds;
    } 

    public void setUserIds(List<String> userIds) {
        this.userIds = userIds; 
    } 

    public String getDeptId() {
        return deptId;
    } 

    public void setDeptId(String deptId) {
        this.deptId = deptId; 
    } 


}
