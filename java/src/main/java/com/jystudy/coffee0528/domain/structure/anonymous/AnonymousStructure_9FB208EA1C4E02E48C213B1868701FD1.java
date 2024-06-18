package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_9FB208EA1C4E02E48C213B1868701FD1 {

    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B> list = new ArrayList<>();
    public Long total;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B> getList() {
        return list;
    } 

    public void setList(List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C3B3CBE93C4C48004BC78602CEAEE54B> list) {
        this.list = list; 
    } 

    public Long getTotal() {
        return total;
    } 

    public void setTotal(Long total) {
        this.total = total; 
    } 


}
