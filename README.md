# Validation + Error handling + Database
This project was generated using NestJS CLI version 11.0.10

## Description
A NestJS application demonstrating DTO validation, pipes, and a global exception filter, with a PostgreSQL database running via Docker Compose. Includes a CRUD for one entity, fully tested, and ready to run in a containerized environment.


### Development server
To start a local development server, run:
``` bash
$ npm install
$ npm run start:dev
```
API available at: http://localhost:3000

### Running unit tests
To execute unit tests with the Jest test runner, use the following command:
``` bash
$ npm run test

```

### Optional: Docker
Build and start the services (NestJS + PostgreSQL):
``` bash
$ docker-compose up -d
```
Stop the containers:
``` bash
$ docker-compose down
```
View logs (optional):
```
# Follow NestJS logs
$ docker-compose logs -f app

# Follow PostgreSQL logs
$ docker-compose logs -f db
```

### Available endpoints
horse endpoints : 
``` 
# Retrieve all horses from the database.
GET /horse/all

```

``` 
# Add a new horse.
POST /horse/add

Body example:
{
  "name": "Liyal dubai,
  "age": 6
}
```

```

# Retrieve a single horse by its id.
# Returns 404 Not Found if the horse does not exist.
GET /horse/find/:id

```

```
# Update an existing horse by its id.
# Returns 404 Not Found if the horse does not exist.
PATCH /horse/update/:id

Body example (partial updates allowed):
{
  "name": "Lilo Updated",
  "age": 7
}
```
```
# Remove a horse by its id.
# Returns 404 Not Found if the horse does not exist.
DELETE /horse/remove/:id
```

### Additional Resources
For more information on using the NestJs, including detailed command references, visit the https://docs.nestjs.com page.

The project can also be run using Docker, for more details, see the https://docs.docker.com page.