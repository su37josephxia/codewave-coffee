package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPGetPermissionByRoleIdCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD> getAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(@Param("roleId") Long roleId); 

Long countAnonymousStructure_1C8D1250B6DC21B85363C7974FAD68BD(@Param("roleId") Long roleId); 

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD> getAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(@Param("rolePermissionMappingIdList") List<Long> rolePermissionMappingIdList); 


}
