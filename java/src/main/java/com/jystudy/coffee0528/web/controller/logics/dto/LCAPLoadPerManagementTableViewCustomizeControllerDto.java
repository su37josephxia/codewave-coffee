package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.LCAPPermission; 

public class LCAPLoadPerManagementTableViewCustomizeControllerDto {

    public LCAPPermission filter;
    public LCAPPermission getFilter() {
        return filter;
    } 

    public void setFilter(LCAPPermission filter) {
        this.filter = filter; 
    } 


}
