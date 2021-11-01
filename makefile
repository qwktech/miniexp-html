clean:
	rm -r public/*
	rm -r node_modules/

install-dep:
	docker run -it --rm \
	--name miniexp-html-install-dep \
	-v `pwd`:/usr/src/app \
	-w /usr/src/app \
	node:lts \
	npm install
	
run:
	docker run -it --rm \
	--name miniexp-html \
	-v `pwd`:/usr/src/app \
	-w /usr/src/app \
	-p 8080:8080 \
	node:lts \
	npm run start
