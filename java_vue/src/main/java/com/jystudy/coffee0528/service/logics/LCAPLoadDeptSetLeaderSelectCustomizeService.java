package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.repository.LCAPLoadDeptSetLeaderSelectCustomizeServiceMapper; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPLoadDeptSetLeaderSelectCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPLoadDeptSetLeaderSelectCustomizeServiceMapper lCAPLoadDeptSetLeaderSelectCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C477D5E68C0A882A877BCEEA4EA2DE1E lCAPLoadDeptSetLeaderSelect(Long page, Long size, String deptId, String filter) {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C477D5E68C0A882A877BCEEA4EA2DE1E result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C477D5E68C0A882A877BCEEA4EA2DE1E();
        result = CommonFunctionUtil.createListPage(lCAPLoadDeptSetLeaderSelectCustomizeServiceMapper.getAnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA(filter, page, size, deptId), lCAPLoadDeptSetLeaderSelectCustomizeServiceMapper.countAnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA(filter, page, size, deptId).intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C477D5E68C0A882A877BCEEA4EA2DE1E.class); 
        return result;
    } 


}
