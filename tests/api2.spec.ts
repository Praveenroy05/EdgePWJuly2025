import {test, expect, request} from '@playwright/test'

const getURL = "https://reqres.in/api/users/2"
const postURL = "https://reqres.in/api/users"

const payload = 
{
    name: "John",
    job: "SDE"
}

test.beforeAll(async ({browser})=>{
    

})

test("GET methos API automation", async ()=>{
    const apiContext = await request.newContext()
    const getResponse = await apiContext.get(getURL, {
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })
   // console.log(await getResponse.json());

    // Status code - status()
    expect(getResponse.status()).toBe(200)

    // Response body - json()
    const jsonResponse = await getResponse.json()
    console.log(await jsonResponse.data.first_name)
    expect(await jsonResponse.data.first_name).toContain("Janet")
})

test("Post Method", async ()=>{
 const apiContext = await request.newContext()
    const postResponse = await apiContext.post(postURL, 
        {
        data: payload,
        headers:{
            "x-api-key": "reqres-free-v1"
        }
    })
    expect(postResponse.status()).toBe(201)
    const jsonPostResponse = await postResponse.json()
    console.log(jsonPostResponse);
    expect(jsonPostResponse.name).toContain("John")
    expect(jsonPostResponse.job).toContain("SDE")


})

