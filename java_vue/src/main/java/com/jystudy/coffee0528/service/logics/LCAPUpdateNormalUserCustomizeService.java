package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.service.entities.LCAPUserService; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Arrays; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.context.UserContext; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPUpdateNormalUserCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPUserService lCAPUserService;
    public void lCAPUpdateNormalUser(LCAPUser user, Boolean isChange) {
        if (isChange) {
            user.password = UserContext.encryptPassword(user.password); 
        } else {
        } 

        if ((CommonFunctionUtil.length(user.password).compareTo(13L) < 0)) {
            user.password = UserContext.encryptPassword(user.password); 
        } else {
        } 

        lCAPUserService.update(user, Arrays.asList("id", "userName", "password", "phone", "email", "displayName", "status", "source", "directLeaderId"));
        return ;
    } 


}
