package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPGetUserResourcesCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_B202841ADEE061731D68863F55003B0E> getAnonymousStructure_B202841ADEE061731D68863F55003B0E(@Param("userId") String userId); 

Long countAnonymousStructure_B202841ADEE061731D68863F55003B0E(@Param("userId") String userId); 


}
