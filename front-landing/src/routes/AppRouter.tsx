import React from 'react';
import {Route, Routes} from "react-router-dom";
import About from "../pages/About";

export const AppRouter = () => {
	return (
		<Routes>
			<Route path='/' element={<About />} />
		</Routes>
	)
}
