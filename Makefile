
build: components index.js angjs-component-tabs.css template.js
	@component convet template.html
	@component build --dev

template.js: template.html
	@component convert $<

components: component.json
	@component install --dev

clean:
	rm -fr build components template.js

.PHONY: clean
