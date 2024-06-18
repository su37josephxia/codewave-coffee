
## 将Docker镜像文件合并（突破git的100mb限制）
```bash
# 分割文件
split -b 90m image/image/coffee0528.tar.gz image/image/coffee0528_

cat image/image/coffee0528_* > image/image/coffee0528.tar.gz

```