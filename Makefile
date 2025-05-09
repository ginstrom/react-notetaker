.PHONY: build run test clean stop dev lint

# Use docker compose command (works with both docker-compose and docker compose)
DOCKER_COMPOSE := $(shell command -v docker-compose 2> /dev/null || echo "docker compose")

build:
	$(DOCKER_COMPOSE) build

run:
	$(DOCKER_COMPOSE) up app

dev:
	$(DOCKER_COMPOSE) down && $(DOCKER_COMPOSE) build app && $(DOCKER_COMPOSE) up app

run-detached:
	$(DOCKER_COMPOSE) up -d app

test:
	$(DOCKER_COMPOSE) run --rm test

lint:
	@echo "Running linting checks..."
	$(DOCKER_COMPOSE) run --rm lint

clean:
	$(DOCKER_COMPOSE) down
	$(DOCKER_COMPOSE) rm -f

stop:
	$(DOCKER_COMPOSE) down 