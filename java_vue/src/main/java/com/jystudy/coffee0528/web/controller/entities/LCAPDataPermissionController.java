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
import com.jystudy.coffee0528.domain.entities.LCAPDataPermission;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.LCAPDataPermissionService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate LCAPDataPermission controller
*
* @author sys
*/
@RestController
public class LCAPDataPermissionController {
    @Resource
    private LCAPDataPermissionService service;

    /**
    * auto gen create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "dc42dfdfda9348008faaae15ce56f44a",rules = { })})
    @PostMapping("/api/l-c-a-p-data-permission")
    public ApiReturn<LCAPDataPermission> create(@RequestBody LCAPDataPermission body) {
        return ApiReturn.of(service.create(body));
    }

    /**
    * auto gen update method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "f36dfabee1d24ce19b710d698d744ff6",rules = { })})
    @PutMapping("/api/l-c-a-p-data-permission")
    public ApiReturn<LCAPDataPermission> update(@RequestBody EntityFilter filter) {
        if (filter == null || filter.getEntity() == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, "");
        }
        Map map = filter.getEntity();
        LCAPDataPermission entity = JacksonUtils.fromJson(map, LCAPDataPermission.class);
        List<String> updateFields = filter.getProperties();
        return ApiReturn.of(service.update(entity, updateFields));
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/l-c-a-p-data-permission/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}