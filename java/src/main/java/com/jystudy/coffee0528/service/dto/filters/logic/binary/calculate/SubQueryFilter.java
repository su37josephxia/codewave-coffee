package com.jystudy.coffee0528.service.dto.filters.logic.binary.calculate;

import com.jystudy.coffee0528.service.dto.filters.logic.binary.BinaryExpressionFilter;

/**
 * @Author: sys
 */
public class SubQueryFilter extends BinaryExpressionFilter {

    public SubQueryFilter() {
        this.operator = "-";
    }

    @Override
    public String sql(String dbType) {
        return String.format(" (%s - %s) ", left.sql(dbType), right.sql(dbType));
    }
}
