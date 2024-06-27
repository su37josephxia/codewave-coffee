package com.jystudy.coffee0528.repository; 

import java.util.List; 
import com.jystudy.coffee0528.domain.entities.LCAPUser; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPGetUserTableViewCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7> getAnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7(@Param("filter") LCAPUser filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 

Long countAnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7(@Param("filter") LCAPUser filter, @Param("lcap_71860C77_page") Long lcap_71860C77_page, @Param("lcap_F7BD60B7_size") Long lcap_F7BD60B7_size, @Param("sort") String sort, @Param("order") String order); 


}
