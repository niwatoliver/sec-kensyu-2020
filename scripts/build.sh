#!/bin/bash
eval "$(cat .env <(echo) <(declare -x))"
Q7_ALERT=$(echo -n "alert('content:$Q7')" | base64) next build
