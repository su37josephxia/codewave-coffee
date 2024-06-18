package com.jystudy.coffee0528.service.logics; 

import org.springframework.stereotype.Service; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPUserDeptMapping; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter; 
import org.slf4j.Logger; 
import org.springframework.beans.factory.annotation.Autowired; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.config.Constants; 
import com.jystudy.coffee0528.service.entities.LCAPUserDeptMappingService; 
import com.jystudy.coffee0528.service.dto.filters.atomic.IdentifierQueryFilter; 
import com.jystudy.coffee0528.service.dto.filters.atomic.ColumnQueryFilter.Property; 
import com.jystudy.coffee0528.service.dto.filters.logic.binary.matching.InQueryFilter; 

@Service
public class LCAPBatchAddDeptUserCustomizeService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    @Autowired
    private LCAPUserDeptMappingService lCAPUserDeptMappingService;
    public void lCAPBatchAddDeptUser(List<String> userIds, String deptId) {
        List<LCAPUserDeptMapping> userDeptMapList = new ArrayList<>();
        LCAPUserDeptMapping userDeptMap = new LCAPUserDeptMapping();
        if (CommonFunctionUtil.hasValue(deptId, userIds)) {
            lCAPUserDeptMappingService.deleteBy(new InQueryFilter().left(new ColumnQueryFilter("", "", "userId", "userId", new ColumnQueryFilter.Property("", "userId"))).right(new IdentifierQueryFilter("userIds", userIds)));
            userDeptMap.deptId = deptId; 
            userDeptMap.isDeptLeader = 0L; 
            for (Long index = 0L; index < userIds.size(); index++) {
                String item = userIds.get(index.intValue());
                userDeptMap.userId = item; 
                CommonFunctionUtil.add(userDeptMapList, CommonFunctionUtil.clone(userDeptMap));
            } 

            lCAPUserDeptMappingService.batchCreate(userDeptMapList);
        } else {
        } 

        return ;
    } 


}
