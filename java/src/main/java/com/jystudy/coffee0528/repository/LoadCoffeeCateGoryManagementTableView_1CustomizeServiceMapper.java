package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.CoffeeCategoryEntity; 
import org.apache.ibatis.annotations.Param; 

public interface LoadCoffeeCateGoryManagementTableView_1CustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD> getAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(@Param("filter") CoffeeCategoryEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD(@Param("filter") CoffeeCategoryEntity filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
