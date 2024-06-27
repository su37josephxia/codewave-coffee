package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.repository.LCAPLoadUserManagementSelectCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPLoadUserManagementSelectCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadUserManagementSelectCustomizeServiceMapper lCAPLoadUserManagementSelectCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 lCAPLoadUserManagementSelect(Long page, Long size, String userId, String name) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632();
        if (CommonFunctionUtil.hasValue(userId)) {
            result = CommonFunctionUtil.createListPage(lCAPLoadUserManagementSelectCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(page, size, name, userId), lCAPLoadUserManagementSelectCustomizeServiceMapper.countAnonymousStructure_47C167E7217746A55100F50A57F637C0(page, size, name, userId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632.class); 
        } else {
            result = CommonFunctionUtil.createListPage(lCAPLoadUserManagementSelectCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C01(page, size, name), lCAPLoadUserManagementSelectCustomizeServiceMapper.countAnonymousStructure_47C167E7217746A55100F50A57F637C01(page, size, name).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632.class); 
        } 

        return result;
    } 


}
