# Compass

[![GitHub Repository](https://img.shields.io/badge/GitHub-grey?style=for-the-badge&logo=GitHub)](https://github.com/Compass/compass)
[![Compass Docs](https://img.shields.io/badge/Compass-3b3b3b.svg?style=for-the-badge&logo=data:image/svg%2bxml;base64,PHN2ZyB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPjxkZWZzPjxwYXRoIGlkPSJhIiBkPSJNMjU2IDBjLTQgNjgtMTQgMTMyLTQwIDE5MS0yMSA0Ni02OCA3MC0xMjAgNjMtNDQtNS04My00My05My04Ny0xMS00OSA5LTEwMCA1My0xMjJDMTE3IDEzIDE4NSA0IDI1NiAwIi8+PC9kZWZzPjxtYXNrIGlkPSJiIiBmaWxsPSIjZmZmIj48dXNlIHhsaW5rOmhyZWY9IiNhIi8+PC9tYXNrPjx1c2UgZmlsbD0iI2ZmZiIgeGxpbms6aHJlZj0iI2EiLz48ZyBtYXNrPSJ1cmwoI2IpIj48cGF0aCBkPSJtMTE0IDc2LTggNDktMzYtMjYgMjcgMzYtNTAgNyA1MCA4LTI3IDM1IDM2LTI2IDggNTAgNy01MCAzNCAyNi0yNS0zNSA0OS04LTQ5LTdjOS0xMSAyNS0zNiAyNS0zNmwtMzQgMjctNy01ME0yNTYgMGMtNCA2OS0xNCAxMzItNDAgMTkyLTIxIDQ1LTY3IDY5LTEyMCA2My00NC02LTgzLTQzLTkzLTg3LTExLTQ5IDktMTAxIDUzLTEyM0MxMTcgMTQgMTg1IDUgMjU2IDAiIGZpbGw9IiNFMjE3MDgiLz48cGF0aCBkPSJNNiAxMDRhMTA4IDEwOCAwIDAgMSAzNi01MCAxMjcgMTI3IDAgMCAxIDE0LTlBNTI3IDUyNyAwIDAgMSAyMjggMmwyOC0yQzE4MSAxNyAxNDEgMzMgOTMgNTQgNDQgNzUgMyAxMjEgMCAxMzRsNi0zMFoiIGZpbGwtb3BhY2l0eT0iLjMiIGZpbGw9IiNGQTUyNEEiLz48cGF0aCBkPSJtOTcgMjU5LTE1LTNhMTE4IDExOCAwIDAgMS03OS04NGMtMi05LTMtMTctMy0yNiAxIDgwIDk0IDkyIDExOSA5MiA0MCAwIDM5LTggMTAxLTUxbC00IDljLTE1IDMyLTQyIDU0LTc2IDYxYTEyNiAxMjYgMCAwIDEtNDMgMloiIGZpbGwtb3BhY2l0eT0iLjMiIGZpbGw9IiNBRTBFMTAiLz48L2c+PC9zdmc+)](http://beta.compass-style.org/)

Replace `File.exists?` with `File.exist?`, deprecated since Ruby 2.1.0

## Gems
- [compass-1.0.3](https://rubygems.org/gems/compass)
- [compass-core-1.0.3](https://rubygems.org/gems/compass-core)

## Modify
How to modify a Ruby gem [`source`](https://guides.rubygems.org/command-reference/#gem-build)

1. Install [Ruby](https://www.ruby-lang.org/en/documentation/installation/)
2. Open terminal
3. Install compass: 
```bash
gem update --system

gem install compass
```
4. Open or create a new directory
5. Download `.gem` file: 
```bash
gem fetch compass

gem fetch compass-core
```
6. Unpack .gem: 
```bash
gem unpack compass-1.0.3.gem

gem unpack compass-core-1.0.3.gem
```
7. Create `.gemspec` file:
```bash
gem spec compass-1.0.3.gem --ruby > compass-1.0.3/compass-1.0.3.gemspec

gem spec compass-core-1.0.3.gem --ruby > compass-core-1.0.3/compass-core-1.0.3.gemspec
```
8. Navigate to the `compass` or `compass-core` directory: 
```bash
cd compass-1.0.3

cd compass-core-1.0.3
```
9. Replace `File.exists?` with `File.exist?`
   - [compass](https://github.com/search?q=repo:Compass/compass%20path:/^cli\//%20%22.exists%22&type=code)
   - [compass-core](https://github.com/search?q=repo:Compass/compass%20path:/^core\//%20%22.exists%22&type=code)
10. Build `.gem` file: 
```bash
gem build compass-1.0.3.gemspec

gem build compass-core-1.0.3.gemspec
```

## Reinstall
- Go to directory containing `.gem` file
- Run: 
```bash
gem install --local compass-1.0.3.gem

gem install --local compass-core-1.0.3.gem
```
