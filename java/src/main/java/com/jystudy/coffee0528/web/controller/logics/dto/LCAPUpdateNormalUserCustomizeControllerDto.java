package com.jystudy.coffee0528.web.controller.logics.dto; 

import com.jystudy.coffee0528.domain.entities.LCAPUser; 

public class LCAPUpdateNormalUserCustomizeControllerDto {

    public LCAPUser user;
    public Boolean isChange;
    public LCAPUser getUser() {
        return user;
    } 

    public void setUser(LCAPUser user) {
        this.user = user; 
    } 

    public Boolean getIsChange() {
        return isChange;
    } 

    public void setIsChange(Boolean isChange) {
        this.isChange = isChange; 
    } 


}
