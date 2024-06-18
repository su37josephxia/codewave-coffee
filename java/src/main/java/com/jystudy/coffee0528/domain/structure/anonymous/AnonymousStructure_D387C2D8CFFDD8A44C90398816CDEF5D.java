package com.jystudy.coffee0528.domain.structure.anonymous; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.ArrayList; 
import java.util.List; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class AnonymousStructure_D387C2D8CFFDD8A44C90398816CDEF5D {

    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7> list = new ArrayList<>();
    public Long total;
    public List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7> getList() {
        return list;
    } 

    public void setList(List<com.jystudy.coffee0528.domain.structure.anonymous.AnonymousStructure_C6A3D04956F42A30C586EC7F8F3D0EF7> list) {
        this.list = list; 
    } 

    public Long getTotal() {
        return total;
    } 

    public void setTotal(Long total) {
        this.total = total; 
    } 


}
