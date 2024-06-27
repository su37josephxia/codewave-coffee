package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.service.logics.LCAPGetDeptUsersCustomizeService; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetDeptUsersCustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetDeptUsersCustomizeController {

    @Autowired
    private LCAPGetDeptUsersCustomizeService lCAPGetDeptUsersCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "3ef2923042044677a425308ca949f6bc",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetDeptUsers")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C477D5E68C0A882A877BCEEA4EA2DE1E> lCAPGetDeptUsers(@RequestBody LCAPGetDeptUsersCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetDeptUsersCustomizeService.lCAPGetDeptUsers(body.getDeptId(), body.getPage(), body.getSize()));
    } 


}
