// selecting dom elements
const summaryItemTemplateEl = document.querySelector("[data-summary-item-template]");
const summaryItemsContainerEl = document.querySelector(".summary-items");
const resultScoreEl = document.querySelector(".result-score").children[0];
const resultsSummaryWrapperEl = document.querySelector(".result-summary");
const resultsWrapperEl = document.querySelector(".results");
const summaryWrapperEl = document.querySelector(".summary");

resultsWrapperEl.addEventListener("click", () => {
    summaryWrapperEl.classList.toggle("summary-visible");
    resultsSummaryWrapperEl.classList.toggle("results-summary-sliding");
});

// fetching data
fetch('./data.json')
    .then(res => res.json())
    .then(data => {
        let totalScore = 0;
        let averageScore;

        data.forEach((element, index) => {
            // cloning content from template
            const summaryItem = summaryItemTemplateEl.content.cloneNode(true).children[0];

            // adding specific data attribute to each summary item
            summaryItem.setAttribute("data-item-type", `accent-${index}`);

            // selecting summary item's elements
            const summaryItemPictureEl = summaryItem.querySelector(".summary-item-picture");
            const summaryItemTitleEl = summaryItem.querySelector(".summary-item-title");
            const summaryItemScoreEl = summaryItem.querySelector(".summary-item-score").children[0];

            // adding things in summary item's elements
            summaryItemPictureEl.src = element.icon;
            summaryItemTitleEl.textContent = element.category;
            summaryItemScoreEl.textContent = element.score;

            // adding every summary item in the container
            summaryItemsContainerEl.append(summaryItem);

            // counting total number from every summary item's score
            totalScore += element.score;
        });

        // adding average number in result score element
        averageScore = Math.round(totalScore / data?.length);
        resultScoreEl.textContent = averageScore;
    });