module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  ignore: [
    '**/node_modules/**',
  ],
  plugins: [
    '@babel/plugin-transform-modules-commonjs' 
  ],
}