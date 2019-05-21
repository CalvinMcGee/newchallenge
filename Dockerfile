FROM ruby

WORKDIR /app

COPY Gemfile ./Gemfile
COPY Gemfile.lock ./Gemfile.lock

RUN gem install bundler && \
bundle install -j 20

COPY . .
