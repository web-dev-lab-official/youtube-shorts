#!/bin/bash

# Stop on first error
set -e

# Initialize npm project
npm init -y

# Install TypeScript locally
npm install --save-dev typescript

# Create tsconfig.json
npx tsc --init

# Compile all TypeScript files
npx tsc

# Compile a specific file only
npx tsc 001-bugs-with-type-any.ts

# Done
echo "TypeScript setup and build complete ✅"
