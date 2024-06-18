package com.jystudy.coffee0528.service.dto.filters.logic.binary.matching;

import com.jystudy.coffee0528.config.Constants;
import com.jystudy.coffee0528.domain.enumeration.ErrorCodeEnum;
import com.jystudy.coffee0528.exception.HttpCodeException;
import com.jystudy.coffee0528.service.dto.filters.logic.binary.BinaryExpressionFilter;
import org.apache.commons.lang3.StringUtils;
import org.springframework.http.HttpStatus;

/**
 * @Author: sys
 */
public class LikeQueryFilter extends BinaryExpressionFilter {

    public LikeQueryFilter() {
        this.operator = "like";
    }

    @Override
    public String sql(String dbType) {
        dbType = StringUtils.defaultString(dbType, "");
        String likeString = "";
        switch (dbType) {
            case "mysql":
                likeString = StringUtils.replace("concat('%', concat(%s, '%'))", "%s", right.sql(dbType));
                return String.format(" (%s LIKE %s) ", left.sql(dbType), likeString);
            default:
                throw new HttpCodeException(HttpStatus.METHOD_NOT_ALLOWED.value(), ErrorCodeEnum.DB_TYPE_NOT_SUPPORT.code);
        }
    }
}
