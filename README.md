# RevSyntax 
RevSyntax is a Vscode extension supporting the [RevBayes](https://revbayes.github.io/) language

## Installation

1.  Open the **Extensions** view in Visual Studio Code (`Ctrl+Shift+X` or `Cmd+Shift+X`).
2.  Search for **Revbayes Syntax Highlight**.
3.  Click the **Install** button.
4.  If the extension does not activate immediately, it is recommended to reload Visual Studio Code (`Ctrl+Shift+P` or `Cmd+Shift+P` and type `Reload Window`).

## Features

The following features are exclusively available for files with the `.rev` and `.Rev` extensions.

### Syntax Highlighting

RevSyntax automatically applies syntax highlighting to your RevBayes code. 

You can customize the color theme used for syntax highlighting through Visual Studio Code's preferences: **File > Preferences > Theme > Color Theme**.

### Send to Terminal

RevSyntax integrates a "Send to Terminal" functionality, similar to that found in R language support extensions. 

First, run revbayes in a VScode terminal, then you will be able to send highlighted code to the terminal with (`Ctrl+Enter` or `Cmd+Enter`). 

( Note: The extension can still send code to the terminal even if RevBayes is not running. Make sure you've launched RevBayes to avoid unexpected behavior )


## License

[MIT](https://choosealicense.com/licenses/mit/)