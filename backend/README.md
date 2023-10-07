# Usage
- `./mvnw spring-boot:run` to start the local client
- make requests with a client like curl or postman. sample curl request:
```
curl -G "http://localhost:8080/api/maps/distance" \
     --data-urlencode "origin=Atlanta, GA" \
     --data-urlencode "destination=Savannah, GA" \
     --data-urlencode "mode=driving"
```
- potential update: replace with Routes API.