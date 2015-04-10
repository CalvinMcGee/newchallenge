BUCKET=s3://newchallenge.se/
DIR=public/

all: grunt build sync
	@ echo "Deploy complete"

grunt:
	@ cd themes/newchallenge && grunt
	@ echo "Running Grunt tasks"

build:
	@ hugo
	@ echo "Generating content with Hugo"

sync:
	@ aws s3 sync --profile newchallenge --exclude '*.*' --include '*.css' --content-type 'text/css' --cache-control 'max-age=604800' --size-only $(DIR) $(BUCKET)
	@ aws s3 sync --profile newchallenge --exclude '*.*' --include '*.js' --content-type 'application/javascript' --cache-control 'max-age=604800' --size-only $(DIR) $(BUCKET)
	@ aws s3 sync --profile newchallenge --exclude '*.*' --include '*.png' --include '*.jpg' --include '*.ico' --expires 'Sat, 20 Nov 2020 18:46:39 GMT' --cache-control 'max-age=604800' --size-only $(DIR) $(BUCKET)
	@ aws s3 sync --profile newchallenge --exclude '*.*' --include '*.html' --content-type 'text/html' --cache-control 'max-age=7200, must-revalidate' --size-only $(DIR) $(BUCKET)
	@ aws s3 sync --profile newchallenge --delete --size-only $(DIR) $(BUCKET)
