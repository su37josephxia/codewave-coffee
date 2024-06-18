package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.repository.LCAPLoadDeptAddUserSelectCustomizeServiceMapper; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPLoadDeptAddUserSelectCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadDeptAddUserSelectCustomizeServiceMapper lCAPLoadDeptAddUserSelectCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 lCAPLoadDeptAddUserSelect(Long page, Long size, String deptId, String search) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_47C167E7217746A55100F50A57F637C0> searchList = new ArrayList<>();
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632 result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632();
        searchList = lCAPLoadDeptAddUserSelectCustomizeServiceMapper.getAnonymousStructure_47C167E7217746A55100F50A57F637C0(search, deptId); 
        if (CommonFunctionUtil.hasValue(searchList)) {
            result = CommonFunctionUtil.paginateList(CommonFunctionUtil.listDistinctBy(searchList, CommonFunctionUtil.newWithInitiation(new ArrayList<>(), _list621 -> {
    _list621.add((item) -> item.lCAPUser.id);
} )), page, size, com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_90BB04F104917B26166C550B4A1B0632.class); 
        } else {
        } 

        return result;
    } 


}
