// Fetch data from the API URL
const URL =
"https://partners.every.org/v0.2/nonprofit/maps?apiKey=myPublicApiKey";

fetch(URL)
.then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  return response.json();
})
.then((data) => {
  console.log('Fetched Data:', data)


  // Clear the list before populating
  const listElement = document.getElementById("nonprofitTagsList");
  listElement.innerHTML = "";

  const nonprofitTags = data.data.nonprofitTags;

  nonprofitTags.forEach((tag) => {
    // Create a card element
    const card = document.createElement("li");
    card.className = "card";

    // Create an image element for the tag image
    const tagImage = document.createElement("img");
    tagImage.src = tag.tagImageUrl;
    tagImage.alt = tag.title;

    // Create a title element
    const tagTitle = document.createElement("div");
    tagTitle.textContent = tag.title;

    // Create a link element for the tag
    const tagLink = document.createElement("a");
    tagLink.href = tag.tagUrl;
    tagLink.textContent = "Learn More";
    tagLink.target = "_blank"; // Opens link in a new tab

    // Append elements to the card
    card.appendChild(tagImage);
    card.appendChild(tagTitle);
    card.appendChild(tagLink);

    // Append the card to the list
    listElement.appendChild(card);
  });
})
.catch((error) => {
  console.error("Error fetching data:", error);
});