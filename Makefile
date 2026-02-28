format:
	npm run format

lint:
	npm run lint

build:
	npm run build

dev:
	npm run dev

prerender:
	node scripts/prerender.mjs

build-full: build prerender

seo-check: build-full
	@echo "Checking SEO artifacts in dist/..."
	@test -f dist/sitemap.xml || (echo "FAIL: dist/sitemap.xml missing" && exit 1)
	@test -f dist/robots.txt || (echo "FAIL: dist/robots.txt missing" && exit 1)
	@test -f dist/home/index.html || (echo "FAIL: dist/home/index.html missing (prerender failed)" && exit 1)
	@echo "All SEO checks passed."

install:
	npm install