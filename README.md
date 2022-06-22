# codespace-oddity

## Workshop instructions

1. This repository is a template. Use it when creating your own personal repository **using this organization as the owner**, NOT under your personal profile. You can just click on the "Use this template" green button to get started. 
1. Open this repository in a new Codespace and wait for the load to be fully executed. Wait for VSCode to open in your browser, you should then see in the terminal that NPM is being installed.
1. Once NPM installation is completed, the terminal window should have only one tab and you can type `uname -a` and hit `enter`. You will see that this codespace runs on Linux on Azure. 
1. Now let's run our application with `npm run dev` and hit `enter`. 
1. After a little bit of processing, press the `cmd` or `ctrl` key and click on the `https://localhost:3000` link and see our demo application running. If you are using VSCode in the browser, you will notice that the browser URL is not actually localhost. If you are using you local VSCode, the browser will show localhost but this URL is proxified transparently to your codespace. 
1. Open the left panel by clicking on the hamburger button (the three horizontal lines) and click through the icons. You will notice that one of them doesn't work. It relies on `pages\song-list.vue` which makes a REST call to the data service implemented by `api/db.js`. You will notice this service uses mongodb, which is not available. Let's add this. 
1. Stop the app by hitting `ctrl+c` in the terminal window. 
1. Use `F1` or `CMD+Shift+p` to access the palette. Start typing `Codespaces` and select 'Add Development Container Configuration Files...'. Then select 'NodeJS & MongoDB', and select the default version (`14-buster`). Do not add extra features, simply click `Ok`. The codespaces files have been created in the `.devcontainer` folder. 
1. Rebuild the container by clicking on `Rebuild now` in the dialog, or click the `Codespaces` link on the lower left corner of the window, and then select `Rebuild Container` at the top.
1. Once the Codespace has finished reloading, you should see that there is a new MongoDB extension in VSCode. You can use it to connect to the local DB by clicking on `Add Connection` and then use `mongodb://localhost` as the connection string. You will notice that the database is empty, so let's make sure it is populated with the content from `data/bowie.csv`.  
1. Modify the `devcontainer.json` file so that test data is loaded in the DB at build time. Replace the line 
```
// "postCreateCommand": "yarn install",
```  
with 
```
"postCreateCommand": "npm install && mongoimport --db mydb --collection songs --type=csv --file /workspaces/codespace_oddity/test/data/bowie.csv --headerline && cat .devcontainer/welcome-message.txt",
```
12. Save the file and rebuild the Codespace. Once it is up again, you should be able to browse the data under the database `mydb` from the MongoDB extension. 
1. Run the app by entering `npm run dev` in the terminal or clicking tha play button next to `dev` from the `NPM SCRIPTS` panel. Clicking on the `Songs` button in the app should now display the data :tada: 
1. If you look at the file `pages/song-list.vue` which is responsible for  rendeing the list of songs, you will see that there is no code highlighting, which is not great. Let's fix that by adding an extension to our codespace. Click on the Extensions button (the Tetris looking squares) on the left bar and search for `Vetur`. Many other VueJS extensions are available, feel free to use the one you like. Now we could click on install and enjoy it right away, but that would mean that a new codespace would not have it, and our colleague would need to do the same as well. So instead of installing it, let's right click on the `Vetur` item and select `Add to devcontainer.json`. Then commit/push this files and rebuild the codespace. Now have a look at the Vue file... :sparkles: 
1. Now we want to add another tool in our codespace, but we actually want to add it to all our codepsaces, for this project but also others, future and past. It is then a personal preference that we need to store within our GitHub profile. Turn on `Settings Sync` using the cog wheel button on the lower part of the right pannel. Eventually merge the settings and then select `Extensions` from the same cog wheel button. Add `GitHub Copilot` to your favorite extensions. 

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out the [documentation](https://nuxtjs.org).

## Special Directories

You can create the following extra directories, some of which have special behaviors. Only `pages` is required; you can delete them if you don't want to use their functionality.

### `assets`

The assets directory contains your uncompiled assets such as Stylus or Sass files, images, or fonts.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/assets).

### `components`

The components directory contains your Vue.js components. Components make up the different parts of your page and can be reused and imported into your pages, layouts and even other components.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/components).

### `layouts`

Layouts are a great help when you want to change the look and feel of your Nuxt app, whether you want to include a sidebar or have distinct layouts for mobile and desktop.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/layouts).


### `pages`

This directory contains your application views and routes. Nuxt will read all the `*.vue` files inside this directory and setup Vue Router automatically.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/get-started/routing).

### `plugins`

The plugins directory contains JavaScript plugins that you want to run before instantiating the root Vue.js Application. This is the place to add Vue plugins and to inject functions or constants. Every time you need to use `Vue.use()`, you should create a file in `plugins/` and add its path to plugins in `nuxt.config.js`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/plugins).

### `static`

This directory contains your static files. Each file inside this directory is mapped to `/`.

Example: `/static/robots.txt` is mapped as `/robots.txt`.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/static).

### `store`

This directory contains your Vuex store files. Creating a file in this directory automatically activates Vuex.

More information about the usage of this directory in [the documentation](https://nuxtjs.org/docs/2.x/directory-structure/store).
