package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPRole; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPLoadRoleManagementTableViewCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_70791B893F53C2EFB9E501591763B020> getAnonymousStructure_70791B893F53C2EFB9E501591763B020(@Param("filter") LCAPRole filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_70791B893F53C2EFB9E501591763B020(@Param("filter") LCAPRole filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
