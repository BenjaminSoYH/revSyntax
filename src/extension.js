const vscode = require('vscode');


function activate(context) {
  const disposable = vscode.commands.registerCommand('runRevCommands', async () => {
    await vscode.commands.executeCommand('workbench.action.terminal.runSelectedText');

    const editor = vscode.window.activeTextEditor;
    if (!editor) return;

    if (editor.selection.isEmpty) {
      const pos = editor.selection.active;
      const nextLine = pos.line + 1;
      const newPos = new vscode.Position(nextLine, 0);
      editor.selection = new vscode.Selection(newPos, newPos);
      editor.revealRange(new vscode.Range(newPos, newPos));
    }
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
