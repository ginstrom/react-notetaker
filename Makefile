.PHONY: build run test clean stop dev lint

build:
	docker-compose build

run:
	docker-compose up app

dev:
	docker-compose down && docker-compose build app && docker-compose up app

run-detached:
	docker-compose up -d app

test:
	docker-compose run --rm test

lint:
	@echo "Running linting checks..."
	docker-compose run --rm lint

clean:
	docker-compose down
	docker-compose rm -f

stop:
	docker-compose down 