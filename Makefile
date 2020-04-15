#!make
SHELL = bash
include .env
export $(shell sed 's/=.*//' .env)

ANSWER := $(Q1)$(Q2)$(Q3)$(Q4)$(Q5)$(Q6)$(Q7)$(Q8)

$(eval Q7_ALERT := $(shell echo -n "alert('content:$(Q7)')" | base64))

.PHONY: initialization
initialization:
	yarn
	echo {content: '$(Q3)', q: 3} > ./public/q3.txt
	cd admin; ts-node -r dotenv/config init.ts dotenv_config_path=../.env

.PHONY: build_and_deploy
build_and_deploy:
	yarn
	cd functions; yarn
	echo {content: '$(Q3)', q: 3} > ./public/q3.txt
	cd admin; ts-node -r dotenv/config init.ts dotenv_config_path=../.env
	yarn build
	yarn export
	npx firebase functions:config:set question.q8="$(Q8)" question.answer="$(ANSWER)" project.id="$(FIREBASE_PROJECT_ID)" --project $(FIREBASE_PROJECT_ID)
	npx firebase deploy --project $(FIREBASE_PROJECT_ID)
