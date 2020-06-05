import React, { useEffect, useState } from "react";
import "./App.css";

import {
  Container,
  Col,
  Row,
  InputGroup,
  InputGroupAddon,
  Button,
  Input,Form
} from "reactstrap";

import Recipe from "./Recipe";

function App() {
  const APP_ID = "88a7c30e";
  const APP_KEY = "bc34e1cd7f4f9e9079e45862dcb58d17	";
  //url: `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('banana')

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = e => {
     setSearch(e.target.value);
     
  }

  const getSearch = e =>{
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <h1>Hello React</h1>
      <Container className="container">
        <Row>
          <Col xs="6">
            <Form onSubmit={getSearch}> 
            <InputGroup>
              <Input placeholder="Search the Recipe You Like" value={search} onChange={updateSearch} />
              <InputGroupAddon addonType="append">
                <Button type="submit" color="success">
                  Search
                </Button>
              </InputGroupAddon>
            </InputGroup>
            </Form>
          </Col>
        </Row>

        {recipes.map((recipe, i) => (
          <Recipe
            key={i}
            title={recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </Container>
    </div>
  );
}

export default App;
