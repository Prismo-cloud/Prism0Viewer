# Prism0 Viewer

**Prism0 Viewer** is a powerful VS Code extension designed to enhance focus in complex projects. It highlights selected code while dimming the rest, minimizing distractions.

## Features

- **Highlight selected code**: Press `Ctrl + Alt + Q` to bring the selected code into focus while dimming the surroundings.
- **Remove highlighting**: Press `Ctrl + Alt + W` to restore normal visibility.
- **Custom sidebar**: Quickly toggle effects using a dedicated sidebar.
- **Minimalist and distraction-free design**: Helps you focus on important code sections.

## Installation

### Install from VS Code Marketplace

1. Open **VS Code**.
2. Go to the **Extensions** tab (`Ctrl + Shift + X`).
3. Search for **Prism0 Viewer**.
4. Click **Install**.
5. Once installed, open the command palette (`Ctrl + Shift + P`) and run `Prism0: Toggle Focus Mode` to activate the extension.

### Manual Installation

1. Download the latest `.vsix` file from the [Releases](https://github.com/your-repo-link/releases) page.
2. Open **VS Code**.
3. Open the command palette (`Ctrl + Shift + P`) and search for `Extensions: Install from VSIX`.
4. Select the downloaded `.vsix` file to install it.

## Development & Debugging

1. **Open the project in VS Code**.
2. If dependencies are not installed, run:
   ```sh
   npm install
   ```
3. **Run the extension for testing** by pressing `F5` to launch a **VS Code Extension Host** window.
4. Test the extension in the new window.
5. Stop debugging with `Shift + F5`.

## Publishing to VS Code Marketplace

1. Install the `vsce` tool (if not already installed):
   ```sh
   npm install -g @vscode/vsce
   ```
2. Package the extension:
   ```sh
   vsce package
   ```
   This will generate a `.vsix` file.
3. Log in to VS Code Marketplace:
   ```sh
   vsce login <your-publisher-name>
   ```
4. Publish the extension:
   ```sh
   vsce publish
   ```
   To update an existing extension:
   ```sh
   vsce publish minor  # For minor updates
   vsce publish patch  # For patch updates
   ```

## Usage

1. **Highlight Selected Code**
   - Select the code you want to highlight.
   - Press `Ctrl + Alt + Q`.
   - The rest of the code will be dimmed.

2. **Remove Highlighting**
   - Press `Ctrl + Alt + W` to restore the default view.

3. **Sidebar Controls**
   - Open the **Prism0 Viewer** sidebar to quickly toggle highlighting on/off.

## Contributing

Feel free to submit issues, feature requests, or pull requests on [GitHub](https://github.com/your-repo-link).

## License

This project is licensed under the **MIT License**.

---

> *"Don't Panic!" – The Hitchhiker’s Guide to the Galaxy*

