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
exports.activate = activate;
const vscode = __importStar(require("vscode"));
const SidebarViewProvider_1 = require("./SidebarViewProvider");
function activate(context) {
    const sidebarProvider = new SidebarViewProvider_1.SidebarViewProvider();
    vscode.window.registerTreeDataProvider("customView", sidebarProvider);
    let fadeStyle = null;
    context.subscriptions.push(vscode.commands.registerCommand("prism0.highlight", () => {
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
        if (fadeStyle)
            fadeStyle.dispose();
        fadeStyle = vscode.window.createTextEditorDecorationType({
            opacity: "0.2"
        });
        const rangesToFade = [];
        for (let i = 0; i < editor.document.lineCount; i++) {
            const line = editor.document.lineAt(i);
            if (!selection.intersection(line.range)) {
                rangesToFade.push(line.range);
            }
        }
        editor.setDecorations(fadeStyle, rangesToFade);
    }), vscode.commands.registerCommand("prism0.removeHighlight", () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor)
            return;
        if (fadeStyle) {
            editor.setDecorations(fadeStyle, []);
            fadeStyle.dispose();
            fadeStyle = null;
        }
    }));
}
//# sourceMappingURL=extension.js.map