package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPCanceDeptLeaderCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2> getAnonymousStructure_AEEB828FDE3AE90342EE6479C9466DF2(@Param("deptId") String deptId, @Param("userId") String userId); 


}
