package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import com.jystudy.coffee0528.repository.LCAPLoadAddRoleUserTableViewCustomizeServiceMapper; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPLoadAddRoleUserTableViewCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadAddRoleUserTableViewCustomizeServiceMapper lCAPLoadAddRoleUserTableViewCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 lCAPLoadAddRoleUserTableView(List<String> userIdList) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632();
        result = CommonFunctionUtil.createListPage(lCAPLoadAddRoleUserTableViewCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(userIdList), lCAPLoadAddRoleUserTableViewCustomizeServiceMapper.countAnonymousStructure_47C167E7217746A55100F50A57F637C0(userIdList).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632.class); 
        return result;
    } 


}
