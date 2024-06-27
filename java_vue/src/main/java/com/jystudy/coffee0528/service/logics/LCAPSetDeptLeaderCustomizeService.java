package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import java.util.Arrays; 
import com.jystudy.coffee0528.util.LambdaParamWrapper; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.repository.LCAPSetDeptLeaderCustomizeServiceMapper; 
import com.jystudy.coffee0528.service.entities.LCAPUserDeptMappingService; 

@Service
public class LCAPSetDeptLeaderCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPSetDeptLeaderCustomizeServiceMapper lCAPSetDeptLeaderCustomizeServiceMapper;
    @Autowired
    private LCAPUserDeptMappingService lCAPUserDeptMappingService;
    public void lCAPSetDeptLeader(String deptId, String userId) {
        LambdaParamWrapper<String> userIdWrapper = new LambdaParamWrapper<>(userId);
        List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2> userList = new ArrayList<>();
        LCAPUserDeptMapping updateMapping = new LCAPUserDeptMapping();
        if (CommonFunctionUtil.hasValue(deptId, userIdWrapper.param)) {
            userList = lCAPSetDeptLeaderCustomizeServiceMapper.getAnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2(deptId); 
            for (Long index = 0L; index < userList.size(); index++) {
                com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2 item = userList.get(index.intValue());
                if ((CommonFunctionUtil.equals(item.lCAPUserDeptMapping.isDeptLeader, 1L))) {
                    item.lCAPUserDeptMapping.isDeptLeader = 0L; 
                } else {
                } 

            } 

            if ((CommonFunctionUtil.length(userList).compareTo(0L) > 0)) {
                lCAPUserDeptMappingService.batchUpdate(CommonFunctionUtil.listTransform(userList, (item) -> item.lCAPUserDeptMapping), Arrays.asList("id", "isDeptLeader"));
                updateMapping = CommonFunctionUtil.listFind(userList, (item) -> (CommonFunctionUtil.equals(item.lCAPUserDeptMapping.userId, userIdWrapper.param))).lCAPUserDeptMapping; 
                updateMapping.isDeptLeader = 1L; 
                lCAPUserDeptMappingService.update(updateMapping, Arrays.asList("id", "isDeptLeader"));
            } else {
            } 

        } else {
        } 

        return ;
    } 


}
