package com.jystudy.coffee0528.repository; 

import java.util.List; 
import org.apache.ibatis.annotations.Param; 

public interface LCAPJudgeSaveEntityOrLogicMetaCustomizeServiceMapper {

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC> getAnonymousStructure_7E0E3711C8F04CD2E91C507B336679CC(@Param("saveEntityOrLogicNameList") List<String> saveEntityOrLogicNameList); 

List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_F596B746DC08704D55A3AF5333D966BF> getAnonymousStructure_F596B746DC08704D55A3AF5333D966BF(@Param("saveEntityOrLogicNameList") List<String> saveEntityOrLogicNameList); 


}
