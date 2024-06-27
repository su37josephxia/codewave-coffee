package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.repository.LCAPGetUserNameByUserIdCustomizeServiceMapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetUserNameByUserIdCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetUserNameByUserIdCustomizeServiceMapper lCAPGetUserNameByUserIdCustomizeServiceMapper;
    public String lCAPGetUserNameByUserId(String userId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_47C167E7217746A55100F50A57F637C0> search = new ArrayList<>();
        String result = "";
        search = lCAPGetUserNameByUserIdCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(userId); 
        if (CommonFunctionUtil.hasValue(search)) {
            result = CommonFunctionUtil.listHead(search).lCAPUser.userName; 
        } else {
        } 

        return result;
    } 


}
