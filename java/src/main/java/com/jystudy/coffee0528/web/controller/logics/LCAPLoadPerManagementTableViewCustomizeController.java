package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.service.logics.LCAPLoadPerManagementTableViewCustomizeService; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadPerManagementTableViewCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.domain.structure.LCAPGetPerResultStructure; 

@RestController
public class LCAPLoadPerManagementTableViewCustomizeController {

    @Autowired
    private LCAPLoadPerManagementTableViewCustomizeService lCAPLoadPerManagementTableViewCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "fd0fbcd04dc54cb7b9f9b405d447d770",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadPerManagementTableView")
    public ApiReturn<List<LCAPGetPerResultStructure>> lCAPLoadPerManagementTableView(@RequestBody LCAPLoadPerManagementTableViewCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadPerManagementTableViewCustomizeService.lCAPLoadPerManagementTableView(body.getFilter()));
    } 


}
