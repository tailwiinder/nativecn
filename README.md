# NativeCN

A React Native UI component library inspired by shadcn/ui. Get beautiful, accessible UI components for your React Native apps by copying and pasting code.

## Installation & Usage

You need to have nativewind installed and setup in your project to use this library.

```bash
# Install via npm
npm install @nativecn/cli
# Or use directly with npx
npx @nativecn/cli [command]
```

### Initialize NativeCN in your project

```bash
npx nativecn init
```

The init command will:

1. Detect if your project uses NativeWind or StyleSheet
2. Create a nativecn-preset.js file with theme configuration
3. Add components directory structure
4. Install essential dependencies
5. Create utility functions

### Add components to your project

```bash
npx nativecn add button
```

Options:

- `--dir <directory>` - Target directory for components (default: './components/ui')
- `--overwrite` - Overwrite existing components

### Generate theme preset file (optional. this is asked to be done automatically when you run `npx nativecn init`. Use this if you want a more fine-grained control over the preset file.)

```bash
npx nativecn preset
```

Creates a nativecn-preset.js file with default theme colors.

## Available Components

- `button` - A versatile button component
- `accordion` - An accordion component
- `alert` - An alert component
- `alertdialog` - An alertdialog component
- And more to come!

## Features

- **Non-intrusive installation process** - Components as source code, not packages
- **Easy theming** - NativeWind preset for consistent styling
- **Flexible styling** - Works with NativeWind or React Native StyleSheet
- **Full control** - Customize components to your specific needs
- **Type safety** - Built with TypeScript for better development experience

## Development

To develop locally:

```bash
# Build the packages
npm run build

# Link for local development (simplified approach)
npm link

# Now you can run the CLI
npx nativecn init
npx nativecn add button
```

### Alternatively, you can link individual packages

```bash
# Link individual packages
npm link @nativecn/cli @nativecn/components

# Run commands
npx nativecn init
npx nativecn add button
```

## Contributing

We welcome contributions from everyone! Whether you're fixing a bug, adding a feature, or improving documentation, your help is appreciated.

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct, the development process, and how to get your pull request accepted.

### Quick Start for Contributors

1. Fork the repository
2. Clone your fork locally
3. Set up the development environment:
   ```bash
   npm install
   npm run build
   ```
4. Create a branch for your feature or bugfix
5. Make your changes
6. Test your changes
7. Submit a pull request

For more detailed instructions, please see the [Contributing Guidelines](CONTRIBUTING.md).

## Code of Conduct

We expect all participants to adhere to our [Code of Conduct](CODE_OF_CONDUCT.md). Please read it before participating.

## License

MIT

---

<div align="center">
  <p>If you find this project helpful, consider buying me a coffee ☕</p>
  <a href="https://buymeacoffee.com/tailwiinder">
    <img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" width="217" height="60" />
  </a>
</div>
