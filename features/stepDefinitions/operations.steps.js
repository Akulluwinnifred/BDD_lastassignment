const { Given, When, Then } = require('@cucumber/cucumber');
const assert = require('assert');

//Steps for successful login 
    Given('I am on the login page', function() {
        console.log('Given am on the login page');
    });

    When('I enter valid credentials', function() {
        console.log('When I enter valid credentials');
    });

    Then('I am redirected to the dashboard', function() {
        console.log('Then am redirected to the dashboard');
    });

    //Steps for unsuccessful login    
    When('I enter invalid credentials', function() {
        console.log('When I enter invalid credentials');
    });
    
    Then('I remain on the login page', function() {
        console.log('Then I remain on the login page');
    });

    let answer = 0;

    Given('i start with {int}', function(input){
        answer = input;
    });
    
    When('i add {int}', function(input){
        answer += input;
    });
    
    Then('i end up with {int}', function(input){
        assert.equal(answer, input);
    });

    When('i multiply by {int}', function(input){
        answer *= input;	
    });

    When('i subtract {int}', function(input){
        answer -= input;	
    });
    When('i divide by {int}', function(input){
        answer /= input;	
    });
    When('i divide by to find modulus {int}', function(input){
        answer %= input;	
    });
    When('i raise to the power of {int}', function(input){
        answer **= input;	
    });
    When('i increment it', function () {
        answer++;  
    });
    When('i decrement it', function () {
        answer--;  
    });
    When('i compare with {int}', function (input) {
        answer = answer > input; 
    });
    
    When('i compare with {int} which is bigger', function (input) {
        answer = answer < input; 
    });
    When('i compare with {int} which is smaller', function (input) {
        answer = answer < input; 
    });
    
    Then('i end up with true', function () {
        return 'true';
      });
    Then('i end up with false', function () {
        return 'false';
      });
    

   
