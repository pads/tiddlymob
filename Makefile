
.PHONY: test jslibs phantomjs setup

OS := $(shell uname)
ARCH := $(shell uname -m)
PHANTOMJS_MAC := phantomjs-1.6.1-macosx-static.zip
PHANTOMJS_LINUX_32 := phantomjs-1.6.1-linux-i686-dynamic.tar.bz2
PHANTOMJS_LINUX_64 := phantomjs-1.6.1-linux-x86_64-dynamic.tar.bz2
ifeq ($(OS), Linux)
	ifeq ($(ARCH), x86_64)
		PHANTOMJS_DL := $(PHANTOMJS_LINUX_64)
	else
		PHANTOMJS_DL := $(PHANTOMJS_LINUX_32)
	endif
endif
ifeq ($(OS), Darwin)
	PHANTOMJS_DL := $(PHANTOMJS_MAC)
endif

jslibs:
	curl -Lo test/lib/jquery.js \
		http://code.jquery.com/jquery-1.7.2.js
	curl -Lo test/lib/console-runner.js \
		https://raw.github.com/jcarver989/phantom-jasmine/master/lib/console-runner.js
	curl -Lo test/lib/run_jasmine_test.coffee \
		https://raw.github.com/jcarver989/phantom-jasmine/master/lib/run_jasmine_test.coffee

phantomjs:
	wget http://phantomjs.googlecode.com/files/$(PHANTOMJS_DL) \
	-O phantomjs.tar.bz2
	tar xjf phantomjs.tar.bz2
	mv phantomjs-* phantomjs

test:
	@cd phantomjs/bin && \
    	./phantomjs ../../test/lib/run_jasmine_test.coffee ../../test/SpecRunner.html

update:
	cp src/*.js tiddlymobapp/assets

serve:
	@cd tiddlymobapp && tsapp serve