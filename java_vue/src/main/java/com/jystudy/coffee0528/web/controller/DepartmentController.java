package com.jystudy.coffee0528.web.controller;

import com.jystudy.coffee0528.service.DepartmentService;
import com.jystudy.coffee0528.web.dto.DepartmentDTO;
import com.jystudy.coffee0528.web.dto.DepartmentRes;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import javax.annotation.Resource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
* auto generate DepartmentController
* 给ide提供一个全局系统逻辑来获取部门列表
*
* @author sys
*/
@RestController
@RequestMapping("department")
public class DepartmentController {
    private Logger log = LoggerFactory.getLogger(DepartmentController.class);
    @Resource
    private DepartmentService departmentService;
    //todo
    @PostMapping("/appDeptList")
    public Object getDepartmentList(@RequestBody DepartmentDTO departmentDTO) {
        log.info("appDeptListInner param{}",departmentDTO);
        Map<String,Object> res = new HashMap<>();
        try {
            List<DepartmentRes> list = departmentService.getDepartments(departmentDTO.getName());
            res.put("result",list);
            res.put("code",200);
            res.put("success",true);
        }catch (Exception e){
            log.error("appDeptList error",e);
            res.put("code",500);
            res.put("success",false);
        }

        return res;
    }
}
