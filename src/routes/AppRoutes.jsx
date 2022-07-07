import { getAuth, onAuthStateChanged } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardRoutes from "./DashboardRoutes";
import PrivateRoutes from "./PrivateRouters";
import PublicRoutes from "./PublicRoutes";
import { useDispatch } from "react-redux";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import { getUserAction } from "../app/actions/user.action";
import { getPokemonSync } from "../app/actions/pokemon.action";
import { doc, getDoc } from "firebase/firestore";
import { dataBase } from "../firebase/firebaseConfig";

const AppRoutes = () => {
  const [cheking, setCheking] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const [pokemonData, setPokemonData] = useState([]);
  const dispatch = useDispatch();

  const getPokemonsAsync = async () => {
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=25";
    const res = await fetch(url);
    const data = await res.json();
    const pokemonsNamesData = data.results.map((pokemon) => {
      return pokemon.name;
    });
    const pokemonsDataFunciton = async () => {
      pokemonsNamesData.map(async (pokemon) => {
        const docRef = doc(dataBase, "data", pokemon);
        const data = await getDoc(docRef);
        if (data.exists()) {
          setPokemonData((prev) => [...prev, data.data()]);
        } else {
          console.log("No such document!");
        }
      });
    };
    pokemonsDataFunciton();
  };
  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user?.uid) {
        setIsLoggedIn(true);
        setUserData(user);
        dispatch(getUserAction(userData));
      } else {
        setIsLoggedIn(false);
        setUserData(null);
      }
      setCheking(false);
    });
  }, [setIsLoggedIn, setCheking]);

  useEffect(() => {
    getPokemonsAsync();
  }, [dispatch]);

  useEffect(() => {
    if (pokemonData.length > 0) {
      dispatch(getPokemonSync(pokemonData));
    }
  }, [dispatch, pokemonData]);

  if (cheking) {
    return (
      <div className="auth">
        <span>Loading...</span>
        <Spinner animation="border" />
      </div>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        {/* || -------------------- Public Routes -------------------- || */}
        <Route
          path="/login"
          element={
            <PublicRoutes isLoggedIn={isLoggedIn}>
              <SignIn />
            </PublicRoutes>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoutes isLoggedIn={isLoggedIn}>
              <SignUp />
            </PublicRoutes>
          }
        />
        {/* || -------------------- End of Public Routes -------------------- || */}

        {/* || -------------------- Private Routes -------------------- || */}
        <Route
          path="/*"
          element={
            <PrivateRoutes isLoggedIn={isLoggedIn}>
              <DashboardRoutes />
            </PrivateRoutes>
          }
        />
        {/* || -------------------- End of Private Routes -------------------- || */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
