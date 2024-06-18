package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.CoffeeEntity; 
import org.apache.ibatis.annotations.Param; 

public interface LoadCoffeeManagementTableView_1CustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_3177427AE9FE919421E083B9B8414DE0> getAnonymousStructure_3177427AE9FE919421E083B9B8414DE0(@Param("filter") CoffeeEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_3177427AE9FE919421E083B9B8414DE0(@Param("filter") CoffeeEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
