package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 
import com.jystudy.coffee0528.domain.entities.LCAPPermission; 

public interface LCAPLoadPerManagementTableViewCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335> getAnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335(@Param("filter") LCAPPermission filter); 

Long countAnonymousStructure_6BA326473ABCE1D47D16FA8EDBA33335(@Param("filter") LCAPPermission filter); 

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD> getAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(@Param("filter") LCAPPermission filter); 

Long countAnonymousStructure_92F2372792A8A12DF53175B7AD25D2FD(@Param("filter") LCAPPermission filter); 


}
