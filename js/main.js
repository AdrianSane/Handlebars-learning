/*
--------------------------------------------------------------------------------
 - SOURCES:
--------------------------------------------------------------------------------
  - https://www.sitepoint.com/a-beginners-guide-to-handlebars/
  - docs: http://handlebarsjs.com/
  - cdn: https://cdnjs.com/libraries/handlebars.js
  - with json tut: https://www.youtube.com/watch?v=wSNa5b1mS5Y

--------------------------------------------------------------------------------
 - NOTES:
--------------------------------------------------------------------------------
  - Handlebars is a templating engine used to update the data rendered on the browser
  - Templating engines seperate business logic from the rest of the code
  - Handlebars is a logic-less templating engine that dynamically generates your HTML page
  - Handlebars adds minimal logic thanks to the use of some helpers (such as if, with, unless, each and more)
  - Handlebars improves the structure of applications
  - Putting div tags inside of the handlebars script tags will render the tags
  - use divs in the html to output the templates, and call them in the javascript

--------------------------------------------------------------------------------
  - How handlebars works:
--------------------------------------------------------------------------------
    - Handlebars takes a template with the variables and compiles it into a function
    - This function is then executed by passing a JSON object as an argument
    - This JSON object is known as context and it contains the values of the variables used in the template
    - The function returns the required HTML after replacing the variables of the template with their corresponding values

--------------------------------------------------------------------------------
 - TEMPLATES:
--------------------------------------------------------------------------------
  - Templates can be written both in the HTML file or separately in the js file
  - To write templates in the HTML, you instantiate them in script tags and give them an id
  - You must create a div outside of the script tag for the template to be displayed in

  - HTML Template syntax:
    - <div id="demoOutput">"template renders here"></div>
    - <script id="demo" type="text/x-handlebars-template"></script>

 - The HTML and variables for the Template are written inside of the script tags
 - Variables for the Template are placed inside double curly brackets {{}}
 - Variables are known as expressions
    - <script id="demo" type="text/x-handlebars-template">
          My name is, {{name}} and I am a, {{occupation}}
      </script>

 - To use the template, you have to retrieve it from the HTML in javascript by using it's id
 - After you grab the template, you compile it by using the Handlebars .compile() method.
 - Compiling the template will return a function
 - This function is then executed by passing the context as an argument
 - When the execution is complete, the function returns the desired HTML with all the variables replaced by their corresponding values
 - At this point we can inject the HTML into our web page.

--------------------------------------------------------------------------------
- PARTIAL TEMPLATES:
--------------------------------------------------------------------------------
  - partials are templates that can be shared among different templates
  - syntax:
    - {{> partialName}}

  - Before using them in the HTML, we need to register the partial in javascript
  - syntax:
    - Handlebars.registerPartial()

  - when you register a partial, you use double currlys in javascript to pull in data from the context
  - you can also use html in the partial to render it on the browser from the javascript
--------------------------------------------------------------------------------
 - EXPRESSIONS:
--------------------------------------------------------------------------------
  - variables in handlebars are called EXPRESSIONS
  - you surround expressions in the html scripts with double curly brackets {{}}
    - my name is {{expression}}

  - you can escape (not render) html tags by using triple brackets {{{}}}, and the adding html tags in the data
    - my name is {{{name}}}
      - data = { "name" : "<h3>Adrian</h3>"}

--------------------------------------------------------------------------------
 - COMMENTS:
--------------------------------------------------------------------------------
  - you can write comments in handlebars by also using double brackets
    - syntax: {{!-- comments here --}}
  - Handlebars comments are not visible in the HTML

--------------------------------------------------------------------------------
 - BLOCKS:
--------------------------------------------------------------------------------
  - In Handlebars, blocks are expressions that have block opening and closing tags
  - you can write conditionals and other functions inside of handlebars blocks
    - syntax: {{#}} {{/}}

  - a conditional if block in handlebars:
    - {{#if boolean}}
        some content here
      {{/if}}

--------------------------------------------------------------------------------
 - PATHS:
--------------------------------------------------------------------------------
 - Handlebars supports both normal and nested path
 - this makes it possible to look up properties nested below the current context
 - Handlebars also supports the ../ path segment
 - you can use paths in variables that are in blocks to grab nested data with other expressions in the same template
 - essentially, using "../" allows you to grab data in an object, that is being called from inside a block, and outside of nested data
 - it allows you to grab data that isnt nested in other objects or arrays from inside and html block

--------------------------------------------------------------------------------
 - HELPERS:
--------------------------------------------------------------------------------
 - A Handlebars helper is a simple identifier that may be followed by parameters (separated by a space)
 - There are two kinds of helpers:
  - function helpers: meant for single expressions
  - block helpers: used in block expressions

 - Helpers are used in blocks
 - syntax:
  - {{#helperName parameter1 parameter2}}
      some content here
    {{/helperName}}

 - Each parameter is a Handlebars expression

 - Some built-in handlebars helpers:

  - if: The if helper is similar to an if statement. If the condition evaluates to a truthy value, Handlebars will render the block {{#if parameter}}{{/if}}

  - else: just like in a vaillaJS script, the else statement is considered if the if statement returns false

  - each: used to iterate over an array: {{#each arrayName}}{{/each}}

  - unless: The unless helper is the inverse of the if helper, It renders the block when the condition evaluates to a falsy value.

  - with:

  - this: refer to the individual array item by using the keyword {{this}} inside the block

  - index: The index of the array’s element can be rendered by using {{@index}}

 - CUSTOM HELPERS:
  - You can create your own helpers to perform complex logics using the expression system that Handlebars provides

  - created using Handlebars.registerHelper() method

  - there are two things needed for a custom helper:
    - a custom function helper:
                        Handlebars.registerHelper("helperName", function(arg, arg, arg, options){
                          // this function is executed when the block helper is used
                        })
    - a custom block helper: Custom block helpers are used in the same way as function helpers, but the syntax is a bit different.
                        {{#helperName par par par}}
                          content here
                        {{/helperName}}

  - Options: When we register a custom block helper, Handlebars automatically adds an options object as the last parameter to the callback function. This options object has a fn() method that allows us to change the context of the object temporarily to access a certain property. The options parameter lets you use the fn() method where you can pass in the data.

  -  if we want to pass more parameters to the helper’s callback function we can write them in the template after the first parameter separated by a space.

*/

