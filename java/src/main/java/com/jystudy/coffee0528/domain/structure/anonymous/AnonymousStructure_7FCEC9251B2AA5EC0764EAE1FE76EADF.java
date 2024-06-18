package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_7FCEC9251B2AA5EC0764EAE1FE76EADF {

    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_3177427AE9FE919421E083B9B8414DE0> list = new ArrayList<>();
    public Long total;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_3177427AE9FE919421E083B9B8414DE0> getList() {
        return list;
    } 

    public void setList(List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_3177427AE9FE919421E083B9B8414DE0> list) {
        this.list = list; 
    } 

    public Long getTotal() {
        return total;
    } 

    public void setTotal(Long total) {
        this.total = total; 
    } 


}
