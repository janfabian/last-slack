#!/bin/bash
docker build -t lounge-lastfm-slack .
docker tag lounge-lastfm-slack "topmonkscom/lounge-lastfm-slack:build-$TRAVIS_BUILD_NUMBER"
docker tag lounge-lastfm-slack topmonkscom/lounge-lastfm-slack:latest
docker push topmonkscom/lounge-lastfm-slack
