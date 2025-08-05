// Annotations - 


/*

Key built-in annotations include:

test.only():
Executes only the marked test(s), skipping all others. This is useful for focusing on specific tests during development or debugging.

test.skip():
Skips the marked test(s). This is useful for temporarily disabling tests that are not relevant or are known to be failing in a specific environment.

test.fixme():
Skips the marked test(s) and indicates that they are known to be failing and require attention. It's a semantic variant of test.skip().

test.fail():
Marks a test as expected to fail. If the test passes, Playwright will report it as a failure, which is useful for tests of known issues that are being tracked.

test.slow():
Triples the default timeout for the marked test(s), indicating they are expected to take longer to execute.

test.describe():
Groups multiple tests into a test suite, improving organization and readability in test reports.



*/

import {test, expect} from '@playwright/Test'

test.describe("Test Suite", async ()=>{
    test.skip("Test1", ()=>{
        console.log("Test1");
    })


    test.fixme("Test2", ()=>{
        console.log("Test2");
    })


    test.fail("Test3", ()=>{
        console.log("Test3");
        expect(25).toBe(20)
    })


    test("Test4", ()=>{
        test.slow()
    console.log("Test4");
    })

    test("Test5", ()=>{
        console.log("Test5");
    })
})