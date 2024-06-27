package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.repository.LCAPGetChildDeptsCustomizeServiceMapper; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetChildDeptsCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetChildDeptsCustomizeServiceMapper lCAPGetChildDeptsCustomizeServiceMapper;
    public com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0897AFAA83AFC224C278930E426A5B0C lCAPGetChildDepts(String deptId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FF3D47421C85AD91C2FDAE6821984202> childDeptList = new ArrayList<>();
        com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0897AFAA83AFC224C278930E426A5B0C result = new com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0897AFAA83AFC224C278930E426A5B0C();
        if (CommonFunctionUtil.hasValue(deptId)) {
            childDeptList = lCAPGetChildDeptsCustomizeServiceMapper.getAnonymousStructure_FF3D47421C85AD91C2FDAE6821984202(deptId); 
            if ((CommonFunctionUtil.length(childDeptList).compareTo(0L) > 0)) {
                result = CommonFunctionUtil.createListPage(CommonFunctionUtil.listTransform(childDeptList, (item) -> item.lCAPDepartment), CommonFunctionUtil.length(childDeptList), com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0897AFAA83AFC224C278930E426A5B0C.class); 
            } else {
            } 

        } else {
        } 

        return result;
    } 


}
