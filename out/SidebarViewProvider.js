"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SidebarViewProvider = void 0;
const vscode = __importStar(require("vscode"));
class SidebarViewProvider {
    getTreeItem(element) {
        return element;
    }
    getChildren() {
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
exports.SidebarViewProvider = SidebarViewProvider;
// Başlık için özel TreeItem
class SidebarTitle extends vscode.TreeItem {
    constructor(text) {
        super(text, vscode.TreeItemCollapsibleState.None);
        this.tooltip = text;
        this.contextValue = "title";
    }
}
// Açıklama için özel TreeItem
class SidebarDescription extends vscode.TreeItem {
    constructor(text) {
        super(text, vscode.TreeItemCollapsibleState.None);
        this.tooltip = text;
        this.contextValue = "description";
    }
}
// Alıntı için özel TreeItem
class SidebarQuote extends vscode.TreeItem {
    constructor(text) {
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
    constructor(label, commandId) {
        super(label, vscode.TreeItemCollapsibleState.None);
        this.command = { command: commandId, title: label };
    }
}
//# sourceMappingURL=SidebarViewProvider.js.map