package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 

public class LCAPUpdateDepartmentCustomizeControllerDto {

    public String oldDeptId;
    public String oldParentDeptId;
    public LCAPDepartment department;
    public String getOldDeptId() {
        return oldDeptId;
    } 

    public void setOldDeptId(String oldDeptId) {
        this.oldDeptId = oldDeptId; 
    } 

    public String getOldParentDeptId() {
        return oldParentDeptId;
    } 

    public void setOldParentDeptId(String oldParentDeptId) {
        this.oldParentDeptId = oldParentDeptId; 
    } 

    public LCAPDepartment getDepartment() {
        return department;
    } 

    public void setDepartment(LCAPDepartment department) {
        this.department = department; 
    } 


}
