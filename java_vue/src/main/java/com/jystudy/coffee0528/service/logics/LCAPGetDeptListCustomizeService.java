package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.repository.LCAPGetDeptListCustomizeServiceMapper; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetDeptListCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetDeptListCustomizeServiceMapper lCAPGetDeptListCustomizeServiceMapper;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FF3D47421C85AD91C2FDAE6821984202> lCAPGetDeptList() {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FF3D47421C85AD91C2FDAE6821984202> result = new ArrayList<>();
        result = lCAPGetDeptListCustomizeServiceMapper.getAnonymousStructure_FF3D47421C85AD91C2FDAE6821984202(); 
        return result;
    } 


}
