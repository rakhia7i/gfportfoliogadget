//******************
// Definition of the Portfolio class for the GFPortfolio gadget.
// Each instance of the class is used to store information about one stock.

function Portfolio()
{
	// Create an empty array of stocks
	this.stocks = new Array();
	this.addPriceData = addPriceData;
	this.displayPriceData = displayPriceData;
	this.displaySymbols = displaySymbols;
	this.makeDateEntry = makeDateEntry;
}

function addPriceData(symbol, date, price) {
//Expect: name of stock symbol, date as 'yyyy/mm/dd' and price
//Return: nothing
//Adds the stock into the object

	this.makeDateEntry(symbol, date);
	this.stocks[symbol][date]["price"] = price;
	//debugOutput("addPriceData: symbol: " + symbol + " date: " + date + " price: " + price +
	//	" entry: " + this.stocks[symbol].toString() + " date entry: " + this.stocks[symbol][date]);
}

function displayPriceData(symbol) {
//Expect: Symbol of data to display
//Return: Nothing
//Prints the data for this symbol using debugOutput()

	for (var date in this.stocks[symbol]) {
		debugOutput("displayPriceData: Stock: " + symbol + " date: " + date + " price: " + this.stocks[symbol][date]["price"]);
	}
}

function displaySymbols() {
// Expect: Nothing
// Return: Nothing
// Displays the symbols in the stocks array
	//debugOutput("displaySymbols: stocks: " + this.stocks);
	for (var stock in this.stocks) {
		debugOutput("displaySymbols: stock: " + stock);
	}

}

function makeDateEntry(symbol, date) {
//Expect:  Stock symbol and date
//Return:  Nothing
// If the symbol and/or date for the symbol don't exist then initialise them
// Otherwise do nothing

	// create the stock entry first if it doesn't exist.'
	if ( this.stocks[symbol] == null ) {
		//debugOutput("addPriceData: symbol: " + symbol + " entry: " + this.stocks[symbol]);
		this.stocks[symbol] = [];
	}
	if ( this.stocks[symbol][date] == null ) {
		this.stocks[symbol][date] = [];
	}

}

function debugOutput(text) {
// Expect: text to print
// Return: Nothing
// Prints the text as debug text in the HTML output
	document.write("Debug: " + text + "<br>\n");
}