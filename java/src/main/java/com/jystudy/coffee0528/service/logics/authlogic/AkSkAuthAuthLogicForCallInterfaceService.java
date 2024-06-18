package com.jystudy.coffee0528.service.logics.authlogic; 

import org.springframework.stereotype.Service; 
import com.jystudy.coffee0528.util.CommonFunctionUtil; 
import org.slf4j.Logger; 
import org.slf4j.LoggerFactory; 
import com.jystudy.coffee0528.domain.http.HttpRequest; 
import com.jystudy.coffee0528.config.Constants; 

@Service
public class AkSkAuthAuthLogicForCallInterfaceService {

    private static final Logger LCAP_LOGGER = LoggerFactory.getLogger(Constants.LCAP_CUSTOMIZE_LOGGER);
    public HttpRequest auth(HttpRequest request) {
        String ak = "";
        String sk = "";
        String timestamp = "";
        String signature = "";
        ak = "Codewave"; 
        CommonFunctionUtil.mapPut(request.headers, "ak", ak);
        sk = "Codewave"; 
        timestamp = CommonFunctionUtil.toString(CommonFunctionUtil.currDateTime()); 
        CommonFunctionUtil.mapPut(request.headers, "timestamp", timestamp);
        signature = (ak + (sk + timestamp)); 
        CommonFunctionUtil.mapPut(request.headers, "signature", signature);
        return request;
    } 


}
