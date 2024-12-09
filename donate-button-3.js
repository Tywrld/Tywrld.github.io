function createWidget() {
    everyDotOrgDonateButton.createButton({
      selector: "#every-donate-btn",
    });
    everyDotOrgDonateButton.createWidget({
      selector: "#every-donate-btn",
      nonprofitSlug: "lilbubsbigfund",
    });
  }
  if (window.everyDotOrgDonateButton) {
    createWidget();
  } else {
    document.getElementById("every-donate-btn-js").onload = createWidget;
  }