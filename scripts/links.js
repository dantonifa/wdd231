const baseURL = "https://dantonifa.github.io/wdd230/";
const linksURL = "https://dantonifa.github.io/wdd230/data/links.json";
async function getLinks() {
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
  }
getLinks();
//Create the displayLinks() function and name the function's single parameter weeks. 
// Remember from the json data that you wrote and tested that the data is an array 
// of objects representing weeks of the term.
function displayLinks(weeks) {
    //Create a variable to store the HTML that will eventually be placed in the section element.
    let html = "";
    //Loop through the weeks array using the forEach() method.
    weeks.forEach(week => {
        //Create a variable to store the HTML for the week.
        let weekHTML = `
        <section>
            <h2>${week.week}</h2>
            <div class="grid">
        `;
        //Loop through the week's links array using the forEach() method.
        week.links.forEach(link => {
            //Add the HTML for each link to the weekHTML variable.
            weekHTML += `
            <div>
                <h3>${link.title}</h3>
                <p>${link.summary}</p>
                <a href="${link.url}">Link</a>
            </div>
            `;
        });
        //Add the closing div tag to the weekHTML variable.
        weekHTML += `</div></section>`;
        //Add the weekHTML to the html variable.
        html += weekHTML;
    });
    //Select the section element and add the html variable to the innerHTML property.
    document.querySelector("section").innerHTML=html;
}
//Call the getLinks() function.


