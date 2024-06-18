package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.SlideEntity; 
import org.apache.ibatis.annotations.Param; 

public interface LoadSlideManagementTableView_1CustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655> getAnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655(@Param("filter") SlideEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_97EF77A90D9FC3CD70F4874C8F91E655(@Param("filter") SlideEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
