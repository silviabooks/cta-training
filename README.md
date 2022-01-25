# cta-training

[![Open in GitPod](https://gitpod.io/button/open-in-gitpod.svg)](https://gitpod.io#https://github.com/marcopeg/cta-training)


Run basic NGING:

```bash
docker run -p 8080:80 nginx
```

Connect my local website:

```bash
docker run \
    -p 8080:80 \
    -v $(pwd)/html:/usr/share/nginx/html:ro \
    nginx
```

