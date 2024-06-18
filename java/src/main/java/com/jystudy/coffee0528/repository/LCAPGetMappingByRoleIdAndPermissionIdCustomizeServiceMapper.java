package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPGetMappingByRoleIdAndPermissionIdCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD> getAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(@Param("permissionId") Long permissionId, @Param("roleId") Long roleId); 

Long countAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(@Param("permissionId") Long permissionId, @Param("roleId") Long roleId); 


}