// retrieve the template from the HTML by using its id
var template1 = document.getElementById("demo-1").innerHTML;

// compile the template
var transform1 = Handlebars.compile(template1);

// the context used for the output in the HTML using an object
var data1 = {
  "name" : "adrian",
  "occupation" : "super hero"
};

// inject the HTML into the template - output
var output1 = transform1(data1);

// inject the HTML into the web page
var displayDiv1 = document.getElementById("occupationData");
displayDiv1.innerHTML += output1;


// ------------------------------------------------------------------- practice1

var template2 = document.getElementById("practice1").innerHTML, // retrieve the template from the HTML
    transform2 = Handlebars.compile(template2), // compile the template into a function

    // html data object
    data2 = { // the context used for the output in the HTML using an object

      "news1" : "CNN", // this data will render as html
      "news2" : "Fox", // this data will render as html
      "news3" : "NBC", // this data will render as html
      "news4" : "abc" // this data will render as html

    },
    output2 = transform2(data2), // inject the HTML into the template - output

    // inject the HTML into the web page
    displayDiv2 = document.getElementById("newsData");
    displayDiv2.innerHTML += output2;

// ------------------------------------------------------------------- practice1

// ------------------------------------------------------------------- practice2

var template3 = document.getElementById("practice2").innerHTML,
    transform3 = Handlebars.compile(template3),
    data3 = {
      "user1" : "adrian",
      "age1" : 36,
      "user2" : "mikey",
      "age2" : 32,
      "user3" : "larissa",
      "age3" : 40,
      "user4" : "myra",
      "age4" : 42,
    },
    output3 = transform3(data3),
    displayDiv3 = document.getElementById("ageData");
    displayDiv3.innerHTML += output3;

// ------------------------------------------------------------------- practice2

// ------------------------------------------------------------------- practice3

var template4 = document.getElementById("practice3").innerHTML,
    transform4 = Handlebars.compile(template4),
    data4 = {
      "country1" : "America",
      "currency1" : "<i>Dollars</i>", // note that html tags can be rendered from here
      "country2" : "Mexico",
      "currency2" : "<i>Pesos</i>", // note that html tags can be rendered from here
      "country3" : "Germany",
      "currency3" : "<i>Euros</i>", // note that html tags can be rendered from here
    },
    output4 = transform4(data4),
    displayDiv4 = document.getElementById("moneyData");
    displayDiv4.innerHTML += output4;

// ------------------------------------------------------------------- practice3

// ------------------------------------------------------ using blocks and paths
var teamTemplate = document.getElementById("teamTemplate").innerHTML,
    transformData = Handlebars.compile(teamTemplate),
    teamData = {

      // use a path "../" in the html to grab this un-nested data
      "title" : "Super Hero",

      // website object
      "website" : {
        "name" : "RiotMind.nyc"
      },

      // heroes array of hero objects
      // handlebars block iterates through the data in this array
      "heroes" : [
        {"hero" : "Spider Man"},
        {"hero" : "Iron Man"}
      ]
    },
    teamOutput = transformData(teamData),
    displayTeamDiv = document.getElementById("teamDiv");

    displayTeamDiv.innerHTML += teamOutput;
