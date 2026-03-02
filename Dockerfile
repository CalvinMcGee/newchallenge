FROM ruby:2.7.8

WORKDIR /app

RUN apt-get update && apt-get install -y --no-install-recommends nodejs && rm -rf /var/lib/apt/lists/*

COPY Gemfile* ./

RUN gem install bundler -v 2.4.22 && \
bundle _2.4.22_ install -j 20
