#!/bin/bash
# pre-commit.sh
./frequent-tests.sh
RESULT=$?
[ $RESULT -ne 0 ] && exit 1
exit 0
