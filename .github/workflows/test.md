```yml
name: Test 🧪 # 3

on:
  push:
    branches:
      - main
      - develop

jobs:
  test:
    name: Test 🧪
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x, 14.x, 16.x]
    steps:
      - name: ⚪ Checkout repo
        uses: actions/checkout@v2
      - name: 🟢 Setup node ${{ matrix.node-version }}
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'
        uses: actions/setup-node@v2
      - name: 👟 Start
        run: npm ci
        run: npm run test --if-present
      - name: 🏁 Finish (3)
