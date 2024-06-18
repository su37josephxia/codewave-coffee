package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Arrays; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 
import com.jystudy.coffee0528.service.entities.LCAPDepartmentService; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.entities.LCAPUserDeptMappingService; 

@Service
public class LCAPUpdateDepartmentCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetDeptCustomizeService lCAPGetDeptCustomizeService;
    @Autowired
    private LCAPGetDeptsCustomizeService lCAPGetDeptsCustomizeService;
    @Autowired
    private LCAPGetSecondParentDeptCustomizeService lCAPGetSecondParentDeptCustomizeService;
    @Autowired
    private LCAPDepartmentService lCAPDepartmentService;
    @Autowired
    private LCAPGetChildDeptsCustomizeService lCAPGetChildDeptsCustomizeService;
    @Autowired
    private LCAPGetDeptUsersCustomizeService lCAPGetDeptUsersCustomizeService;
    @Autowired
    private LCAPUserDeptMappingService lCAPUserDeptMappingService;
    public void lCAPUpdateDepartment(LCAPDepartment department, String oldDeptId, String oldParentDeptId) {
        List<LCAPDepartment> childDepts = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA> mappingList = new ArrayList<>();
        List<LCAPUserDeptMapping> updateMapping = new ArrayList<>();
        LCAPDepartment preDept = new LCAPDepartment();
        LCAPDepartment updatePreDept = new LCAPDepartment();
        List<LCAPDepartment> childAllList = new ArrayList<>();
        List<String> childAllDeptId = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(department.id)) {
            if ((CommonFunctionUtil.equals(department.deptId, department.parentDeptId))) {
                department.parentDeptId = oldParentDeptId; 
            } else {
            } 

            preDept = lCAPGetDeptCustomizeService.lCAPGetDept(department.parentDeptId); 
            childAllList = lCAPGetDeptsCustomizeService.lCAPGetDepts(oldDeptId).list; 
            if (CommonFunctionUtil.hasValue(childAllList)) {
                childAllDeptId = CommonFunctionUtil.listTransform(childAllList, (item) -> item.deptId); 
            } else {
            } 

            if (CommonFunctionUtil.contains(childAllDeptId, preDept.deptId)) {
                updatePreDept = lCAPGetSecondParentDeptCustomizeService.lCAPGetSecondParentDept(preDept.deptId, oldDeptId); 
                updatePreDept.parentDeptId = oldParentDeptId; 
                lCAPDepartmentService.update(updatePreDept, Arrays.asList("id", "parentDeptId"));
            } else {
            } 

            lCAPDepartmentService.update(department, null);
            if ((CommonFunctionUtil.equals(oldDeptId, department.deptId))) {
                return ;
            } else {
            } 

            childDepts = lCAPGetChildDeptsCustomizeService.lCAPGetChildDepts(oldDeptId).list; 
            if (CommonFunctionUtil.hasValue(childDepts)) {
                for (Long index = 0L; index < childDepts.size(); index++) {
                    LCAPDepartment item = childDepts.get(index.intValue());
                    item.parentDeptId = department.deptId; 
                } 

                lCAPDepartmentService.batchUpdate(childDepts, Arrays.asList("id", "parentDeptId"));
            } else {
            } 

            mappingList = lCAPGetDeptUsersCustomizeService.lCAPGetDeptUsers(oldDeptId, 1L, 999999999L).list; 
            if (CommonFunctionUtil.hasValue(mappingList)) {
                updateMapping = CommonFunctionUtil.listTransform(mappingList, (item) -> item.lCAPUserDeptMapping); 
                for (Long index = 0L; index < updateMapping.size(); index++) {
                    LCAPUserDeptMapping item = updateMapping.get(index.intValue());
                    item.deptId = department.deptId; 
                } 

                lCAPUserDeptMappingService.batchUpdate(updateMapping, Arrays.asList("id", "deptId"));
            } else {
            } 

        } else {
        } 

        return ;
    } 


}
