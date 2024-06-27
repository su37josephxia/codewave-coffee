package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.service.entities.LCAPDepartmentService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPBatchDeleteDepartmentCustomizeServiceMapper; 

@Service
public class LCAPBatchDeleteDepartmentCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPBatchDeleteDepartmentCustomizeServiceMapper lCAPBatchDeleteDepartmentCustomizeServiceMapper;
    @Autowired
    private LCAPDepartmentService lCAPDepartmentService;
    public String lCAPBatchDeleteDepartment(List<Long> ids) {
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3F54AE7C6EB0826B17CF78EDFE6659E> deptList = new ArrayList<>();
        List<String> deptIdList = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2> userList = new ArrayList<>();
        String result = "";
        if (CommonFunctionUtil.hasValue(ids)) {
            deptIdList = lCAPBatchDeleteDepartmentCustomizeServiceMapper.getString(ids); 
            userList = lCAPBatchDeleteDepartmentCustomizeServiceMapper.getAnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2(deptIdList); 
            if ((CommonFunctionUtil.length(userList).compareTo(0L) > 0)) {
                result = "请先移除该部门下用户"; 
            } else {
                deptList = lCAPBatchDeleteDepartmentCustomizeServiceMapper.getSql1(deptIdList); 
                if ((CommonFunctionUtil.length(deptList).compareTo(0L) > 0)) {
                    result = "请先删除子部门"; 
                } else {
                    lCAPDepartmentService.batchDelete(ids);
                    result = "200"; 
                } 

            } 

        } else {
            result = "500"; 
        } 

        return result;
    } 


}
