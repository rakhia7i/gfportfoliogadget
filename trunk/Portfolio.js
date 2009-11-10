//******************
// Definition of the Portfolio class for the GFPortfolio gadget.
// Each instance of the class is used to store information about one stock.

function Portfolio()
{
	// Create an empty array of stocks
	this.stocks = new Array();
	this.addSymbol = addSymbol;
	this.findSymbol = findSymbol;
	this.displaySymbols = displaySymbols;
}

function findSymbol(sym) {
// Expect: stock ticker symbol
// Return: True or False
// Looks for an element in the 'stocks' array corresponding
// to the symbol.  Returns true if found and false otherwise

	debugOutput("findSymbol: stocks: " + this.stocks + " sym: " + sym);
	for (var i in this.stocks) {
		debugOutput("findSymbol: i: " + i + "sym: " + this.stocks[i]);
		if (this.stocks[i] == sym) {
			return true;
		}
	}
	// If we got through the loop it means we didn't find it
	return false;
}

function addSymbol (sym) {
// Expect: stock ticker symbol
// Return: Nothing
// Adds the symbol to the Portfolio object

	// Make sure it's not in there first
	if ( ! this.findSymbol(sym) ) {
		this.stocks.push(sym);
		alert("Symbol: " + sym + " added");
	} else {
		alert("Symbol: " + sym + " exists");
	}
}

function displaySymbols() {
// Expect: Nothing
// Return: Nothing
// Displays the symbols in the stocks array
	debugOutput("displaySymbols: stocks: " + this.stocks);
	for (var i in this.stocks) {
		debugOutput("displaySymbols: Symbol: " + this.stocks[i]);
	}

}

function debugOutput(text) {
// Expect: text to print
// Return: Nothing
// Prints the text as debug text in the HTML output
	document.write("Debug: " + text + "<br>\n");
}