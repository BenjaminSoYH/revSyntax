const vscode = require('vscode');

function activate(context) {
  const disposable = vscode.commands.registerCommand('runRevCommands', async () => {

    const editor = vscode.window.activeTextEditor;
    if (!editor) return;
    await vscode.commands.executeCommand('workbench.action.terminal.runSelectedText');

    if (editor.selection.isEmpty) {
      const pos = editor.selection.active;
      const nextLine = pos.line + 1;

      if (nextLine < editor.document.lineCount) {
        const nextLineLength = editor.document.lineAt(nextLine).text.length;
        const newPos = new vscode.Position(nextLine, nextLineLength);
        editor.selection = new vscode.Selection(newPos, newPos);;
        editor.revealRange(new vscode.Range(newPos, newPos));
      }
    }
  });

  context.subscriptions.push(disposable);
}


module.exports = {
  activate
}