#!/bin/bash
curl -v \
    -X POST \
    -d @data2.txt \
    -H "Content-Type:text/plain" \
    -w "Connect Time:\t%{time_connect} s\nTime start:\t%{time_starttransfer} s\nTotal time:\t%{time_total} s\n" \
    -o /dev/null \
    http://localhost:3000/fast
