package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LoadOrderManagementTableView_1CustomizeService; 
import com.jystudy.coffee0528.web.controller.logics.dto.LoadOrderManagementTableView_1CustomizeControllerDto; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 

@RestController
public class LoadOrderManagementTableView_1CustomizeController {

    @Autowired
    private LoadOrderManagementTableView_1CustomizeService loadOrderManagementTableView_1CustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "a06c5dc9343649bdb9183f6873efa9d1",rules = { })})
    @PostMapping("/api/lcplogics/loadOrderManagementTableView_1")
    public ApiReturn<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9FB208EA1C4E02E48C213B1868701FD1> loadOrderManagementTableView_1(@RequestBody LoadOrderManagementTableView_1CustomizeControllerDto body) throws Exception {
        return ApiReturn.of(loadOrderManagementTableView_1CustomizeService.loadOrderManagementTableView_1(body.getPage(), body.getSize(), body.getSort(), body.getOrder(), body.getFilter()));
    } 


}
