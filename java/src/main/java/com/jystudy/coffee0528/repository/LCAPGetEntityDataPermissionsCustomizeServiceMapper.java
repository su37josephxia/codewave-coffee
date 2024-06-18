package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPGetEntityDataPermissionsCustomizeServiceMapper {

List<Long> getLong(@Param("global_CDD638E00095E76C42DB80D69DFDEC30_currentUser") com.netease.lowcode.auth.domain.LCAPUser global_CDD638E00095E76C42DB80D69DFDEC30_currentUser); 

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5> getAnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5(@Param("entityNames") List<String> entityNames, @Param("userRole") List<Long> userRole); 


}
