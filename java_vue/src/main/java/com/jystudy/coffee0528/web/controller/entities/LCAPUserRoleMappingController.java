package com.jystudy.coffee0528.web.controller.entities;

import java.io.Serializable;
import java.util.stream.Collectors;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Arrays;
import java.math.BigDecimal;
import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.http.*;

import com.jystudy.coffee0528.exception.HttpCodeException;
import com.jystudy.coffee0528.domain.entities.LCAPUserRoleMapping;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.LCAPUserRoleMappingService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate LCAPUserRoleMapping controller
*
* @author sys
*/
@RestController
public class LCAPUserRoleMappingController {
    @Resource
    private LCAPUserRoleMappingService service;

    /**
    * auto gen batch create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "7c5920f4-35bf-4b24-a1ba-b25ae67a0cd5",rules = { })})
    @PostMapping("/api/l-c-a-p-user-role-mapping/batch")
    public ApiReturn<List<LCAPUserRoleMapping>> batchCreate(@RequestBody List<LCAPUserRoleMapping> body) {
        return ApiReturn.of(service.batchCreate(body));
    }

    /**
    * auto gen delete method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "f0e585c7-45e1-4589-b5c5-bc0834002a28",rules = { })})
    @DeleteMapping("/api/l-c-a-p-user-role-mapping")
    public ApiReturn<Long> delete( @RequestParam(required = true) Long id ) { 
        return ApiReturn.of(service.delete( id )); 
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/l-c-a-p-user-role-mapping/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}