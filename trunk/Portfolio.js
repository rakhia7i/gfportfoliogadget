//******************
// Definition of the Portfolio class for the GFPortfolio gadget.
// Each instance of the class is used to store information about one stock.

function Portfolio(symbol)
// Expect: Nothing
// Return: Nothing
// Constructor.  Creates and empty Portfolio object
{
	// Create an empty array of stocks
	this.stocks = new Array();
}

Portfolio.prototype = {

	addSymbol: function(sym) {
		// Expect: stock ticker symbol
		// Return: Nothing
		// Adds the symbol to the Portfolio object

		// Make sure it's not in there first
		var found = false;
		for (var i in this.stocks) {
			if (this.stocks[i] == sym) {
				found = true;
			}
		}
		if ( !found ) {
			this.stocks.push(sym);
		}
	   }
}