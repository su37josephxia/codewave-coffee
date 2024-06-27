package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 
import com.jystudy.coffee0528.service.entities.LCAPDepartmentService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPCreateDepartmentCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPDepartmentService lCAPDepartmentService;
    public void lCAPCreateDepartment(LCAPDepartment department) {
        if ((!CommonFunctionUtil.hasValue(department.id))) {
            lCAPDepartmentService.create(department);
        } else {
        } 

        return ;
    } 


}
