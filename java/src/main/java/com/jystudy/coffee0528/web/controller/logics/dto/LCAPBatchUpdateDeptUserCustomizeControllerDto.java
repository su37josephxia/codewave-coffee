package com.jystudy.coffee0528.web.controller.logics.dto; 

import java.util.List; 

public class LCAPBatchUpdateDeptUserCustomizeControllerDto {

    public String oldDeptId;
    public List<String> userIds;
    public String deptId;
    public String getOldDeptId() {
        return oldDeptId;
    } 

    public void setOldDeptId(String oldDeptId) {
        this.oldDeptId = oldDeptId; 
    } 

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
