### README


### 环境准备
> 支持Podman或Docker，在使用docker时只需要将所有命令从podman改为docker即可。

```bash
# 分步骤部署
# 编译镜像
podman compose build app

# 启动数据库与数据库管理台
podman compose up -d db adminer

# 导入表定义
podman compose exec db mysql -e 'SOURCE /db/all-defaultDS-mysql.sql;' --database coffee0528 -u root -pexample

# 添加数据
podman compose exec db mysql -e 'SOURCE /db/websql_exportjystudy-dev-coffee0528-DOep6r_vdfpY.sql;' --database coffee0528 -u root -pexample

# 启动app服务(如果配置文件变化一定要重新编译)
# spring配置在app/src/main/resources/application-dev.yml
podman compose up app --build --force-recreate

# 完整部署部署
# 启动服务（强制重新创建与编译）
podman compose up --build --force-recreate



```


