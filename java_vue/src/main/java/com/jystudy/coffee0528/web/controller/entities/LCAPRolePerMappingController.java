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
import com.jystudy.coffee0528.domain.entities.LCAPRolePerMapping;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.LCAPRolePerMappingService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate LCAPRolePerMapping controller
*
* @author sys
*/
@RestController
public class LCAPRolePerMappingController {
    @Resource
    private LCAPRolePerMappingService service;

    /**
    * auto gen batch create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "05bba6b8-bb9c-4874-b5de-85e80de8f3a9",rules = { })})
    @PostMapping("/api/l-c-a-p-role-per-mapping/batch")
    public ApiReturn<List<LCAPRolePerMapping>> batchCreate(@RequestBody List<LCAPRolePerMapping> body) {
        return ApiReturn.of(service.batchCreate(body));
    }

    /**
    * auto gen delete method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "f04bdbc9-9850-492a-a4f2-fab508818e42",rules = { })})
    @DeleteMapping("/api/l-c-a-p-role-per-mapping")
    public ApiReturn<Long> delete( @RequestParam(required = true) Long id ) { 
        return ApiReturn.of(service.delete( id )); 
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/l-c-a-p-role-per-mapping/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}