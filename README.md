For start you need:
  1. Enter required env params to docker-compose.yaml file:
    - MAP_TOKEN: mapbox token, else you will get 401 error
  2. Run command: docker compose up --build

Swagger: /api

For testing you need:
  1. Enter required env params to docker-compose.e2e.yml file:
    - MAP_TOKEN: mapbox token, else you will get a 401 error
  2. Run command: 
    docker compose -f docker-compose.e2e.yml up --build
     or
    docker compose -f docker-compose.e2e.yml up --abort-on-container-exit --exit-code-from test-api
    If you want to quit immediately after the tests