// ------------------------------------------------------ using blocks and paths






// --------------------------------------------------------------------- helpers
// ----------------- USING THE EACH HELPER
var countryTemplate = document.getElementById("helperEachTemplate").innerHTML,
    transformCountries = Handlebars.compile(countryTemplate),
    countryData = {
      "countries" : ["America", "Brazil", "England", "India"],
      "birds" : ["Eagle", "Raven", "Hawk", "Sparrow", "Dodo"],
      "commonNames" : [
        {"firstName" : "Ritesh", "lastName" : "Andubarr"},
        {"firstName" : "Jengdoosh", "lastName" : "Malovreem"},
        {"firstName" : "Brotinur", "lastName" : "Jenkins"},
      ]
    },
    countryOutput = transformCountries(countryData),
    displayHelperDiv = document.getElementById("helperEachDiv");

    displayHelperDiv.innerHTML += countryOutput;


// ----------------- USING THE IF/ELSE HELPERS
var veggieTemplate = document.getElementById("helperIfElseTemplate").innerHTML,
    transformVeggies = Handlebars.compile(veggieTemplate),
    ifElseData = {
      "fruits" : [],
      "veggies" : ["tomatoes", "corn", "lettuce"]
    },
    ifElseOutput = transformVeggies(ifElseData),
    displayIfElseDiv = document.getElementById("helperIfElseDiv");

    displayIfElseDiv.innerHTML += ifElseOutput;


// ----------------- USING CUSTOM HELPERS




// --------------------------------------------------- CUSTOM FUNCTION HELPER
Handlebars.registerHelper("studyStatus", function(passingYear){// creating a custom helper
  // the logic in this custom helper
  if(passingYear < 2025){
    return "passed";
  }else{
    return "failed";
  };
});

// template for custom helper
var customTemplate1 = document.getElementById("customHelperTemplate1").innerHTML,
    transformCustom1 = Handlebars.compile(customTemplate1),
    customData1 = {
      score : Math.ceil(Math.random(20) * Math.max(100)),
      "students" : [// an array of objects
        {"name" : "john", "passingYear" : 2015},
        {"name" : "jane", "passingYear" : 2016},
        {"name" : "jim", "passingYear" : 2036},
        {"name" : "jess", "passingYear" : 2042},
        {"name" : "joe", "passingYear" : 2006},
        {"name" : "jake", "passingYear" : 2019}
      ]
    },
    customOutput = transformCustom1(customData1),
    displayCustomHelper1Div = document.getElementById("customHelper1");

    displayCustomHelper1Div.innerHTML += customOutput;
// --------------------------------------------------- CUSTOM FUNCTION HELPER




// --------------------------------------------------- CUSTOM FUNCTION HELPER
Handlebars.registerHelper("membership", function(age){
  if(age == 35){
    return "membership Granted";
  }else if(age < 35){
    return "membership denied";
  }else{
    return "membership pending";
  }
});

// template for custom helper
var membersTemplate = document.getElementById("membersTemplate").innerHTML,
    compileMembersTemplate = Handlebars.compile(membersTemplate),
    memberData = {
      "members" : [
        {"member" : "sally", "age" : 29},
        {"member" : "debbie", "age" : 42},
        {"member" : "waly", "age" : 17},
        {"member" : "tommy", "age" : 35},
        {"member" : "genessy", "age" : 52},
        {"member" : "kimmy", "age" : 24},
        {"member" : "timmy", "age" : 33},
        {"member" : "justin", "age" : 35},
        {"member" : "billy", "age" : 38},
        {"member" : "butch", "age" : 37},
        {"member" : "lou", "age" : 35}
      ]
    },
    memberDataOutput = compileMembersTemplate(memberData),
    displayMemberDataOutput = document.getElementById("membersDiv");

    displayMemberDataOutput.innerHTML += memberDataOutput;
// --------------------------------------------------- CUSTOM FUNCTION HELPER




// --------------------------------------------------- CUSTOM BLOCK HELPER
// When we register a custom block helper, Handlebars automatically adds an options object as the last parameter to the callback function.
// The options parameter lets you use the fn() method where you can pass in the data.
Handlebars.registerHelper("studentStatus", function(data, options){
  var len = data.length,
      returnData = ""; // an empty string

  // change the value of the passingYear to passed/not passed based on the conditions.
  // using a ternary conditional
  // this loop is used to inject the conditions of the ternary into the html, based on the data being presented in the template.
  for(var i = 0; i < len; i++){
    data[i].passingYear = (data[i].passingYear < 2015) ? "passed" : "not passed";

  /*
    the above ternary as an if statement:

    if(data[i].passingYear < 2015){
      return "passed";
    }else{
      return "not passed";
    }
  */

    /*
      options.fn(data[i]) - this fn, temprarily changes the scope of the whole custom helper to data[i]. So the information in the custom block helper in the html {{name}} = data[i].name in the template.
    */
    returnData = returnData + options.fn(data[i]);
  }

  return returnData;
});


