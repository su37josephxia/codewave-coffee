

```bash
## 将Docker镜像文件合并（突破git的100mb限制）
# 分割文件
split -b 90m image/image/coffee0528.tar.gz image/image/coffee0528_

# 合并
cat image/image/coffee0528_* > image/image/coffee0528.tar.gz

# 加载镜像(M1芯片的搞不了)
podman load -i image/coffee0528.tar.gz
podman run -i -p 8080:8080 --mount type=bind,source=./config,target=/config localhost/coffee0528:1718079293606

podman run -i -p 8080:8080 --mount type=bind,source=./config,target=/config -d docker:1713175715316

