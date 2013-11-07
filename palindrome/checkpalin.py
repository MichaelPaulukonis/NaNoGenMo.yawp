#!/usr/bin/env python
# original palindrome-checker code from https://gist.github.com/catseye/7336582

import sys

x = ''
t = open(sys.argv[1]).read()
for l in t:
    if l.isalpha():
        x += l.upper()

end = len(x) - 1
begin = 0

while begin < end:
    print x[begin], x[end]
    assert x[begin] == x[end]
    begin += 1
    end -=1

