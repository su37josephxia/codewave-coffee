package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPLoadAddRoleUserTableViewCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_47C167E7217746A55100F50A57F637C0> getAnonymousStructure_47C167E7217746A55100F50A57F637C0(@Param("userIdList") List<String> userIdList); 

Long countAnonymousStructure_47C167E7217746A55100F50A57F637C0(@Param("userIdList") List<String> userIdList); 


}
