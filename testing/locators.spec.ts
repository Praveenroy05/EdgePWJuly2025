
// Locators - To identify the element on the page is known as locating an element.

// 1. css selector 
// 2. xpath
// 3. Playwright specific locators method - (getBy Locators)

// 1. css selectors


// DOM - Document object model - <label class="sdfdf">Email</lable>

// <button id="submit" class="btn">Submit</button>

// button - tagname (starting tag), id="submit" - attribute, </button> - closing tag
// Submit - text value


/**
 *  CSS SELECTOR
 * 
 * 1. if "id" as an attribute is present we can use the below css selestor for locators:
 * Syntax: - 
 * 
 *  a. tagname#idvalue or b. #idvalue or c.[id='value']
 * 
 * Ex: - if tagname is <input> and id is username(id ='username')
 * input#username OR #username
 * 
 * 2. if "class" attribute is present we can use the below selectors:
 * 
 * tagname.classname or .classname or c. [class='classvalue'] // .classname.classname2.classname3
 * //.mr-sm-2.form-control
 * 
 * 
 * Ex: - if tagname is input and classname is user
 * input.user OR .user   
 * 
 * 3. Write css based on any attribute:
 * 
 * [attribute = 'value'] - Ex: - [type='username'].first() // [value="Login"]
 * 
 * tagname[attribute = 'value'] - input[id='value]
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parenttagename >> childtagname or parentLocator childLocator
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * #userEmail-wrapper input
 * 
 * #form #username
 * div.practice-form-wrapper h5
 * 
 * first() - first matching
 * last() - last matching
 * nth(index) - nth(1) - 
 * 
 * 5. By writing the locators based on the text:
 * 
 * Ex: - ("text= Add to cart") // ("text= Email")
 * 
 * <h5>Email</h5> - ('text= Email') - ("text = Email")
 * 
 */

/*
// 2. XPATH

//  / - Absolute xpath - /html/body/div/div/section/section/h2 - NOT RECOMMENDED
// // - Relative xpath - //*[@id='login']/h2

// In xpath the index will starts from 1 

//*[@attribute = 'value']

OR

//tagName[@attribute = 'value'] - FASTER


//tagname or *[@attribute = 'value'] - //*[@attribute = 'value']

1.// (//*[@attribute='value'])[1] - //*[@id='firstName']

//*[@id='userEmail']

2. (//tagname[@attribute='value'])[1] - //input[@id='firstName']

(//input[@id='userEmail'])[1]

3. // Parent to child - 

//div[@class='_1ZMrY_']/div[1]/a - FLipkart

AXES - xpath

child  - //tagName[@attribute = 'value']/child::*[@attribute = 'value']
//tagName[@attribute = 'value']/child::tagName[@attribute = 'value']

parent - //tagName[@attribute = 'value']/parent::*[@attribute = 'value']
Ex: - //div[@id='userEmail-wrapper']/parent::form

following-sibling
//div[@id='userNumber-wrapper']/following-sibling::div[1]

preceding-sibling
//div[@id='userNumber-wrapper']/preceding-sibling::div[1]

ancestor
//div[@id='userNumber-wrapper']/ancestor::div[@class='body-height']

descendant
//div[@class='body-height']/descendant::input[@id='react-select-4-input']


//div[@class='form-group']/input[@id='userEmail']

4. //label[@for='email']/following-sibling::input[@id='userEmail']
  //label[@for='username']/following-sibling::input

  //h1[@class='text-center']/following-sibling::h5[1]

5. //input[@id='userEmail']/preceding-sibling::label

// <label for="username">Username</label> - precedingsibling to input tag
// <input type="text" name="username" id="username"> - followingsibling to label tag



// 6. //h2[text() = 'Test login']  -  //h5[text() = 'Student Registration Form']
// 7. (//h2[contains(text(), 'Test')])[1]
//h5[contains(text(), 'Registration')]

//Syntcx:
// * or tagName[contains(text(), 'Registration')]
//h2[contains(text(), 'login')]/parent::section



// 8. From child to parent traversing

// * or tagname [@attribute='value']/parent::parentTag



// <div id ='abc'> Email </div>


page.locator("#idvalue")


*/

// 3. Playwright special methods for locators

// GetBy Locators in Playwright

/*

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText('Student Registration Form', {exact: true}) to locate by text content.

page.getByLabel() to locate a form control by associated label's text.

1. WHen you have "for" as an attribute for an element that have been developed using <label> - there we can directly use page.getByLable('label text')
2. When you find out <input> inside the <label> - page.getByLable('label text')

page.getByPlaceholder('First Name')  - to locate an input by placeholder as an attribute.

page.getByAltText() to locate an element, usually image, by its text alternative.("alt" as an attribute)

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its "data-testid" attribute (other attributes can be configured).


*/


//await expect(page.getByRole('heading', { name: 'Sign up', exact :true })).toBeVisible();

//await page.getByRole('checkbox', { name: 'Subscribe' }).check();

// await page.getByRole('button', { name: /submit/i }).click();


