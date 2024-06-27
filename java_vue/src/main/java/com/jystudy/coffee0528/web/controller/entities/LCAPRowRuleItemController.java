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
import com.jystudy.coffee0528.domain.entities.LCAPRowRuleItem;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.LCAPRowRuleItemService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;
import com.jystudy.coffee0528.web.validation.*;

/**
* auto generate LCAPRowRuleItem controller
*
* @author sys
*/
@RestController
public class LCAPRowRuleItemController {
    @Resource
    private LCAPRowRuleItemService service;

    /**
    * auto gen batch create method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "77cfe3daa85b4b3dbe596bf115cd71dc",rules = { })})
    @PostMapping("/api/l-c-a-p-row-rule-item/batch")
    public ApiReturn<List<LCAPRowRuleItem>> batchCreate(@RequestBody List<LCAPRowRuleItem> body) {
        return ApiReturn.of(service.batchCreate(body));
    }

    /**
    * auto gen import method
    **/
    @PostMapping("/api/l-c-a-p-row-rule-item/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }

    /**
    * auto gen deleteBy method
    **/
    @Validation(value = { @ValidationRuleGroup(value = "dfe4127d0e724eda8d6374458f2e828d",rules = { })})
    @DeleteMapping("/api/l-c-a-p-row-rule-item/by")
    public ApiReturn<Long> deleteBy(@RequestBody FilterWrapper wrapper) {
        if (wrapper == null) {
            throw new HttpCodeException(400, ErrorCodeEnum.PARAM_REQUIRED.code, LCAPRowRuleItem.class);
        }
        return ApiReturn.of(service.deleteBy(wrapper.getReturnExpression()));
    }
}