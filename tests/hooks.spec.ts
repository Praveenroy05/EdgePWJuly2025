// Hooks - 

// test.beforeAll() - It will run once before running all the test cases
// test.beforeEach() - It will run once before each and every test case
// test.afterEach() - It will run once after each and every test case
// test.afterAll()

import {test, expect} from '@playwright/test'

test.beforeAll(async ()=>{ // page - 
    console.log("Initialing the data");
})

test.beforeEach(async ({page})=>{
    console.log("Before each test case");
})

test.afterEach(async ()=>{
    console.log("After each test case");
})

 test.afterAll(async ()=>{
    console.log("After all test cases");
})