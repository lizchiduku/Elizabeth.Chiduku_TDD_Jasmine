
Teste_000@Tempcomp MINGW32 ~ (master)
$ npm -v
6.9.0

Teste_000@Tempcomp MINGW32 ~ (master)
$ node -v
v10.16.0

Teste_000@Tempcomp MINGW32 ~ (master)
$ mkdir jasmine-project
mkdir: cannot create directory ‘jasmine-project’: File exists

Teste_000@Tempcomp MINGW32 ~ (master)
$ cd jasmine-project

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ nmp install -g jasmine
bash: nmp: command not found

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ cd jasmine-project/
bash: cd: jasmine-project/: No such file or directory

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ cd jasmine-project/
bash: cd: jasmine-project/: No such file or directory

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ npm install -g jasmine
C:\Users\Teste_000\AppData\Roaming\npm\jasmine -> C:\Users\Teste_000\AppData\Roaming\npm\node_modules\jasmine\bin\jasmine.js
+ jasmine@3.4.0
updated 1 package in 3.448s

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ npm list
C:\Users\Teste_000\jasmine-project
`-- (empty)


Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ npm list -g
C:\Users\Teste_000\AppData\Roaming\npm
`-- jasmine@3.4.0
  +-- glob@7.1.4
  | +-- fs.realpath@1.0.0
  | +-- inflight@1.0.6
  | | +-- once@1.4.0 deduped
  | | `-- wrappy@1.0.2
  | +-- inherits@2.0.3
  | +-- minimatch@3.0.4
  | | `-- brace-expansion@1.1.11
  | |   +-- balanced-match@1.0.0
  | |   `-- concat-map@0.0.1
  | +-- once@1.4.0
  | | `-- wrappy@1.0.2 deduped
  | `-- path-is-absolute@1.0.1
  `-- jasmine-core@3.4.0


Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ jasmine
Randomized with seed 94341
Started


No specs found
Finished in 0.007 seconds
Incomplete: No specs found
Randomized with seed 94341 (jasmine --random=true --seed=94341)

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ ls
spec/

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ jasmine init
spec/support/jasmine.json already exists in your project.

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ cd spec/

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ ls
jasmine-project/  spec/  support/  test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ touch test.jwspec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ pwd
/c/Users/Teste_000/jasmine-project/spec

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ touch test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ touch test.jwspec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ vim test.jwspec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ vim spec/test.jwspec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ jasmine
Randomized with seed 04067
Started
.


1 spec, 0 failures
Finished in 0.015 seconds
Randomized with seed 04067 (jasmine --random=true --seed=04067)

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ vim spec/test.jwspec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ jasmine
Randomized with seed 12563
Started
.


1 spec, 0 failures
Finished in 0.014 seconds
Randomized with seed 12563 (jasmine --random=true --seed=12563)

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ mkdir jasmine-project
mkdir: cannot create directory ‘jasmine-project’: File exists

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ cd jasmine-project/

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project (master)
$ ls
spec/

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project (master)
$ cd spec/

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project/spec (master)
$ ls
support/  test.spec  test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project/spec (master)
$ pwd
/c/Users/Teste_000/jasmine-project/spec/jasmine-project/spec

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project/spec (master)
$ touch test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project/spec (master)
$ vim test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project/spec (master)
$ cd ../

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project (master)
$ jasmine
Randomized with seed 71949
Started
FFFFFF

Failures:
1) sumFirstLast should return -10 when we pass [-6,23,3,-4] as an argument
  Message:
    Expected undefined to equal -10.
  Stack:
    Error: Expected undefined to equal -10.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\Teste_000\jasmine-project\spec\jasmine-project\spec\test.spec.js:29:44)
        at <Jasmine>

2) sumFirstLast should return 10 when we pass [2,3,8] as an argument
  Message:
    Expected undefined to equal 10.
  Stack:
    Error: Expected undefined to equal 10.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\Teste_000\jasmine-project\spec\jasmine-project\spec\test.spec.js:26:39)
        at <Jasmine>

3) sumFirstLast should return 3 when we pass [1,2] as an argument
  Message:
    Expected undefined to equal 3.
  Stack:
    Error: Expected undefined to equal 3.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\Teste_000\jasmine-project\spec\jasmine-project\spec\test.spec.js:23:37)
        at <Jasmine>

4) Sum1toN should return 6 when we pass 3 as an argument
  Message:
    Expected undefined to equal 6.
  Stack:
    Error: Expected undefined to equal 6.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\Teste_000\jasmine-project\spec\jasmine-project\spec\test.spec.js:14:28)
        at <Jasmine>

5) Sum1toN should return 10 when we pass 4 as an argument
  Message:
    Expected undefined to equal 10.
  Stack:
    Error: Expected undefined to equal 10.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\Teste_000\jasmine-project\spec\jasmine-project\spec\test.spec.js:17:28)
        at <Jasmine>

6) Sum1toN should return 3 when we pass 2 as an argument
  Message:
    Expected undefined to equal 3.
  Stack:
    Error: Expected undefined to equal 3.
        at <Jasmine>
        at UserContext.<anonymous> (C:\Users\Teste_000\jasmine-project\spec\jasmine-project\spec\test.spec.js:11:28)
        at <Jasmine>

6 specs, 6 failures
Finished in 0.038 seconds
Randomized with seed 71949 (jasmine --random=true --seed=71949)

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project (master)
$ vim test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec/jasmine-project (master)
$ cd ../

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ jasmine
Randomized with seed 98944
Started
.


1 spec, 0 failures
Finished in 0.014 seconds
Randomized with seed 98944 (jasmine --random=true --seed=98944)

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ jasmine
Randomized with seed 99518
Started
.


1 spec, 0 failures
Finished in 0.014 seconds
Randomized with seed 99518 (jasmine --random=true --seed=99518)

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ vim test.spec.js

Teste_000@Tempcomp MINGW32 ~/jasmine-project/spec (master)
$ cd ../

Teste_000@Tempcomp MINGW32 ~/jasmine-project (master)
$ jasmine
C:\Users\Teste_000\jasmine-project\spec\jasmine-project\test.spec.js:6
        return total:
                    ^

SyntaxError: Unexpected token :
    at Module._compile (internal/modules/cjs/loader.js:721:23)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:787:10)
    at Module.load (internal/modules/cjs/loader.js:653:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:593:12)
    at Function.Module._load (internal/modules/cjs/loader.js:585:3)
    at Module.require (internal/modules/cjs/loader.js:690:17)
    at require (internal/modules/cjs/helpers.js:25:18)
    at C:\Users\Teste_000\AppData\Roaming\npm\node_modules\jasmine\lib\jasmine.js:89:5
    at Array.forEach (<anonymous>)
    at Jasmine.loadSpecs (C:\Users\Teste_000\AppData\Roaming\npm\node_modules\jasmine\lib\jasmine.js:88:18)


