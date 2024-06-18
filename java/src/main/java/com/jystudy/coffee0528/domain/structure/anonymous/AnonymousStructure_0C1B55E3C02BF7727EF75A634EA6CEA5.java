package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 
import com.jystudy.coffee0528.domain.structure.LCAPGetUserResultStructure; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_0C1B55E3C02BF7727EF75A634EA6CEA5 {

    public List<LCAPGetUserResultStructure> list = new ArrayList<>();
    public Long total;
    public List<LCAPGetUserResultStructure> getList() {
        return list;
    } 

    public void setList(List<LCAPGetUserResultStructure> list) {
        this.list = list; 
    } 

    public Long getTotal() {
        return total;
    } 

    public void setTotal(Long total) {
        this.total = total; 
    } 


}
