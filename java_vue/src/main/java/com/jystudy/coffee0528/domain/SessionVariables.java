package com.jystudy.coffee0528.domain; 

import com.fasterxml.jackson.annotation.JsonAutoDetect; 
import java.io.Serializable; 
import com.fasterxml.jackson.annotation.JsonAutoDetect.Visibility; 
import java.util.Objects; 

@JsonAutoDetect(fieldVisibility = JsonAutoDetect.Visibility.ANY,getterVisibility = JsonAutoDetect.Visibility.NONE)
public class SessionVariables implements Serializable{

    @javax.validation.constraints.NotNull
    public com.jystudy.coffee0528.domain.http.HttpRequest<String> httpRequest = new com.jystudy.coffee0528.domain.http.HttpRequest<>();
    @javax.validation.constraints.NotNull
    public com.jystudy.coffee0528.domain.http.HttpResponse<String> httpResponse = new com.jystudy.coffee0528.domain.http.HttpResponse<>();
    @javax.validation.constraints.NotNull
    public com.netease.lowcode.auth.domain.LCAPUser currentUser = new com.netease.lowcode.auth.domain.LCAPUser();
    private <Source, Target> Boolean equals(Source source, Target target) {
        return Objects.equals(source, target);
    } 


}
