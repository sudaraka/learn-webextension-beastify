NAME = beastify
EXCLUDE = README.md LICENSE Makefile

all: $(NAME).xpi

$(NAME).xpi: manifest.json assets/**/*
	zip -x $(EXCLUDE) -r $@ *

clean:
	$(RM) *.xpi

.PHONY: clean
