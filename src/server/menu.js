global.showHelp = () => {
  Browser.msgBox('Develop Google Apps Script project locally inside VS Code');
};

global.showCredits = () => {
  SpreadsheetApp.getActiveSpreadsheet().toast('Developed by Amit Agarwal @labnol');
};

global.onOpen = () => {
  try {
    SpreadsheetApp.getUi()
      .createMenu('Apps Script Starter')
      .addItem('Help', 'showHelp')
      .addSeparator()
      .addItem('Credits', 'showCredits')
      .addToUi();
  } catch (f) {
    Logger.log(f.message);
  }
};
