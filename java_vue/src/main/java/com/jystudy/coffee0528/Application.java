package com.jystudy.coffee0528;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.liquibase.LiquibaseAutoConfiguration;
import org.springframework.boot.autoconfigure.quartz.QuartzAutoConfiguration;
import org.springframework.boot.context.properties.EnableConfigurationProperties;
import org.springframework.context.annotation.FullyQualifiedAnnotationBeanNameGenerator;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.jystudy.coffee0528.config.ImportModuleConfiguration;
import com.jystudy.coffee0528.config.LcpProperties;
import com.jystudy.coffee0528.util.CommonFunctionUtil;

import org.springframework.boot.web.servlet.ServletComponentScan;


@SpringBootApplication(exclude = {QuartzAutoConfiguration.class, LiquibaseAutoConfiguration.class},
        scanBasePackages = {ImportModuleConfiguration.AUTH_MODULE_PACKAGE},
        scanBasePackageClasses = Application.class)
@EnableConfigurationProperties({LcpProperties.class})
@MapperScan(basePackages = "com.jystudy.coffee0528.repository", nameGenerator = FullyQualifiedAnnotationBeanNameGenerator.class)
@EnableTransactionManagement
@ServletComponentScan
public class Application {
    /**
     * Main method, used to run the application.
     *
     * @param args the command line arguments.
     */
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(Application.class);
        CommonFunctionUtil.registerEnv(app.run(args).getEnvironment());
    }
}
