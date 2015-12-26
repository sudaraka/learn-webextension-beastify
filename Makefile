NAME = beastify
EXCLUDE = README.md Makefile

all: $(NAME).xpi

$(NAME).xpi: manifest.json assets/*
	zip -x $(EXCLUDE) -r $@ *

clean:
	$(RM) *.xpi

.PHONY: clean
