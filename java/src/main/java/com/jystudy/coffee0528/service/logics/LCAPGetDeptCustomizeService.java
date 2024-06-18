package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.repository.LCAPGetDeptCustomizeServiceMapper; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetDeptCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetDeptCustomizeServiceMapper lCAPGetDeptCustomizeServiceMapper;
    public LCAPDepartment lCAPGetDept(String deptId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FF3D47421C85AD91C2FDAE6821984202> searchList = new ArrayList<>();
        LCAPDepartment result = new LCAPDepartment();
        if (CommonFunctionUtil.hasValue(deptId)) {
            searchList = lCAPGetDeptCustomizeServiceMapper.getAnonymousStructure_FF3D47421C85AD91C2FDAE6821984202(deptId); 
            if ((CommonFunctionUtil.length(searchList).compareTo(0L) > 0)) {
                result = CommonFunctionUtil.listHead(searchList).lCAPDepartment; 
            } else {
            } 

        } else {
        } 

        return result;
    } 


}
