# Pokémon GO Pokédex
This project is a client for the PokéAPI, which provides information about Pokémon. It allows users to view a list of Pokémon, select a specific Pokémon to view its details, and load more Pokémon in chunks. Additionally, users can filter the visible Pokémon by type.

# Live Demo
You can access the live demo of this application at GitHub Pages.[Live Demo](https://anastasiia-roiek.github.io/pokedex-webapp/)


# How to Run the App
To run this application locally, follow these steps:

### Clone the repository:
```git clone https://github.com/your-github-username/pokemon-go-pokedex.git```

### Navigate to the project folder:

```cd pokemon-go-pokedex```
### Install dependencies:

```npm install```
Start the development server:

```npm start```
Open http://localhost:3000.


# Features

- Click on a Pokémon to view its details, including its name, image, types, abilities, and other information.
- Filter visible Pokémon by type using the type filter on the left side of the screen.
- Adaptive styling for a seamless

# Technologies Used
React: JavaScript library for building user interfaces.
Axios: HTTP client for making API requests.
Sass: CSS preprocessor for styling the application.
GitHub Pages: Hosting the live demo of the app.

# API End
List Pokémon: `https://pokeapi.co/api/v2/pokemon/?limit=12
Pokémon Details: https://pokeapi.co/api/v2/pokemon/{{id}}
Pokémon Sprites: `https://pokeapi.co/api/v2/pokemon/{{id}}/sprites
List Pokémon Types: https://pokeapi.co/api/v2/type?limit=999

# Credits
- [PokéPokéAPI](https://pokeapi.co/)
- Design inspiration from talented designer.

# Contributing
Contributions to this project are welcome. If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request.
