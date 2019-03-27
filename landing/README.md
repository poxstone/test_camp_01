# Static template

## Requirements
- install **nodejs 8+** and global sdependencies
    ```bash
    npm i -g stylus nib pug-cli http-server;
    ```

## Edit Frontend

- html render from pug
    ```bash
    pug -w -P -o ./html/ ./src/html/index.pug;
    ```
- css render from stylus
    ```bash
    stylus -u nib -w ./src/css/style.styl -o ./css/;
    ```

## Run local server

- localhost:8080
    ```bash
    http-server -p 8080 .;
    ```