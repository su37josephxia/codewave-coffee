package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_B06C504F1AC871ECAA0AC01240A5F5B1 {

    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD> list = new ArrayList<>();
    public Long total;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD> getList() {
        return list;
    } 

    public void setList(List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_1F5DDC301DC97BF2A1C355F43408D1AD> list) {
        this.list = list; 
    } 

    public Long getTotal() {
        return total;
    } 

    public void setTotal(Long total) {
        this.total = total; 
    } 


}
