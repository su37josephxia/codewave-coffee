package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.LCAPPermissionAndResourceStructure; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetPermissionResourseNotRelatedCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPGetPermissionResourseNotRelatedCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetPermissionResourseNotRelatedCustomizeController {

    @Autowired
    private LCAPGetPermissionResourseNotRelatedCustomizeService lCAPGetPermissionResourseNotRelatedCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "d75b3d2592074925adf232982eb1611d",rules = { }),@ValidationRuleGroup(value = "75b5a3c41a9f4b97955ea1e45bda344c",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetPermissionResourseNotRelated")
    public ApiReturn<List<LCAPPermissionAndResourceStructure>> lCAPGetPermissionResourseNotRelated(@RequestBody LCAPGetPermissionResourseNotRelatedCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetPermissionResourseNotRelatedCustomizeService.lCAPGetPermissionResourseNotRelated(body.getPermissionId()));
    } 


}
