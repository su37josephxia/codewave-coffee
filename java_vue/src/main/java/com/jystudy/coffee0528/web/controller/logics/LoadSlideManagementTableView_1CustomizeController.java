package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LoadSlideManagementTableView_1CustomizeControllerDto; 
import com.jystudy.coffee0528.service.logics.LoadSlideManagementTableView_1CustomizeService; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadSlideManagementTableView_1CustomizeController {

    @Autowired
    private LoadSlideManagementTableView_1CustomizeService loadSlideManagementTableView_1CustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "d4b9f833be554de88ee1e343ef77ddb1",rules = { })})
    @PostMapping("/api/lcplogics/loadSlideManagementTableView_1")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6B6E31AAE799B197EE720D809BC38D27> loadSlideManagementTableView_1(@RequestBody LoadSlideManagementTableView_1CustomizeControllerDto body) throws Exception {
        return ApiReturn.of(loadSlideManagementTableView_1CustomizeService.loadSlideManagementTableView_1(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
