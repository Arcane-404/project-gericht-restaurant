```yml
name: Test ๐งช # 3

on:
  push:
    branches:
      - main
      - develop

jobs:
  Test:
    name: Test ๐งช
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
      - name: โช Checkout repo
        uses: actions/checkout@v2
      - name: ๐ข Setup node ${{ matrix.node-version }}
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
        uses: actions/setup-node@v2
      - name: ๐ Start
        run: npm ci
        run: npm run test --if-present
      - name: ๐ Finish (3)
