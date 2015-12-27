NAME = beastify
EXCLUDE = README.md LICENSE Makefile "node_modules/*"

LINT = ./node_modules/.bin/eslint

all: $(NAME).xpi

$(NAME).xpi: manifest.json **/*.js assets/**/*
	zip -x $(EXCLUDE) -r $@ *

lint:
	$(LINT) src/

clean:
	$(RM) *.xpi

.PHONY: clean lint
