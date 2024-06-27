package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.GlobalContext; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPGetUnderlingByUserNameCustomizeServiceMapper; 

@Service
public class LCAPGetUnderlingByUserNameCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetUnderlingByUserNameCustomizeServiceMapper lCAPGetUnderlingByUserNameCustomizeServiceMapper;
    public List<String> lCAPGetUnderlingByUserName() {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_47C167E7217746A55100F50A57F637C0> search = new ArrayList<>();
        List<String> result = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(GlobalContext.getSessionVariable().currentUser.userId)) {
            search = lCAPGetUnderlingByUserNameCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(GlobalContext.getSessionVariable().currentUser); 
            if (CommonFunctionUtil.hasValue(search)) {
                result = CommonFunctionUtil.listTransform(search, (item) -> item.lCAPUser.userName); 
            } else {
                result = CommonFunctionUtil.New(List.class); 
            } 

            CommonFunctionUtil.add(result, GlobalContext.getSessionVariable().currentUser.userName);
        } else {
            result = CommonFunctionUtil.New(List.class); 
        } 

        return result;
    } 


}
