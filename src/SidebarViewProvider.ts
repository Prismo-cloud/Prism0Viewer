import * as vscode from "vscode";

export class SidebarViewProvider implements vscode.TreeDataProvider<vscode.TreeItem> {
  getTreeItem(element: vscode.TreeItem): vscode.TreeItem {
    return element;
  }

  getChildren(): vscode.ProviderResult<vscode.TreeItem[]> {
    return [
      new SidebarTitle("◆◇◆  PRISM0 VIEWER  ◆◇◆"),
      new SidebarSeparator(),
      new SidebarDescription("Prism0 is built to enhance focus and clarity."),
      new SidebarDescription("By dimming distractions and highlighting what matters,"),
      new SidebarDescription("it creates an immersive, seamless coding experience."),
      new SidebarDescription("Navigate massive codebases or fine-tune critical sections"),
      new SidebarDescription("with unparalleled precision and ease."),
      new SidebarSeparator(),
      new SidebarDescription("⚡ **Highlight:** `CTRL + ALT + Q`"),
      new SidebarDescription("❌ **Remove Highlight:** `CTRL + ALT + W`"),
      new SidebarSeparator(),
      new SidebarSeparator(),
      new SidebarQuote("🚀 \"Don't Panic.\""),
      new SidebarQuote("— The Hitchhiker's Guide to the Galaxy")
    ];
  }
}

// Başlık için özel TreeItem
class SidebarTitle extends vscode.TreeItem {
  constructor(text: string) {
    super(text, vscode.TreeItemCollapsibleState.None);
    this.tooltip = text;
    this.contextValue = "title";
  }
}

// Açıklama için özel TreeItem
class SidebarDescription extends vscode.TreeItem {
  constructor(text: string) {
    super(text, vscode.TreeItemCollapsibleState.None);
    this.tooltip = text;
    this.contextValue = "description";
  }
}

// Alıntı için özel TreeItem
class SidebarQuote extends vscode.TreeItem {
  constructor(text: string) {
    super(text, vscode.TreeItemCollapsibleState.None);
    this.tooltip = text;
    this.contextValue = "quote";
  }
}

// Boşluk eklemek için özel TreeItem
class SidebarSeparator extends vscode.TreeItem {
  constructor() {
    super(" ", vscode.TreeItemCollapsibleState.None);
    this.contextValue = "separator";
  }
}

// Butonlar için özel TreeItem
class SidebarButton extends vscode.TreeItem {
  constructor(label: string, commandId: string) {
    super(label, vscode.TreeItemCollapsibleState.None);
    this.command = { command: commandId, title: label };
  }
}
