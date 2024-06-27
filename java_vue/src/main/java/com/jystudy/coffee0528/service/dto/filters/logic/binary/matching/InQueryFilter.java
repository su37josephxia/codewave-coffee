package com.jystudy.coffee0528.service.dto.filters.logic.binary.matching;

import com.jystudy.coffee0528.service.dto.filters.logic.binary.BinaryExpressionFilter;

/**
 * @Author: sys
 */
public class InQueryFilter extends BinaryExpressionFilter {


    public InQueryFilter() {
        this.operator = "in";
    }

    @Override
    public String sql(String dbType) {
        return String.format(" (%s IN %s) ", left.sql(dbType), right.sql(dbType));
    }
}
