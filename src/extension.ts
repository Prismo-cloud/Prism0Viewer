import * as vscode from "vscode";
import { SidebarViewProvider } from "./SidebarViewProvider";

export function activate(context: vscode.ExtensionContext) {
  const sidebarProvider = new SidebarViewProvider();
  vscode.window.registerTreeDataProvider("customView", sidebarProvider);

  let fadeStyle: vscode.TextEditorDecorationType | null = null;

  context.subscriptions.push(
    vscode.commands.registerCommand("prism0.highlight", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showInformationMessage("No editor is active.");
        return;
      }

      const selection = editor.selection;
      if (selection.isEmpty) {
        vscode.window.showInformationMessage("No code selected.");
        return;
      }

      if (fadeStyle) fadeStyle.dispose();

      fadeStyle = vscode.window.createTextEditorDecorationType({
        opacity: "0.2" 
      });

      const rangesToFade: vscode.Range[] = [];
      for (let i = 0; i < editor.document.lineCount; i++) {
        const line = editor.document.lineAt(i);
        if (!selection.intersection(line.range)) {
          rangesToFade.push(line.range);
        }
      }
      editor.setDecorations(fadeStyle, rangesToFade);
    }),

    vscode.commands.registerCommand("prism0.removeHighlight", () => {
      const editor = vscode.window.activeTextEditor;
      if (!editor) return;

      if (fadeStyle) {
        editor.setDecorations(fadeStyle, []);
        fadeStyle.dispose();
        fadeStyle = null;
      }
    })
  );
}
