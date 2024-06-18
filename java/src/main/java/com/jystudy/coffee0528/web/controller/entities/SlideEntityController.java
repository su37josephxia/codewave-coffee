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
import com.jystudy.coffee0528.domain.entities.SlideEntity;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.SlideEntityService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate SlideEntity controller
*
* @author sys
*/
@RestController
public class SlideEntityController {
    @Resource
    private SlideEntityService service;

    /**
    * auto gen create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "e1deaeebe1464a3ba1f94613404e1206",rules = { @ValidationRule(value = "maxLength",targetName = "body.slideImage",argvs = "{\"max\":4000}"),@ValidationRule(value = "required",targetName = "body.slideImage",argvs = ""),@ValidationRule(value = "required",targetName = "body.displayOrder",argvs = ""),@ValidationRule(value = "required",targetName = "body.isDisplay",argvs = "")})})
    @PostMapping("/api/slide")
    public ApiReturn<SlideEntity> create(@RequestBody SlideEntity body) {
        return ApiReturn.of(service.create(body));
    }

    /**
    * auto gen update method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "787cd59f5faa4f46881d7f4ce17e17a9",rules = { @ValidationRule(value = "maxLength",targetName = "filter.entity.slideImage",argvs = "{\"max\":4000}"),@ValidationRule(value = "required",targetName = "filter.entity.slideImage",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.displayOrder",argvs = ""),@ValidationRule(value = "required",targetName = "filter.entity.isDisplay",argvs = "")})})
    @PutMapping("/api/slide")
    public ApiReturn<SlideEntity> update(@RequestBody EntityFilter filter) {
        if (filter == null || filter.getEntity() == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, "");
        }
        Map map = filter.getEntity();
        SlideEntity entity = JacksonUtils.fromJson(map, SlideEntity.class);
        List<String> updateFields = filter.getProperties();
        return ApiReturn.of(service.update(entity, updateFields));
    }

    /**
    * auto gen delete method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "0b05170c54d04b5aa4b22f44829d34bc",rules = { })})
    @DeleteMapping("/api/slide")
    public ApiReturn<Long> delete( @RequestParam(required = true) Long id ) { 
        return ApiReturn.of(service.delete( id )); 
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/slide/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}