package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPGetDataPermissionByResourceNameCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5> getAnonymousStructure_B347BE96D1C3E30B743C7EF6D26982A5(@Param("roleId") Long roleId, @Param("resourceName") String resourceName, @Param("resourceType") String resourceType); 


}
