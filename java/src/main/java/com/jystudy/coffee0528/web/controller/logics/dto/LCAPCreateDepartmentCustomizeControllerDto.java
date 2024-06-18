package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 

public class LCAPCreateDepartmentCustomizeControllerDto {

    public LCAPDepartment department;
    public LCAPDepartment getDepartment() {
        return department;
    } 

    public void setDepartment(LCAPDepartment department) {
        this.department = department; 
    } 


}
