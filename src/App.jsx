import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/developer/ui/home/Home";
import NotFound from "./components/pages/NotFound";
import Single from "./components/pages/developer/ui/single/Single";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { StoreProvider } from "./store/StoreContext";
import DashPosts from "./components/pages/developer/dashboard/posts/DashPosts";
import Category from "./components/pages/developer/dashboard/category/Category";

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <StoreProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/single" element={<Single />} />
              <Route path="/dash/posts" element={<DashPosts />} />
              <Route path="/dash/category" element={<Category/>}/>

              {/* FOR NOT FOUND 404 PAGE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </StoreProvider>
      </QueryClientProvider>
    </>
  );
}
export default App;
