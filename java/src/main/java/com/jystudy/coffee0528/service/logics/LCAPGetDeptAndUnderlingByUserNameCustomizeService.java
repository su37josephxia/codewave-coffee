package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import com.jystudy.coffee0528.domain.entities.LCAPDepartment; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class LCAPGetDeptAndUnderlingByUserNameCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPGetDeptIdByUserIdCustomizeService lCAPGetDeptIdByUserIdCustomizeService;
    @Autowired
    private LCAPGetDeptsCustomizeService lCAPGetDeptsCustomizeService;
    @Autowired
    private LCAPGetDeptUsersCustomizeService lCAPGetDeptUsersCustomizeService;
    public List<String> lCAPGetDeptAndUnderlingByUserName(String userId) {
        List<LCAPDepartment> childDepts = new ArrayList<>();
        List<String> selfDeptId = new ArrayList<>();
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA> deptUsers = new ArrayList<>();
        List<String> allDeptId = new ArrayList<>();
        List<String> result = new ArrayList<>();
        if (CommonFunctionUtil.hasValue(userId)) {
            selfDeptId = lCAPGetDeptIdByUserIdCustomizeService.lCAPGetDeptIdByUserId(userId); 
            if (CommonFunctionUtil.hasValue(selfDeptId)) {
                childDepts = lCAPGetDeptsCustomizeService.lCAPGetDepts(CommonFunctionUtil.listHead(selfDeptId)).list; 
                if (CommonFunctionUtil.hasValue(childDepts)) {
                    CommonFunctionUtil.addAll(allDeptId, CommonFunctionUtil.listTransform(childDepts, (item) -> item.deptId));
                } else {
                } 

                CommonFunctionUtil.addAll(allDeptId, selfDeptId);
            } else {
            } 

            for (Long index = 0L; index < allDeptId.size(); index++) {
                String item = allDeptId.get(index.intValue());
                deptUsers = lCAPGetDeptUsersCustomizeService.lCAPGetDeptUsers(item, 1L, 999999999L).list; 
                if (CommonFunctionUtil.hasValue(deptUsers)) {
                    CommonFunctionUtil.addAll(result, CommonFunctionUtil.listTransform(deptUsers, (item1) -> item1.lCAPUser.userName));
                } else {
                } 

            } 

        } else {
            result = CommonFunctionUtil.New(List.class); 
        } 

        return result;
    } 


}