// setting up the template
var
    // grab the template
    studentsTemplate = document.getElementById("studentsTemplate").innerHTML,

    // compile the template for use
    compileStudentsTemplate = Handlebars.compile(studentsTemplate),

    //create the data
    studentsData = {
      "students" : [
        {"name": "jim", "passingYear" : 2013},
        {"name": "mike", "passingYear" : 2016}
      ]
    },

    // output the data using the compiled template
    studentsDataOutput = compileStudentsTemplate(studentsData);

    // setup the outputted data to be displayed in the containing div in the html
    displayStudentsDataOutput = document.getElementById("studentsDiv");

    // inject the outputted data into the html
    displayStudentsDataOutput.innerHTML += studentsDataOutput;
// --------------------------------------------------- CUSTOM BLOCK HELPER




// --------------------------------------------------- CUSTOM BLOCK HELPER

// helper
Handlebars.registerHelper("athleteSize", function(data, options){
  var len = data.length,
      returnData = "";

  for(var i = 0; i < len; i++){
    data[i].height = (data[i].height < 6.4) ? "Athlete is tall enough." : "Athlete must hit the gym first.";
    returnData = returnData + options.fn(data[i]);
  };

  return returnData;

});

// template
var sizeTemplate = document.getElementById("sizeTemplate").innerHTML,
    compileSizeTemplate = Handlebars.compile(sizeTemplate),
    sizeData = {
      "athletes" : [
        {"athlete" : "Bo Jackson", "height" : 6.5},
        {"athlete" : "Michael Jordan", "height" : 6.6},
        {"athlete" : "Daryl Strawberry", "height" : 6.2}
      ]
    },
    sizeDataOutput = compileSizeTemplate(sizeData),
    displaySizeDataOutput = document.getElementById("sizeDiv");
    displaySizeDataOutput.innerHTML += sizeDataOutput;
// --------------------------------------------------- CUSTOM BLOCK HELPER




// --------------------------------------------------- CUSTOM BLOCK HELPER
Handlebars.registerHelper("randomObjects", function(data, options){

  var show = "",
      getData = "",
      len = data.length,

      ran = function(a, b, c){
        if(a < 100 && a > 50){
          show = "random 1: " + a;
        }else if(b < 50 && b > 0){
          show = "random 2: " + b;
        }else if(c <= a || c >= b){
          show = "random 3: " + c;
        }else{
          show = "nope!";
        };
      },

      x = ran(
            Math.floor(Math.random() * 100) + 1,
            Math.floor(Math.random() * 100) + 1,
            Math.floor(Math.random() * 100) + 1
          );

  for(var i = 0; i < len; i++){
    data[i].size = x;
    getData = getData + options.fn(data[i]);
  }

  return getData += show;

});


var showTemplate = document.getElementById("showTemplate").innerHTML,
    compileShowTemplate = Handlebars.compile(showTemplate),
    showData = {
      "stuff" : [
        {"weight": 200, "size": 50},
        {"weight": 520, "size": 60},
        {"weight": 472, "size": 30},
        {"weight": 166, "size": 80}
      ]
    },
    showDataOutput = compileShowTemplate(showData),
    displayShowData = document.getElementById("showDiv");

displayShowData.innerHTML += showDataOutput;
// --------------------------------------------------- CUSTOM BLOCK HELPER
// --------------------------------------------------------------------- helpers




// ----------------------------------------------------------- partial templates
// calling the register partial helper method and giving it parameters
Handlebars.registerPartial(
  // name of partial template
  "dirTemplate",

  // stuff for partial template
  "{{domain}} is {{status}} for {{website}}"
);

var dirTemplate = document.getElementById("dirTemplate").innerHTML,
    compile = Handlebars.compile(dirTemplate),
    // the context seves as the arguments for the partial template function being called
    context = {
      "domain" : ".org",
      "status" : "active"
    },
    output = compile(context),
    render = document.getElementById("dirDiv");
    render.innerHTML += output;




// ---------------------------------- practice
// partial
Handlebars.registerPartial(
  //name of partial
  "dragons",
  "{{breed}} is {{color}} with {{element}} powers <br/>"
);

var dragonTemplate = document.getElementById("dragonTemplate").innerHTML,
    compile = Handlebars.compile(dragonTemplate),
    // the context seves as the arguments for the partial template function being called
    context = {
      "breed" : "Razorback",
      "color" : "green",
    },
    output = compile(context),
    render = document.getElementById("dragonDiv");
    render.innerHTML += output;
// ---------------------------------- practice


// ----------------------------------------------------------- partial templates
