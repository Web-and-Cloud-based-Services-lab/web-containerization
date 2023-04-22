<!-- 
### Build MongoDB docker image

**You don't need to run the following command, the image is provided!!**
```shell
docker build -t reisafriche/mongo-db:v1 .
``` -->

### Run MongoDB

<!-- ```shell
docker run --name mongodb -p 27017:27017 -d reisafriche/mongo-db:v1
docker push reisafriche/mongo-db:v1
``` -->

```shell
docker-compose up -d    
```