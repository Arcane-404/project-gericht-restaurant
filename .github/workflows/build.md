```yml
name: Build 📦 # 2

on:
  push:
    branches:
      - main
      - develop

jobs:
  Build:
    name: Build 📦
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
      - name: ⚪ Checkout repo
        uses: actions/checkout@v2
      - name: 🟢 Setup node ${{ matrix.node-version }}
        uses: actions/setup-node@v2
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
      - name: 👟 Start
        run: npm ci
        run: npm run build --if-present
      - name: 🏁 Finish (2)
