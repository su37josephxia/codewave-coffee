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
import com.jystudy.coffee0528.domain.entities.LCAPColumnRule;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.LCAPColumnRuleService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate LCAPColumnRule controller
*
* @author sys
*/
@RestController
public class LCAPColumnRuleController {
    @Resource
    private LCAPColumnRuleService service;

    /**
    * auto gen batch create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "01f8d2bde9ab418bad31765125dd71ac",rules = { }),@ValidationRuleGroup(value = "150d119f8741415eb3a164171d39ab6b",rules = { })})
    @PostMapping("/api/l-c-a-p-column-rule/batch")
    public ApiReturn<List<LCAPColumnRule>> batchCreate(@RequestBody List<LCAPColumnRule> body) {
        return ApiReturn.of(service.batchCreate(body));
    }

    /**
    * auto gen batch update method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "7947e4467e254c5ea208e18ea77ccc9c",rules = { })})
    @PutMapping("/api/l-c-a-p-column-rule/batch")
    public ApiReturn<List<LCAPColumnRule>> batchUpdate(@RequestBody EntityFilter filter) {
        if (filter == null || filter.getEntities() == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, "");
        }
        List<String> updateFields = filter.getProperties();
        List<LCAPColumnRule> entities = new ArrayList<>();
        for (Map map : filter.getEntities()) {
            entities.add(JacksonUtils.fromJson(map, LCAPColumnRule.class));
        }
        return ApiReturn.of(service.batchUpdate(entities, updateFields));
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/l-c-a-p-column-rule/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}