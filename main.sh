#!/usr/bin/env bash

sed -i "s/\b_\(next\)\b/\L\1/g" "./out/index.html"
mv ./out/_next ./out/next
