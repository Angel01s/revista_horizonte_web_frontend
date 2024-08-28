import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import IndexPage from "./views/IndexPage";
import NosotrosPage from "./views/NosotrosPage";


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout/>}>
        <Route path="/" element={<IndexPage/>}/>    
        <Route path="/nosotros" element={<NosotrosPage/>}/>    
          



        </Route>

      </Routes>
    
    </BrowserRouter>
  )
}
