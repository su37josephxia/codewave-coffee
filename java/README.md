### README

```bash

# 编译镜像
podman build --tag coffee -f DockerfileMaven

# docker启动
podman run -i -p 8080:8080 localhost/coffee

# 创建数据库

# 导入数据
podman compose exec db mysql -e 'SOURCE /db/all-defaultDS-mysql.sql;' --database coffee0528 -u root -pexample

# 添加数据
podman compose exec db mysql -e 'SOURCE /db/websql_exportjystudy-dev-coffee0528-DOep6r_vdfpY.sql;' --database coffee0528 -u root -pexample

#


```


