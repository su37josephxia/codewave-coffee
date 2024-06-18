package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.LCAPUser; 

public class LCAPCreateNormalUserCustomizeControllerDto {

    public LCAPUser user;
    public LCAPUser getUser() {
        return user;
    } 

    public void setUser(LCAPUser user) {
        this.user = user; 
    } 


}
