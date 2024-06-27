package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.repository.LCAPGetLAllACPPermissionCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetLAllACPPermissionCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetLAllACPPermissionCustomizeServiceMapper lCAPGetLAllACPPermissionCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA lCAPGetLAllACPPermission() {
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA();
        result = CommonFunctionUtil.createListPage(lCAPGetLAllACPPermissionCustomizeServiceMapper.getAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(), lCAPGetLAllACPPermissionCustomizeServiceMapper.countAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD().intValue(), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_D5C9C5DD94C4E7386BEED9E75D0F06FA.class); 
        return result;
    } 


}
