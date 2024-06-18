package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.OrderEntityEntity; 
import org.apache.ibatis.annotations.Param; 

public interface LoadOrderManagementTableView_1CustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B> getAnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B(@Param("filter") OrderEntityEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B(@Param("filter") OrderEntityEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
