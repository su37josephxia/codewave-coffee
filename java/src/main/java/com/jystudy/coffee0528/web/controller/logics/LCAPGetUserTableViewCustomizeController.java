package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPGetUserTableViewCustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LCAPGetUserTableViewCustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LCAPGetUserTableViewCustomizeController {

    @Autowired
    private LCAPGetUserTableViewCustomizeService lCAPGetUserTableViewCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "ec256e2321d043a68b520559ee0e73bd",rules = { })})
    @PostMapping("/api/lcplogics/LCAPGetUserTableView")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_0C1B55E3C02BF7727EF75A634EA6CEA5> lCAPGetUserTableView(@RequestBody LCAPGetUserTableViewCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPGetUserTableViewCustomizeService.lCAPGetUserTableView(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
