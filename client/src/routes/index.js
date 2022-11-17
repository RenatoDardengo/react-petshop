import React from "react";
import { BrowserRouter, Routes as RoutesDOM, Route } from "react-router-dom";
import Home from "../pages/Home";
import PetList from "../pages/PetList";
import PetCreate from "../pages/PetCreate";
import PetEdit from "../pages/PetEdit";
const Routes=()=> {
    return (
        <BrowserRouter>
            <RoutesDOM>
                
                <Route index element={<Home />} />
                <Route path="pets">
                    <Route index element={<PetList/>}/>
                    <Route path="create" element={<PetCreate />} />
                    <Route path="edit/:id" element={<PetEdit />} />
                </Route>
                
            </RoutesDOM>
        </BrowserRouter>
    )
}

export default Routes;