package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.repository.LCAPGetSecondParentDeptCustomizeServiceMapper; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetSecondParentDeptCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetSecondParentDeptCustomizeServiceMapper lCAPGetSecondParentDeptCustomizeServiceMapper;
    public LCAPDepartment lCAPGetSecondParentDept(String deptId, String oldDeptId) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_FF3D47421C85AD91C2FDAE6821984202> searchList = new ArrayList<>();
        LCAPDepartment dept = new LCAPDepartment();
        LCAPDepartment result = new LCAPDepartment();
        if (CommonFunctionUtil.hasValue(deptId)) {
            searchList = lCAPGetSecondParentDeptCustomizeServiceMapper.getAnonymousStructure_FF3D47421C85AD91C2FDAE6821984202(deptId); 
            if ((CommonFunctionUtil.length(searchList).compareTo(0L) > 0)) {
                dept = CommonFunctionUtil.listHead(searchList).lCAPDepartment; 
                while ((CommonFunctionUtil.notEquals(dept.parentDeptId, oldDeptId))) {
                    dept = this.lCAPGetSecondParentDept(dept.parentDeptId, oldDeptId); 
                } 

                result = dept; 
            } else {
            } 

        } else {
        } 

        return result;
    } 


}
