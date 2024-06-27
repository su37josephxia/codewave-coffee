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
import com.jystudy.coffee0528.domain.entities.LCAPResource;
import com.jystudy.coffee0528.domain.enumeration.*;
import com.jystudy.coffee0528.service.entities.LCAPResourceService;
import com.jystudy.coffee0528.web.ApiReturn;
import com.jystudy.coffee0528.service.dto.filters.EntityFilter;
import com.jystudy.coffee0528.service.dto.filters.AbstractQueryFilter;
import com.jystudy.coffee0528.service.dto.filters.FilterWrapper;
import com.jystudy.coffee0528.domain.PageOf;
import com.jystudy.coffee0528.util.JacksonUtils;

/**
* auto generate LCAPResource controller
*
* @author sys
*/
@RestController
public class LCAPResourceController {
    @Resource
    private LCAPResourceService service;

    /**
    * auto gen import method
    **/
    @PostMapping("/api/l-c-a-p-resource/import")
    public ApiReturn<String> importEntities(@RequestParam("file") MultipartFile file) {
        return ApiReturn.of(service.importFile(file));
    }
}