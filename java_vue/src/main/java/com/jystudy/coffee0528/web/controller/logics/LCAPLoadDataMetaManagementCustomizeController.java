package com.jystudy.coffee0528.web.controller.logics; 

import org.springframework.web.bind.annotation.RestController; 
import java.util.List; 
import com.jystudy.coffee0528.web.controller.logics.dto.LCAPLoadDataMetaManagementCustomizeControllerDto; 
import com.jystudy.coffee0528.web.validation.Validation; 
import com.jystudy.coffee0528.domain.structure.LCAPDataMetaStructureStructure; 
import com.jystudy.coffee0528.web.ApiReturn; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.springframework.web.bind.annotation.PostMapping; 
import org.springframework.web.bind.annotation.RequestBody; 
import com.jystudy.coffee0528.web.validation.ValidationRuleGroup; 
import com.jystudy.coffee0528.service.logics.LCAPLoadDataMetaManagementCustomizeService; 

@RestController
public class LCAPLoadDataMetaManagementCustomizeController {

    @Autowired
    private LCAPLoadDataMetaManagementCustomizeService lCAPLoadDataMetaManagementCustomizeService;
    @Validation(value = { @ValidationRuleGroup(value = "4b77ebac087f4872a2c0707bb0991d56",rules = { }),@ValidationRuleGroup(value = "070c8f72fa8b4014b217cffdd7ada007",rules = { }),@ValidationRuleGroup(value = "af38c174157e41739303022094ade6f6",rules = { })})
    @PostMapping("/api/lcplogics/LCAPLoadDataMetaManagement")
    public ApiReturn<List<LCAPDataMetaStructureStructure>> lCAPLoadDataMetaManagement(@RequestBody LCAPLoadDataMetaManagementCustomizeControllerDto body) throws Exception {
        return ApiReturn.of(lCAPLoadDataMetaManagementCustomizeService.lCAPLoadDataMetaManagement(body.getDataType(), body.getSearch()));
    } 


}
