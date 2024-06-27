package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPLoadDeptSetLeaderSelectCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA> getAnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA(@Param("filter") String filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("deptId") String deptId); 

Long countAnonymousStructure_9C0F38CE0B1F4B46D348B17C9BB990AA(@Param("filter") String filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("deptId") String deptId); 


}
