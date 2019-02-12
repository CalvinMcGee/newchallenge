#!/bin/sh

docker run --rm -it -v $(pwd):/sources:z -p 4000:4000 ruby

# gem install bundler
# bundle install
# bundle exec jekyll serve --config _config.yml,_dev.yml --host 0.0.0.0 --port 4000 -w
