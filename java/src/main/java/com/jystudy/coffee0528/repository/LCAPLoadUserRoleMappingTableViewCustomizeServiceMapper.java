package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPUserRoleMapping; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPLoadUserRoleMappingTableViewCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8> getAnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8(@Param("filter") LCAPUserRoleMapping filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_99BA20F3093BB3AC3F3CA0BCA6D65EB8(@Param("filter") LCAPUserRoleMapping filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
